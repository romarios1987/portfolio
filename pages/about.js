import React, {Component} from 'react';
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

class About extends Component {
    render() {
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage className="about-page">
                    <h2>About page</h2>
                </BasePage>
            </BaseLayout>

        );
    }
}

export default About;