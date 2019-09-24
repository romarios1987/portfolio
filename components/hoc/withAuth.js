import React from 'react';
import BaseLayout from "../layouts/BaseLayout";
import BasePage from "../BasePage";

export default function (Component) {
    return class withAuth extends React.Component {

        static async getInitialProps(arg) {
            const pageProps = await Component.getInitialProps && await Component.getInitialProps(arg);
            console.log(pageProps);
            return {...pageProps}
        }

        renderProtectedPage() {
            const {isAuthenticated} = this.props.auth;
            if (isAuthenticated) {
                return (
                    <Component {...this.props}/>
                )
            } else {
                return (
                    <BaseLayout {...this.props.auth}>
                        <BasePage>
                            <h1>You are not Authenticated. Please login access this page</h1>
                        </BasePage>
                    </BaseLayout>
                )
            }
        }

        render() {
            return this.renderProtectedPage()
        }
    }
}