import React from 'react'
import App from 'next/app'

import auth0Client from "../services/auth0";

// Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss'


class MyApp extends App {

    static async getInitialProps(appContext) {

        const isAuthenticated = process.browser ? auth0Client.clientAuth() : auth0Client.serverAuth(appContext.ctx.req);
        // console.log(isAuthenticated);

        // let isAuthenticated;
        // if (process.browser) {
        //     isAuthenticated = "clientAuth();"
        // } else {
        //     isAuthenticated = "serverAuth();"
        // }

        const auth = {isAuthenticated};

        // calls page's `getInitialProps` and fills `appProps.pageProps`
        const appProps = await App.getInitialProps(appContext);

        return {...appProps, auth}
    }

    render() {
        const {Component, pageProps, auth} = this.props;

        console.log(auth);
        return <Component {...pageProps} auth={auth} />
    }
}

export default MyApp