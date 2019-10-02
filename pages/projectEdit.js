import React, {Component} from 'react';
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import ProjectForm from "../components/portfolio/ProjectForm";

import withAuth from '../components/hoc/withAuth';
import {updatePortfolio, getPortfolioById} from '../actions'

import {Router} from '../routes';


class ProjectEdit extends Component {

    state = {
        error: undefined
    };


    static async getInitialProps({query}) {
        let portfolio = {};
        try {
            portfolio = await getPortfolioById(query.id);
        } catch (err) {
            console.error(err);
        }
        return {portfolio};
    }


    updatePortfolio = async (portfolioData, {setSubmitting}) => {
        setSubmitting(true);
        try {
            const newPortfolio = await updatePortfolio(portfolioData);
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
        const {portfolio} = this.props;
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage title="Update portfolio">
                    <ProjectForm
                        initialValues={portfolio}
                        onSubmit={this.updatePortfolio}
                        error={error}
                    />
                </BasePage>
            </BaseLayout>
        );
    }
}

export default withAuth('siteOwner')(ProjectEdit);