const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const config = require('../config');
const NAMESPACE = config.NAMESPACE;


// Middleware
exports.checkJWT = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 50,
        jwksUri: 'https://dev-roma.eu.auth0.com/.well-known/jwks.json',
    }),
    audience: 'NF446kLamlii1MZ37Gt3664aY0p5nOaz',
    issuer: 'https://dev-roma.eu.auth0.com/',
    algoritms: ['RS256']
});


exports.checkRole = (role) => {
    return (req, res, next) => {
        const user = req.user;
        // console.log(user);

        if (user && user[NAMESPACE + '/roles'] && (user[NAMESPACE + '/roles'] === role)) {
            next();
        } else {
            res.status(401).send({title: 'Not authorized', details: 'You are not authorized to access this data'})
        }
    }
};