// Render Prop
import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {FormGroup, Label, Input, FormFeedback, FormText, Button, Alert} from 'reactstrap';
import PortInput from "../form/PortInput";


const validateInputs = (values) => {
    let errors = {};
    const entries = Object.entries(values);
    // debugger;

    // Object.entries(values).forEach(([key,value]) !!!

    Object.keys(values).forEach((key) => {
        if (!values[key]) {
            errors[key] = `Field ${key.toUpperCase()} is required`
        }
    });
    return errors;
};


const PortfolioNewForm = ({initialValues, onSubmit, error}) => (
    <div>
        <Formik
            initialValues={initialValues}
            validate={validateInputs}
            onSubmit={onSubmit}
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

                    {error && <Alert color="danger">{error}</Alert>}

                    <Button type="submit" color="success" disabled={isSubmitting}>Create</Button>
                </Form>
            )}
        </Formik>
    </div>
);

export default PortfolioNewForm;