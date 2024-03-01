const { checkValidation } = require('../middleware/check_validation_middleware');

const AuthRepository = require('../repositiories/auth_repositiory');

class AuthController {

    registerUser = async (req, res, next) => {
        checkValidation(req);
       
        const response = await AuthRepository.registerUser(req.body);
        res.send(response); 
    };

    userLogin = async (req, res, next) => {
        checkValidation(req);
        const response = await AuthRepository.userLogin(req.body.email, req.body.password);
        res.send(response);
    };

    refreshToken = async (req, res, next) => {
        checkValidation(req);
        const response = await AuthRepository.refreshToken(req.body);
        res.send(response);
    };
   
}

module.exports = new AuthController;