import React, {Component} from 'react';
import BaseLayout from "../components/layouts/BaseLayout";
import {rewriteUrlForNextExport} from "next/dist/next-server/lib/router/rewrite-url-for-export";
import axios from 'axios';
import SuperComponent from "../components/SuperComponent";

class Index extends SuperComponent {

    static async getInitialProps({req}) {
        let postsData = {};

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/3');
            postsData = response.data;

        } catch (error) {
            console.error(error);
        }

        return {initialData: [1, 23, 4, 5], postsData};
    }


    constructor(props) {
        super(props);

        this.state = {
            title: 'Index Page'
        };

        console.log('constructor');
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    updateTitle = () => {

        this.setState({title: 'About Page'})
    };


    render() {
        const {title} = this.state;
        const {initialData, postsData} = this.props;
        // console.log('Render');
        // console.log(initialData);
        // console.log(postsData);
        return (
            <BaseLayout>
                <h3>Hello, this is Home Page</h3>
                <h2>{postsData.title}</h2>
                <button onClick={this.updateTitle}>Change</button>
            </BaseLayout>

        );
    }
}

export default Index;