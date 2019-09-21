import React from 'react';
import Header from "../shared/Header";

const BaseLayout = (props) => {
    return (
        <>
            <Header title="Hello World"/>
            {props.children}
        </>
    );
};

export default BaseLayout;