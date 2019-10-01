import React, {Component} from 'react';
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import {getPortfolioBySlug} from "../actions";

class ProjectDetail extends Component {

    static async getInitialProps({query}) {
        let project = {};
        const slug = query.slug;

        try {
            project = await getPortfolioBySlug(slug);
        } catch(err) {
            console.error(err);
        }
        return {project};
    }

    render() {
        const {project} = this.props;
        return (
            <BaseLayout
                {...this.props.auth}
                title={`Portfolio - ${project.title}`}
            >
                <BasePage>
                    <h1>{project.title}</h1>
                    <h1>{project.description}</h1>
                </BasePage>
            </BaseLayout>
        );
    }
}

export default ProjectDetail;