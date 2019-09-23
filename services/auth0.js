import auth0 from 'auth0-js';
import Cookies from 'js-cookie';

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


    isAuthenticated = () => {
        const expiresAt = Cookies.getJSON('expiresAt');
        // console.log(new Date().getTime() < expiresAt);
        return new Date().getTime() < expiresAt;
    };


    clientAuth = () => {
        return this.isAuthenticated();
    };

    serverAuth = (req) => {
        if (req.headers.cookie) {
            const expiresAtCookie = req.headers.cookie.split(';').find((c) => c.trim().startsWith('expiresAt='));

            // const cookies = req.headers.cookie;
            // console.log(cookies);
            // const splitedCookies = cookies.split(";");
            // console.log(splitedCookies);
            // const expiresAtCookie = splitedCookies.find((c) => c.trim().startsWith('expiresAt='));
            // console.log(expiresAtCookie);
            // const expiresAtArray = expiresAtCookie.split("=");
            // console.log(expiresAtArray);
            // const expiresAt = expiresAtArray[1];
            // console.log(expiresAt);


            if (!expiresAtCookie) {
                return undefined;
            }
            const expiresAt = expiresAtCookie.split('=')[1];
            return new Date().getTime() < expiresAt;

        }
    }

}

const auth0Client = new Auth0();

export default auth0Client;