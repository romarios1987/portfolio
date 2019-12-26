import React, {Component} from 'react';
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

class About extends Component {
    render() {
        return (
            <BaseLayout
                {...this.props.auth}
                title="Roman Batiuk - Learn More About Me"
            >
                <BasePage className="about-page" title="About Page">
                    <h2>About page under development</h2>
                </BasePage>
            </BaseLayout>

        );
    }
}

export default About;