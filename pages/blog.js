import React, {Component} from 'react';
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

class Blog extends Component {
    render() {
        return (
            <BaseLayout>
                <BasePage>
                    <h2>Blog page</h2>
                </BasePage>
            </BaseLayout>
        );
    }
}

export default Blog;