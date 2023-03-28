import React from "react";
import "./Register.scss";
 import { Formik } from "formik";

const Register = () => {
    const handleSubmit = (values) => {
        console.log(values, "Handle Submit");
    }
    return (
        <>
            <section className='register'>
                <div className='container'>
                    <div className='register__text'>
                        <h2 className='__text--title'>Ro’yhatdan O’tish</h2>
                        <p className='__text--desc'>
                            Xush kelibsiz! E’lon berish uchun ro’yhatdan o’ting.
                        </p>
                    </div>

                    <div className='register__form'>
                        <Formik
                            initialValues={{ email: "", password: "", username: "" }}
                            validate={(values) => {
                                const errors = {};
                                if (!values.email) {
                                    errors.email = "Required";
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                        values.email
                                    )
                                ) {
                                    errors.email = "Invalid email address";
                                }

                                if(!values.password) {
                                    errors.password = "Required";
                                } else if (
                                    !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(
                                        values.password
                                    )
                                ) {
                                    errors.password = "Invalid password";
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                handleSubmit(values);
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                /* and other goodies */
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type='email'
                                        name='email'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                    {errors.email &&
                                        touched.email &&
                                        errors.email}
                                    <input
                                        type='password'
                                        name='password'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                    {errors.password &&
                                        touched.password &&
                                        errors.password}
                                    <input
                                        type='text'
                                        name='username'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.username}
                                    />
                                    {errors.username &&
                                        touched.username &&
                                        errors.username}
                                    <button
                                        type='submit'
                                        disabled={isSubmitting}
                                    >
                                        Submit
                                    </button>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Register;