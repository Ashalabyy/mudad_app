module.exports.Config = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 8080,
    DB_HOST: process.env.DB_HOST || 'mongodb+srv://ahmedtattan:8w66QSwUrgCKcfIX@mudadapp.agk6ypc.mongodb.net/mudadapp?retryWrites=true&w=majority&appName=mudadapp',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASS: process.env.DB_PASS || '',
    DB_DATABASE: process.env.DB_DATABASE || 'mudadapp',
    SECRET_JWT: process.env.SECRET_JWT || "mudadappmudad",
};