import React, {Component} from 'react';
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

class Cv extends Component {
    render() {
        return (
            <BaseLayout
                {...this.props.auth}
                title="Preview of my CV"
            >
                <BasePage className="cv-page" title="CV Page">
                    <h2 style={{fontStyle: 'italic'}}>CV page</h2>
                </BasePage>
            </BaseLayout>
        );
    }
}

export default Cv;
