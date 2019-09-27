const JWTSECRET = process.env.JWTSECRET;

module.exports = {
    jwtSecret: JWTSECRET,
    mongodburi: 'DB_CONNECT = mongodb://127.0.0.1:27017/codemunit'
};