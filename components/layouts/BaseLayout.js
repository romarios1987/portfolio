import React from 'react';
import Header from "../shared/Header";
import BasePage from "../BasePage";

const BaseLayout = (props) => {

    // const className = props.className || '';

    return (
        <div className="layout-container">
            <Header isAuthenticated={props.isAuthenticated} user={props.user}/>
            <main className={`cover ${props.className}`}>
                <div className="wrapper">
                    {props.children}
                </div>
            </main>
        </div>
    );
};

BasePage.defaultProps = {
    className: ''
};

export default BaseLayout;

