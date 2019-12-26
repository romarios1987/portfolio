import React from 'react';
import BaseLayout from "../layouts/BaseLayout";
import BasePage from "../BasePage";


// const namespace = 'http://localhost:3000/';
const namespace = process.env.NAMESPACE;

export default (role) => {

    return (Component) => {
        return class withAuth extends React.Component {

            static async getInitialProps(arg) {
                const pageProps = await Component.getInitialProps && await Component.getInitialProps(arg);
                // console.log(pageProps);
                return {...pageProps}
            }

            renderProtectedPage() {
                const {isAuthenticated, user} = this.props.auth;

                const userRole = user && user[`${namespace}role`];
                let isAuthorized = false;


                if (role) {
                    if (userRole && userRole === role) {
                        isAuthorized = true;
                    }
                } else {
                    isAuthorized = true;
                }

                // console.log(isAuthorized)
                if (!isAuthenticated) {
                    return (
                        <BaseLayout {...this.props.auth}>
                            <BasePage>
                                <h1>You are not Authenticated. Please login access this page</h1>
                            </BasePage>
                        </BaseLayout>
                    )
                } else if (!isAuthorized) {
                    return (
                        <BaseLayout {...this.props.auth}>
                            <BasePage>
                                <h1>You are not isAuthorized. You don't have a permission...</h1>
                            </BasePage>
                        </BaseLayout>
                    )
                } else {
                    return (
                        <Component {...this.props}/>
                    )
                }
            }

            render() {
                return this.renderProtectedPage()
            }
        }
    }
}


