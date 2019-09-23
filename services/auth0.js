import auth0 from 'auth0-js';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import axios from 'axios';


class Auth0 {

    constructor() {
        this.auth0 = new auth0.WebAuth({
            domain: 'dev-roma.eu.auth0.com',
            clientID: 'NF446kLamlii1MZ37Gt3664aY0p5nOaz',
            responseType: 'token id_token',
            redirectUri: 'http://localhost:3000/callback',
            scope: 'open_id profile'
        });
    }


    handleAuthentication = () => {

        return new Promise((resolve, reject) => {
            this.auth0.parseHash((err, authResult) => {
                if (authResult && authResult.accessToken && authResult.idToken) {
                    this.setSession(authResult);
                    resolve();
                } else if (err) {
                    reject(err);
                    console.log(err)
                }
            })
        });
    };

    setSession(authResult) {

        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());

        Cookies.set('user', authResult.idTokenPayload);
        Cookies.set('jwt', authResult.idToken);
        Cookies.set('expiresAt', expiresAt);

    }


    logout = () => {
        Cookies.remove('user');
        Cookies.remove('jwt');
        Cookies.remove('expiresAt');

        this.auth0.logout({
            returnTo: '',
            clientID: 'NF446kLamlii1MZ37Gt3664aY0p5nOaz'
        })
    };

    login = () => {
        this.auth0.authorize();
    };


    // isAuthenticated = () => {
    //     const expiresAt = Cookies.getJSON('expiresAt');
    //     // console.log(new Date().getTime() < expiresAt);
    //     return new Date().getTime() < expiresAt;
    // };


    getJWKS = async () => {
        const res = await axios.get('https://dev-roma.eu.auth0.com/.well-known/jwks.json');
        return res.data;
    };


    verifyToken = async (token) => {
        if (token) {
            const decodedToken = jwt.decode(token, {complete: true});

            if (!decodedToken) {
                return undefined;
            }

            const jwks = await this.getJWKS();
            const jwk = jwks.keys[0];
            // console.log(jwk)

            // BUILD CERTIFICATE
            let certificate = jwk.x5c[0];
            certificate = certificate.match(/.{1,64}/g).join('\n');
            certificate = `-----BEGIN CERTIFICATE-----\n${certificate}\n-----END CERTIFICATE-----\n`;
            //
            if (jwk.kid === decodedToken.header.kid) {
                try {
                    const verifiedToken = jwt.verify(token, certificate);
                    const expiresAt = verifiedToken.exp * 1000;
                    return (verifiedToken && new Date().getTime() < expiresAt) ? verifiedToken : undefined;

                } catch (err) {
                    console.log(err);
                    return undefined;
                }
            }

        }
        return undefined;
    };


    clientAuth = async () => {
        const token = Cookies.getJSON('jwt');
        return await this.verifyToken(token);

    };

    serverAuth = async (req) => {
        if (req.headers.cookie) {
            const tokenCookie = req.headers.cookie.split(';').find((c) => c.trim().startsWith('jwt='));
            if (!tokenCookie) {
                return undefined;
            }
            const token = tokenCookie.split('=')[1];
            return await this.verifyToken(token);
        }
        return undefined;
    }

}

const auth0Client = new Auth0();

export default auth0Client;