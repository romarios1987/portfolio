import React, {Component} from 'react';
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

class Blog extends Component {
    render() {
        return (
            <BaseLayout
                {...this.props.auth}
                title="Roman Batiuk - Newest Blog to Read"
            >
                <BasePage className="blog-page" title="Blog Page">
                    <h2 style={{fontStyle: 'italic'}}>Blog page under development</h2>
                </BasePage>
            </BaseLayout>
        );
    }
}

export default Blog;