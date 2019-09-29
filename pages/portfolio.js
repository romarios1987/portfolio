import React, {Component} from 'react';
import BaseLayout from "../components/layouts/BaseLayout";
import Link from "next/link";
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

    // deleteProject = (projectId) => {
    //     deleteProject(projectId)
    //         .then(() => {
    //             // Delete what to do next
    //             Router.pushRoute('/portfolio')
    //         })
    //         .catch((err) => console.error(err))
    // };


    renderAllPortfolio(portfolio) {
        const {isAuthenticated, isSiteOwner} = this.props.auth;
        return portfolio.map((work) => {
            return (
                <Col md="4" key={work._id}>
                    <React.Fragment>
                        <span>
                          <Card className="portfolio-card">
                            <CardHeader className="portfolio-card-header">{work.title}</CardHeader>
                            <CardBody>
                              <p className="portfolio-card-city">{work.description} </p>
                                {/*<CardTitle className="portfolio-card-title">Some Company {index}</CardTitle>*/}
                                {/*<CardText className="portfolio-card-text">Some Description {index}</CardText>*/}
                                <div className="readMore"> </div>
                            </CardBody>
                              {isAuthenticated && isSiteOwner &&
                              <>
                                  <Button onClick={() => Router.pushRoute(`/portfolio/${work._id}/edit`)}
                                          color="warning">Edit</Button>
                                  <Button onClick={() => this.displayDeleteWarning(work._id)}
                                          color="danger">Delete</Button>
                              </>
                              }
                          </Card>
                        </span>
                    </React.Fragment>
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