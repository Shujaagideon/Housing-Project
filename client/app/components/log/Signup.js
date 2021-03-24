import React from 'react'
import { Container, Wrapp, StartTitle, CustomBtn } from '../../styles/common'
import { Form, Input, LogWrapper } from '../../styles/login'
import { Fdata } from '../UIdata/framerData';
import * as Yup from 'yup';
import Axios from 'axios';
import { Formik } from 'formik';
import { motion } from 'framer-motion';


const Signup = (props) => {
    const initialValues = {
        first: '',
        last: '',
        email: '',
        password: '',
    }
    const validation = Yup.object().shape({
        first: Yup.string()
            .required('Name is required'),
        last: Yup.string()
            .required('Last Name is required'),
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
                <LogWrapper login initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <StartTitle center>
                        SignUp
                </StartTitle>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validation}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                let dataToSubmit = {
                                    firstname: values.first,
                                    lastname: values.last,
                                    email: values.email,
                                    password: values.password
                                };

                                Axios.post(`/signup`, dataToSubmit)
                                    .then(response => response.data)
                                    .then(response => {
                                        if (response.Success) {
                                            props.history.push("/");
                                            window.localStorage.setItem('userId', response.userId);
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
                                <Form variants={Fdata.ParentCard} action="">
                                    <motion.div variants={Fdata.ChildrenCard} className="input-holder">
                                        <Input type="text"
                                            placeholder='First Name'
                                            id='first' required
                                            value={values.first}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <label htmlFor="first">First Name</label>
                                    </motion.div>
                                    <motion.div variants={Fdata.ChildrenCard} className="input-holder">
                                        <Input type="text"
                                            placeholder='Last Name'
                                            id='last' required
                                            value={values.last}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <label htmlFor="last">Last Name</label>
                                    </motion.div>
                                    <motion.div variants={Fdata.ChildrenCard} className="input-holder">
                                        <Input type="email"
                                            placeholder='e-mail'
                                            id='email' required
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <label htmlFor="email">e-mail</label>
                                    </motion.div>
                                    <motion.div variants={Fdata.ChildrenCard} className="input-holder">
                                        <Input type="password"
                                            placeholder='password'
                                            id='password' required
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <label htmlFor="password">password</label>
                                    </motion.div>

                                    <CustomBtn htmlType="submit" disabled={isSubmitting} onClick={handleSubmit}>
                                        SignUp
                        </CustomBtn>
                                </Form>)
                        }}
                    </Formik>

                </LogWrapper>
            </Wrapp>
        </Container>
    )
}

export default Signup
