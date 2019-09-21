import React, {Component} from 'react';
import Link from "next/link";
import {Link as NextLink} from '../../routes'
import '../../styles/main.scss'


class Header extends Component {
    render() {

        // debugger;
        const title = this.props.title;

        return (
            <React.Fragment>
                {
                    this.props.children
                }
                <p className="customClass">{title}</p>
                <p className="customClassFromFile">{title}</p>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
                <Link href="/blog">
                    <a>Blog</a>
                </Link>
                <Link href="/portfolios">
                    <a>Portfolio</a>
                </Link>
                <Link href="/cv">
                    <a>cv</a>
                </Link>

                <NextLink route='test'  params={{id: '2'}}><a>Test 2</a></NextLink>
                <NextLink route='/test/3'><a>Test 3</a></NextLink>

                <style jsx>
                    {
                        `
                            a{font-size: 40px};
                            .customClass{color: red}
                        `
                    }
                </style>

            </React.Fragment>
        );
    }
}

export default Header;