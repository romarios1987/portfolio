import React from 'react'
import App from 'next/app'

import auth0Client from "../services/auth0";

// Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss'


const namespace = process.env.NAMESPACE;

class MyApp extends App {

    static async getInitialProps(appContext) {

        const appProps = await App.getInitialProps(appContext);

        const user = process.browser
            ? await auth0Client.clientAuth()
            : await auth0Client.serverAuth(appContext.ctx.req);

        const isSiteOwner = user && user[namespace + '/role'] === 'siteOwner';
        // console.log(process.env.BASE_URL);
        const auth = {user, isAuthenticated: !!user, isSiteOwner};

        return {...appProps, auth}
    }

    render() {
        const {Component, pageProps, auth} = this.props;
        // console.log(auth);
        return <Component {...pageProps} auth={auth}/>
    }
}

export default MyApp