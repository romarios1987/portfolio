// Render Prop
import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {FormGroup, Label, Input, FormFeedback, FormText, Button} from 'reactstrap';
import PortInput from "../form/PortInput";


const validateInputs = (values) => {
    let errors = {};

    // const entries = Object.entries(values);
    // debugger;

    // Object.entries(values).forEach(([key,value]) !!!


    Object.keys(values).forEach((key) => {

        if (!values[key]) {
            errors[key] = `Field ${key.toUpperCase()} is required`
        }
    });
    return errors;
};


const INITIAL_VALUES = {
    title: '',
    description: ''
};


const PortfolioNewForm = (props) => (
    <div>
        <Formik
            initialValues={INITIAL_VALUES}
            validate={validateInputs}
            onSubmit={props.onSubmit}
        >
            {({isSubmitting}) => (
                <Form>
                    <Field
                        name="title"
                        label="Title"
                        placeholder="Enter title project"
                        component={PortInput}

                    />
                    <Field
                        name="description"
                        label="Description"
                        placeholder="Enter description project"
                        component={PortInput}
                    />

                    <Button type="submit" color="success" disabled={isSubmitting}>Create</Button>
                </Form>
            )}
        </Formik>
    </div>
);

export default PortfolioNewForm;