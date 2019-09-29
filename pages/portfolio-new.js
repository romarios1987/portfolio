import React, {Component} from 'react';
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import PortfolioNewForm from "../components/portfolio/portfolio-new-form";

import withAuth from '../components/hoc/withAuth';
import {createPortfolio} from '../actions'

import {Router} from '../routes';


const INITIAL_VALUES = {
    title: '',
    description: ''
};


class PortfolioNew extends Component {

    state = {
        error: undefined
    };

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
                    <PortfolioNewForm
                        initialValues={INITIAL_VALUES}
                        onSubmit={this.savePortfolio}
                        error={error}
                    />
                </BasePage>
            </BaseLayout>
        );
    }
}

export default withAuth('siteOwner')(PortfolioNew);