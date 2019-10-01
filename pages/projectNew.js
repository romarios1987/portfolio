import React, {Component} from 'react';
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import ProjectForm from "../components/portfolio/ProjectForm";

import withAuth from '../components/hoc/withAuth';
import {createPortfolio} from '../actions'

import {Router} from '../routes';


const INITIAL_VALUES = {
    title: '',
    description: ''
};


class ProjectNew extends Component {

    state = {
        error: undefined
    };

    static async getInitialProps() {
        let portfolio = {};
        return {portfolio};
    }

    savePortfolio = async (portfolioData, {setSubmitting}) => {
        setSubmitting(true);
        try {
            const newPortfolio = await createPortfolio(portfolioData);
            setSubmitting(false);
            this.setState({error: undefined});
            Router.pushRoute('/portfolio');
        } catch (err) {
            const error = err.message || 'Server Error';
            setSubmitting(false);
            this.setState({error})
        }


    };

    render() {
        const {error} = this.state;
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage className="portfolio-create-page" title="Create new portfolio">
                    <ProjectForm
                        initialValues={INITIAL_VALUES}
                        onSubmit={this.savePortfolio}
                        error={error}
                    />
                </BasePage>
            </BaseLayout>
        );
    }
}

export default withAuth('siteOwner')(ProjectNew);