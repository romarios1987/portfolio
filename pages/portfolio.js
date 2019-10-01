import React, {Component} from 'react';
import BaseLayout from "../components/layouts/BaseLayout";
import {Link} from '../routes';
import {
    Card, CardImg, CardText, CardBody, CardHeader, Col, Row,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

import {getAllPortfolio, deleteProject} from '../actions'

import BasePage from "../components/BasePage";
import {Router} from '../routes';

class Portfolio extends Component {

    static async getInitialProps() {
        let portfolio = [];
        try {
            portfolio = await getAllPortfolio();
        } catch (err) {
            console.error(err);
        }
        return {portfolio};
    }


    displayDeleteWarning(projectId) {
        const isConfirm = window.confirm('Are you sure you want delete this project?');

        if (isConfirm) {
            // Delete Project
            deleteProject(projectId)
                .then(() => {
                    // Delete what to do next
                    Router.pushRoute('/portfolio')
                })
                .catch((err) => console.error(err))
        }
    }


    renderAllPortfolio(portfolio) {
        const {isAuthenticated, isSiteOwner} = this.props.auth;
        if(!portfolio.length){
            return <h1>There are no projects</h1>
        }
        return portfolio.map((project) => {
            return (
                <Col md="4" key={project._id}>
                    <div className="project-preview">
                        <Link route={`/portfolio/${project.slug}`}>
                            <a>
                                <h2 className="project-title">
                                    {project.description}
                                </h2>
                            </a>
                        </Link>
                        {isAuthenticated && isSiteOwner &&
                        <>
                            <Button onClick={() => Router.pushRoute(`/portfolio/${project._id}/edit`)}
                                    color="warning">Edit</Button>
                            <Button onClick={() => this.displayDeleteWarning(project._id)}
                                    color="danger">Delete</Button>
                        </>
                        }
                    </div>
                </Col>
            )
        })
    }


    render() {
        const {portfolio} = this.props;
        const {isAuthenticated, isSiteOwner} = this.props.auth;
        return (
            <BaseLayout
                {...this.props.auth}
                title="Roman Batiuk - All My Projects"
            >
                <BasePage className="portfolio-page" title="Portfolio">
                    {isAuthenticated && isSiteOwner &&
                    <Button onClick={() => Router.pushRoute('/portfolio/new')} color="success">Add project</Button>}
                    <Row>
                        {this.renderAllPortfolio(portfolio)}
                    </Row>
                </BasePage>
            </BaseLayout>
        );
    }
}

export default Portfolio;