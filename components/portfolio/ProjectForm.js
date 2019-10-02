// Render Prop
import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {FormGroup, Label, Input, FormFeedback, FormText, Button, Alert} from 'reactstrap';
import PortInput from "../form/PortInput";
import * as yup from "yup";




// const validateInputs = (values) => {
//     let errors = {};
//     const entries = Object.entries(values);
//     // debugger;
//
//     // Object.entries(values).forEach(([key,value]) !!!
//
//     Object.keys(values).forEach((key) => {
//         if (!values[key]) {
//             errors[key] = `Field ${key.toUpperCase()} is required`
//         }
//     });
//     return errors;
// };


// const validateInputs = Yup.object().shape({
//     title: Yup.string()
//         .required('Required'),
//     image: Yup.string()
//         .required('Required'),
//     project_link: Yup.string()
//         .required('Required!!!'),
// });


const ProjectForm = ({initialValues, onSubmit, error}) => {

    const validationSchema = yup.object().shape({
        title: yup
            .string()
            .required("Title is required!!!"),
        image: yup
            .string()
            .required("Image is required!!!"),
        project_link: yup
            .string()
            .required("Project link is required!!!"),
        tools: yup
            .string()
            .required("Tools is required!!!"),
    });

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
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
                            name="image"
                            label="Image project"
                            placeholder="Enter link image project"
                            component={PortInput}
                        />
                        <Field
                            name="tools"
                            label="Tools project"
                            placeholder="Enter tools"
                            component={PortInput}
                        />

                        <Field
                            name="project_link"
                            label="Project link"
                            placeholder="Enter Project link"
                            component={PortInput}
                        />

                        <Field
                            name="github_link"
                            label="Github link"
                            placeholder="Enter Github link"
                            component={PortInput}
                        />
                        <Field
                            name="description"
                            label="Description"
                            placeholder="Enter description project"
                            component={PortInput}
                        />

                        {error && <Alert color="danger">{error}</Alert>}

                        <Button type="submit" color="success" disabled={isSubmitting}>Save</Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ProjectForm;