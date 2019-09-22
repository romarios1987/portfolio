import React from 'react';
import {Container} from 'reactstrap';
// import PropTypes from 'prop-types';

const BasePage = (props) => {

    const {className} = props;

    return (
        <div className={`base-page ${className}`}>
            <Container>
                {props.children}
            </Container>
        </div>
    );
};


BasePage.defaultProps = {
    className: ''
};


// BasePage.propTypes = {
//     className: PropTypes.string.isRequired
// };

export default BasePage;