import React from 'react'
import App from 'next/app'

import auth0Client from "../services/auth0";

// Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss'


const namespace = 'http://localhost:3000';

class MyApp extends App {

    static async getInitialProps(appContext) {

        const user = process.browser ? await auth0Client.clientAuth() : await auth0Client.serverAuth(appContext.ctx.req);

        const isSiteOwner = user && user[namespace + '/roles'] === 'siteOwner';
        // console.log(isSiteOwner);

        const auth = {user, isAuthenticated: !!user, isSiteOwner};


        const appProps = await App.getInitialProps(appContext);

        return {...appProps, auth}
    }

    render() {
        const {Component, pageProps, auth} = this.props;

        // console.log(auth);
        return <Component {...pageProps} auth={auth}/>
    }
}

export default MyApp