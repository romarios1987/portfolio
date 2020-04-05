import React, {Component} from 'react';
import BaseLayout from "../components/layouts/BaseLayout";
import Particles from 'react-particles-js';

// import {Container, Row, Col} from 'reactstrap';

import Typed from 'react-typed';

class Index extends Component {

    state = {
        roles: ['Developer', 'React.js', 'Node.js', 'Vue.js']
    };

    render() {
        // const {user, isAuthenticated} = this.props.auth;

        return (
            <BaseLayout
                className="cover" {...this.props.auth}
                headerType="index"
                title="Roman Batiuk - Portfolio"
            >

                <div className="main-section">
                    <div className="hero-welcome-wrapper">
                        <div className="hero-welcome-text">
                            <h1>Welcome to my portfolio site</h1>
                            <h2>Roman Batiuk - <Typed
                                loop
                                typeSpeed={70}
                                backSpeed={70}
                                strings={this.state.roles}
                                backDelay={1000}
                                loopCount={0}
                                showCursor
                                className="self-typed"
                                cursorChar="|"
                            /></h2>
                            <h3>Let's take a look on my works</h3>
                        </div>
                    </div>


                    <Particles className="particles" params={{
                        "particles": {
                            "line_linked": {
                                "color":"#fff"
                            },
                            "number": {
                                "value": 150
                            },
                            "size": {
                                "value": 3
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                    }}
                    />


                    {/*<div className="background-image">*/}
                    {/*    <img src="/static/images/background-index.png" alt={''}/>*/}
                    {/*</div>*/}



                </div>

            </BaseLayout>
        );
    }
}

export default Index;
