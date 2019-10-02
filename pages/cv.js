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
                <BasePage>
                    <h2>CV page</h2>
                </BasePage>
            </BaseLayout>
        );
    }
}

export default Cv;