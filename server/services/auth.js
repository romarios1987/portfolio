const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

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