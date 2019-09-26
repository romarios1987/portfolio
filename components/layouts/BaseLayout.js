import React from 'react';
import Header from "../shared/Header";
import BasePage from "../BasePage";

const BaseLayout = (props) => {

    const headerType = props.headerType || 'default';

    return (
        <div className="layout-container">
            <Header className={`port-nav-${headerType}`} isAuthenticated={props.isAuthenticated} user={props.user}/>
            <main className="cover">
                <div className="wrapper">
                    {props.children}
                </div>
            </main>
        </div>
    );
};

// BasePage.defaultProps = {
//     className: ''
// };

export default BaseLayout;

