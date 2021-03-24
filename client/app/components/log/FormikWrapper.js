import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../actions/actions";
import { Formik } from 'formik';
import { useDispatch } from "react-redux";

function FormWrapper(props, {children}, {validation, initials}) {
    const dispatch = useDispatch();
    const rememberMeChecked = localStorage.getItem("rememberMe") ? true : false;

    const [formErrorMessage, setFormErrorMessage] = useState('')
    const [rememberMe, setRememberMe] = useState(rememberMeChecked)

    const handleRememberMe = () => {
        setRememberMe(!rememberMe)
    };
    // const Submission = 

    const initialEmail = localStorage.getItem("rememberMe") ? localStorage.getItem("rememberMe") : '';

    return (
        <Formik
            initialValues={initials}
            validationSchema={validation}
            // onSubmit=
        >
            {formik => {
                const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset,
                } = formik;
                console.log(formik);
                return (
                    {children}
                );
            }}
        </Formik>
    );
};

export default withRouter(FormWrapper);
{/* 
<div className="app">

    <Title level={2}>Log In</Title>
    <form onSubmit={handleSubmit} style={{ width: '350px' }}>

        <Form.Item required>
            <Input
                id="email"
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Enter your email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                    errors.email && touched.email ? 'text-input error' : 'text-input'
                }
            />
            {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
            )}
        </Form.Item>

        <Form.Item required>
            <Input
                id="password"
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Enter your password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                    errors.password && touched.password ? 'text-input error' : 'text-input'
                }
            />
            {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
            )}
        </Form.Item>

        {formErrorMessage && (
            <label ><p style={{ color: '#ff0000bf', fontSize: '0.7rem', border: '1px solid', padding: '1rem', borderRadius: '10px' }}>{formErrorMessage}</p></label>
        )}

        <Form.Item>
            <Checkbox id="rememberMe" onChange={handleRememberMe} checked={rememberMe} >Remember me</Checkbox>
            <a className="login-form-forgot" href="/reset_user" style={{ float: 'right' }}>
                forgot password
                  </a>
            <div>
                <Button type="primary" htmlType="submit" className="login-form-button" style={{ minWidth: '100%' }} disabled={isSubmitting} onSubmit={handleSubmit}>
                    Log in
                </Button>
            </div>
                Or <a href="/register">register now!</a>
        </Form.Item>
    </form>
</div> */}
