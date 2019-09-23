import React, {Component} from 'react';
import Link from "next/link";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';


import auth0Client from "../../services/auth0";


const BsNavLink = (props) => {
    const {route, title} = props;
    return (
        <Link href={route}><a className="nav-link port-navbar-link">{title}</a></Link>
    )
};

const Login = () => {
    return (
        <span onClick={auth0Client.login} className="nav-link port-navbar-link clickable">Login</span>
    )
};


const Logout = () => {
    return (
        <span onClick={auth0Client.logout} className="nav-link port-navbar-link clickable">Logout</span>
    )
};


export default class Header extends Component {

    state = {isOpen: false};

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };


    render() {

        const {isOpen} = this.state;

        const {isAuthenticated} = this.props;

        return (
            <div>
                <Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
                    <NavbarBrand href="/" className="port-navbar-brand">Roman Batiuk</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className="port-navbar-item">
                                <BsNavLink route="/" title="Home"/>
                            </NavItem>
                            <NavItem className="port-navbar-item">
                                <BsNavLink route="/about" title="About"/>
                            </NavItem>
                            <NavItem className="port-navbar-item">
                                <BsNavLink route="/portfolios" title="Portfolios"/>
                            </NavItem>
                            <NavItem className="port-navbar-item">
                                <BsNavLink route="/blog" title="Blog"/>
                            </NavItem>
                            <NavItem className="port-navbar-item">
                                <BsNavLink route="/cv" title="CV"/>
                            </NavItem>


                            {!isAuthenticated &&
                            <NavItem className="port-navbar-item">
                                <Login/>
                            </NavItem>
                            }

                            {isAuthenticated &&
                            <NavItem className="port-navbar-item">
                                <Logout/>
                            </NavItem>
                            }

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}