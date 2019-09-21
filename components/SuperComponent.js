import React, {Component} from 'react';
import BaseLayout from "./layouts/BaseLayout";

class SuperComponent extends Component {
    constructor(props){
        super(props);

        this.someVariable= 'variable';
    }

    alertName(title){
        alert(title)
    }

    render() {
        return (
            <BaseLayout>
                <h1>Super Component</h1>
            </BaseLayout>
        );
    }
}

export default SuperComponent;