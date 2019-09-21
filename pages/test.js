import React from 'react';

import BaseLayout from "../components/layouts/BaseLayout";


const Test = (props) => {
    const {testId} = props;
    return (
        <BaseLayout>
            <h1>Test Page, ID:{testId}</h1>
        </BaseLayout>
    );
};

Test.getInitialProps = async function (context) {

    const testId = context.query.id;

    return {testId}
};


export default Test;