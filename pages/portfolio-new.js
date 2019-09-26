import React, {Component} from 'react';
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import PortfolioNewForm from "../components/portfolio/portfolio-new-form";

import withAuth from '../components/hoc/withAuth';


class PortfolioNew extends Component {


    savePortfolio = (portfolioData,  {setSubmitting}) => {
        alert(JSON.stringify(portfolioData, null, 2));
        setSubmitting(false);
    };

    render() {
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage className="portfolio-create-page" title="Create new portfolio">
                    <PortfolioNewForm onSubmit={this.savePortfolio}/>
                </BasePage>
            </BaseLayout>
        );
    }
}

export default withAuth('siteOwner')(PortfolioNew);