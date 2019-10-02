import React, {Component} from 'react';
import BaseLayout from "../components/layouts/BaseLayout";

import {Container, Row, Col} from 'reactstrap';

import Typed from 'react-typed';

class Index extends Component {

    state = {
        roles: ['Developer', 'Team Player', 'Course Creator', 'React.js', 'Node.js', 'Vue.js']
    };

    render() {
        const {user, isAuthenticated} = this.props.auth;

        return (
            <BaseLayout
                className="cover" {...this.props.auth}
                headerType="index"
                title="Roman Batiuk - Portfolio"
            >
                <div className="main-section">
                    <div className="background-image">
                        <img src="/static/images/background-index.png" alt={''}/>
                    </div>

                    <Container>
                        <Row>
                            <Col md="6">
                                <div className="hero-section">
                                    <div className={`flipper`}>
                                        <div className="back">
                                            <div className="hero-section-content">
                                                <h2> Full Stack Web Developer </h2>
                                                <div className="hero-section-content-intro">
                                                    Have a look at my portfolio.
                                                </div>
                                            </div>
                                            <img className="image" src="/static/images/section-1.png" alt={''}/>
                                            <div className="shadow-custom">
                                                <div className="shadow-inner">{}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md="6" className="hero-welcome-wrapper">
                                <div className="hero-welcome-text">
                                    <h1>
                                        {isAuthenticated && <span><b>{user.name}</b></span>}
                                        Welcome to the portfolio website of <strong>Roman Batiu</strong>k.
                                    </h1>
                                </div>


                                <Typed
                                    loop
                                    typeSpeed={70}
                                    backSpeed={70}
                                    strings={this.state.roles}
                                    backDelay={1000}
                                    loopCount={0}
                                    showCursor
                                    className="self-typed"
                                    cursorChar="|"
                                />


                                <div className="hero-welcome-bio">
                                    <h1>
                                        Let's take a look on my work.
                                    </h1>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </BaseLayout>
        );
    }
}

export default Index;