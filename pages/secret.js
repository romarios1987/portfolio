import React, {Component} from 'react';
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

class Secret extends Component {

    renderSecretPage() {
        const {isAuthenticated} = this.props.auth;
        if (isAuthenticated) {
            return (
                <BaseLayout {...this.props.auth}>
                    <BasePage>
                        <h2>Secret Secret Secret</h2>
                        <p>Secret Content</p>
                    </BasePage>
                </BaseLayout>
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
        return this.renderSecretPage()
    }
}

export default Secret;