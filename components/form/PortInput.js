import {FormGroup, Label, Input} from 'reactstrap';
import {ErrorMessage} from 'formik';
import React from "react";

const PortInput = ({
                       label,
                       type,
                       field, // { name, value, onChange, onBlur }
                       form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                       ...props
                   }) => (
    <FormGroup>
        <Label for={field.name}><b>{label}</b></Label>
        <Input type={type} {...field} {...props} id={field.name}
               className={touched[field.name] && errors[field.name] ? "is-invalid" : ""}/>
        <ErrorMessage
            component="div"
            name={field.name}
            className="invalid-feedback"
        />
    </FormGroup>
);


export default PortInput;