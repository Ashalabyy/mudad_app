
const { structureResponse, hashPassword } = require('../utils/common_utils');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const otpGenerator = require('otp-generator');
const { Config } = require('../Config/config');

const UserModel = require('../models/user_modal');

const {
    RegistrationFailedException,
    InvalidCredentialsException,
    TokenVerificationException,
  
} = require('../utils/exceptions/auth_exceptions');




class AuthRepository {

    registerUser = async (body) => {
        const pass = body.password;

        await hashPassword(body);
const user = new UserModel({
    name:body.name,
    email:body.email,
    password:body.password,
    phoneNumber:body.phoneNumber,
});
const result = await user.save();

        if (!result) {
            throw new RegistrationFailedException();
        }

        return this.userLogin(body.email, pass, true);
    };

    /**
     createOtp = async (params, callback) => {
         const OTP = `${otpGenerator.generate(4, { alphabets: false, upperCase: false, specialChars: false })}`;
         const OTPHash = await bcrypt.hash(OTP, 8);
           let expiration_datetime = new Date();

     }
      
      
     */

    userLogin = async (email, pass, is_register = false) => {
        const user = await UserModel.findOne({email: email });
        if (!user) {
            throw new InvalidCredentialsException('Email not registered');
        }

        const isMatch = await bcrypt.compare(pass, user.password);

        if (!isMatch) {
            throw new InvalidCredentialsException('Incorrect password');
        }

        // user matched!
        const secretKey = Config.SECRET_JWT;
        const token = jwt.sign({ user_id: user._id.toString() }, secretKey, {
            expiresIn: '24h'
        });

        let message = "";
        let responseBody = "";
        if (is_register){ // if registered first
            const { user_id } = user;
            message = "Registered"; // set msg to registered
            responseBody = { user_id, token };
        } else {
            user.password = undefined;
            message = "Authenticated";
            responseBody = { ...user, token };
        }
        return structureResponse(responseBody, 1, message);
    };

    refreshToken = async (body) => {
        const { email, password: pass, oldToken } = body;
        const user = await UserModel.findOne({ email });
        if (!user) {
            throw new InvalidCredentialsException('Email not registered');
        }

        const isMatch = await bcrypt.compare(pass, user.password);

        if (!isMatch) {
            throw new InvalidCredentialsException('Incorrect password');
        }

        // user matched!
        const secretKey = Config.SECRET_JWT;
        const { user_id } = jwt.decode(oldToken);
        
        if (user.user_id.toString() !== user_id){
            throw new TokenVerificationException();
        }
        
        const token = jwt.sign({ user_id: user.user_id.toString() }, secretKey, {
            expiresIn: '24h'
        });

        return structureResponse({ token }, 1, "Refreshed");
    };

}

module.exports = new AuthRepository; 