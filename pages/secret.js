import React, {Component} from 'react';
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import withAuth from "../components/hoc/withAuth";

import axios from 'axios';

class Secret extends Component {

    static getInitialProps() {
        const superSecretValue = 'superSecretValue';
        return {superSecretValue};
    }

    state = {
        secretData: []
    };

    async componentDidMount() {
        const res = await axios.get('/api/v1/secret');
        const secretData = res.data;

        this.setState({
            secretData
        })
    }


    displaySecretData() {
        const {secretData} = this.state;
        if (secretData && secretData.length > 0) {
            return secretData.map((data, index) => {
                return (
                    <div key={index}>
                        <p>{data.title}</p>
                        <p>{data.description}</p>
                    </div>
                )
            })
        }
    }

    render() {
        const {superSecretValue} = this.props;
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage>
                    <h2>Secret Secret Secret</h2>
                    <p>Secret Content</p>
                    <h1>{superSecretValue}</h1>

                    {this.displaySecretData()}
                </BasePage>
            </BaseLayout>
        )
    }
}

export default withAuth(Secret);