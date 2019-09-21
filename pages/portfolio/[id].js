import React from 'react';
import {useRouter} from 'next/router';
import BaseLayout from "../../components/layouts/BaseLayout";

import axios from "axios";


const Portfolio = (props) => {

    const router = useRouter();
const {post} = props;
    return (
        <BaseLayout>
            <h2>Portfolio single work</h2>
            <hr/>
            <h1>{post.id}</h1>
            <p style={{color: 'red'}}>{post.title}</p>
            <p>{post.body}</p>
        </BaseLayout>
    );
};

Portfolio.getInitialProps = async function (context) {

    let post = {};

    const postId = context.query.id;

    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        post = response.data;

    } catch (error) {
        console.error(error);
    }
    return {post}


};


export default Portfolio;