/* eslint-disable no-undef */
import { Formik } from 'formik';
import React, { useState, useEffect } from 'react'
import * as Yup from 'yup';
import { Container, Wrapp, StartTitle, CustomBtn } from '../../styles/common'
import { LogWrapper, Form, Input } from '../../styles/login'
import { loginUser } from '../../actions/actions';
// import { useDispatch } from 'react-redux';
import Axios from 'axios';
import { Fdata } from '../UIdata/framerData';
import { motion } from 'framer-motion';
import { withRouter } from 'react-router';
import { useGlobalDispatch, useGlobalState } from '../UIdata/statecontext';
// import FormikWrapper from './FormikWrapper';

const Login = (props) => {
    const dispatch = useGlobalDispatch();
    const {logedin} = useGlobalState()
    const rememberMeChecked = localStorage.getItem("rememberMe") ? true : false;
    const [formErrorMessage, setFormErrorMessage] = useState('')
    const [rememberMe, setRememberMe] = useState(rememberMeChecked)

    const handleRememberMe = () => {
        setRememberMe(!rememberMe)
    };
    const handleLog = () => {
        dispatch({ type: 'login', logedin: true })
    }
    useEffect(() => {
        window.localStorage.setItem('logedin', logedin)
    }, [logedin])

    const initialEmail = localStorage.getItem("rememberMe") ? localStorage.getItem("rememberMe") : '';
    // const dispatch = useDispatch();
    const initialValues = {
        email: '',
        password: '',
    }
    const validation = Yup.object().shape({
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    })
    return (
        <Container>
            <Wrapp center initial='initial' animate='animate' exit='exit'>
                <LogWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <StartTitle center>
                        Login
                    </StartTitle>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validation}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                let dataToSubmit = {
                                    email: values.email,
                                    password: values.password
                                };

                                Axios.post(`/login`, dataToSubmit)
                                    .then(response => response.data)
                                    .then(response => {
                                        if (response.loginSuccess) {
                                            handleLog();
                                            props.history.push("/");
                                            window.localStorage.setItem('userId', response.userId);
                                            window.localStorage.setItem('username', [response.firstName, response.lastName]);
                                            if (rememberMe === true) {
                                                window.localStorage.setItem('rememberMe', values.id);
                                            } else {
                                                localStorage.removeItem('rememberMe');
                                            }
                                        } else {
                                            setFormErrorMessage('Check out your Account or Password again')
                                        }
                                    })
                                    .catch(err => {
                                        setFormErrorMessage('Check out your Account or Password again')
                                        setTimeout(() => {
                                            setFormErrorMessage("")
                                        }, 3000);
                                    });
                                setSubmitting(false);
                            }, 500);
                        }}
                    >
                        {formik => {
                            const {
                                values,
                                touched,
                                errors,
                                isSubmitting,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                            } = formik;
                            return (

                                <Form variants={Fdata.ParentCard} login action="">
                                    <motion.div variants={Fdata.ChildrenCard} className="input-holder">
                                        <Input type="email"
                                            placeholder='e-mail'
                                            id='email' required
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                        <label htmlFor="email">{errors.email && touched.email ? errors.email : "e-mail"}</label>
                                    </motion.div>
                                    <motion.div variants={Fdata.ChildrenCard} className="input-holder">
                                        <Input type="password"
                                            placeholder='password'
                                            id='password' required
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <label htmlFor="password">{errors.password && touched.password ? errors.password : "password"}</label>
                                    </motion.div>

                                    <CustomBtn login htmlType="submit" disabled={isSubmitting} onClick={handleSubmit}>
                                        Login
                            </CustomBtn>
                                </Form>
                            );
                        }}
                    </Formik>
                </LogWrapper>
            </Wrapp>
        </Container>
    )
}

export default withRouter(Login)
