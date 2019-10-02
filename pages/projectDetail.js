import React, {Component} from 'react';
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import {getPortfolioBySlug} from "../actions";
import {Badge} from 'reactstrap';

class ProjectDetail extends Component {

    static async getInitialProps({query}) {
        let project = {};
        const slug = query.slug;

        try {
            project = await getPortfolioBySlug(slug);
        } catch (err) {
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
                    <div className="wrap-details-project">
                        <h1>{project.title}</h1>
                        <img src={project.image} alt={project.title} width={500}/>
                        <p className="mt-3">Web-site: <a className="project_link" href={project.project_link}
                                                         target="_blank">{project.title}</a></p>

                        {project.github_link &&
                        <p>GitHub: <a className="project_link" href={project.github_link}
                                      target="_blank">GitHub code</a></p>
                        }
                        <p>Description project: {project.description}</p>
                    </div>
                </BasePage>
            </BaseLayout>
        );
    }
}

export default ProjectDetail;