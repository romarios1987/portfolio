import React, {Component} from 'react';
import BaseLayout from "../components/layouts/BaseLayout";
import Link from "next/link";

import axios from "axios";
import BasePage from "../components/BasePage";

class Portfolios extends Component {

    static async getInitialProps() {
        let posts = [];

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            posts = response.data;

        } catch (error) {
            console.error(error);
        }

        return {posts: posts.splice(0, 10)};
    }

    renderPosts(posts) {
        return posts.map((post) => {
            return (
                <li key={post.id}>
                    <Link as={`/portfolio/${post.id}`} href={'/portfolio/[id]'}>
                        <a>{post.title}</a>
                    </Link>
                </li>
            )
        })
    }


    render() {
        // const {posts} = this.props;
        return (
            <BaseLayout>
                <BasePage>
                    <h2>Portfolio page</h2>
                </BasePage>
            </BaseLayout>
        );
    }
}

export default Portfolios;