const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const namespace = 'http://localhost:3000';

// Middleware
exports.checkJWT = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 15,
        jwksUri: 'https://dev-roma.eu.auth0.com/.well-known/jwks.json',
    }),
    audience: 'NF446kLamlii1MZ37Gt3664aY0p5nOaz',
    issuer: 'https://dev-roma.eu.auth0.com/',
    algoritms: ['RS256']
});


exports.checkRole = (role) => {
    return (req, res, next) => {
        const user = req.user;

        if (user && user[namespace + '/roles'] === role) {
            next();
        } else {
            res.status(401).send({title: 'Not authorized', details: 'You are not authorized to access this data'})
        }
    }
};