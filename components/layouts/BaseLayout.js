import React from 'react';
import Header from "../shared/Header";
import BasePage from "../BasePage";
import Head from "next/head";

const BaseLayout = (props) => {

    const headerType = props.headerType || 'default';

    const title = props.title ? props.title : 'Roman Batiuk - Portfolio';

    return (
        <>
            <Head>
                <title>{title}</title>

                <meta name="description"
                      content="My name is Roman Batiuk and I am a Full-stack Developer."/>
                <meta name="keywords" content="roman batiuk portfolio, batiuk developer, react programming"/>


                <meta property="og:title" content="Roman Batiuk - programmer, developer, bloger"/>
                <meta property="og:locale" content="en_EU"/>
                <meta property="og:url" content={`${process.env.BASE_URL}`}/>
                <meta property="og:type" content="website"/>
                <meta property="og:description" content="My name is Roman Batiuk and I am a freelance developer."/>

                <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png"/>

                <link rel="manifest" href="/static/favicon/site.webmanifest"/>
            </Head>

            <div className="layout-container">
                <Header
                    className={`port-nav-${headerType}`}
                    isAuthenticated={props.isAuthenticated}
                    user={props.user}
                />
                <main className="cover">
                    <div className="wrapper">
                        {props.children}
                    </div>
                </main>
            </div>
        </>
    );
};

// BasePage.defaultProps = {
//     className: ''
// };

export default BaseLayout;

