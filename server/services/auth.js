const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const config = require('../config');
const NAMESPACE = config.NAMESPACE;
// const CLIENT_ID = process.env.CLIENT_ID;


// const namespace = 'http://localhost:3000/';


// Middleware
exports.checkJWT = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 50,
        jwksUri: 'https://dev-aivhnkbw.eu.auth0.com/.well-known/jwks.json',
    }),
    audience: 'VUmeHzIu3c0v4plf2e917oUavRM1RJLk',
    issuer: 'https://dev-aivhnkbw.eu.auth0.com/',
    algoritms: ['RS256']
});


// exports.checkRole = (role) => {
//     return (req, res, next) => {
//         const user = req.user;
//         console.log(user);
//
//         if (user && user[process.env.NAMESPACE + '/role'] && (user[process.env.NAMESPACE + '/role'] === role)) {
//             next();
//         } else {
//             res.status(401).send({title: 'Not authorized', details: 'You are not authorized to access this data'})
//         }
//     }
// };

exports.checkRole = (role) => (req, res, next) => {
    const user = req.user;
    // console.log(config.NAMESPACE);
    // console.log(user);
    if (user && (user[NAMESPACE + '/role'] === role)) {
        next();
    } else {
        return res.status(401).send({title: 'Not authorized', details: 'You are not authorized to access this data'})
    }
}
;