import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './styles/Subscription.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './styles/Subscription.css';

const SubscriptionForm = () => {

    const initialValues = {
        name: '',
        email: '',
        topics: [],
        acceptTerms: false,
    };

    const handleSubmit = (values, {resetForm}) => {
        resetForm();
    };

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} className="my-form-container">
            {() => (
                <Form className='subscription-content' noValidate type="email">
                <FontAwesomeIcon icon={faEnvelope} className='envelope-icon'/>
                   <h1>Newsletter</h1>
                    <p>Stay up to date with our latest news and products</p>
                    <div className='email-form'>
                        <label htmlFor="email">
                            Email:
                        </label>
                        <Field type="email" id="email" name="email" className="email-field"/>
                        <ErrorMessage name="email" component="div" />
                    </div>
    
                    <div className='choose-points'>
                        <label>
                            Topics of Interest:
                        </label>
                        <div>
                            <label>
                                <Field type="checkbox" name="topics" value="topic1" />
                                Technology
                            </label>
                        </div>
                        <div>
                            <label>
                                <Field type="checkbox" name="topics" value="topic2" />
                                Business
                            </label>
                        </div>
                        <div>
                            <label>
                                <Field type="checkbox" name="topics" value="topic3" />
                                Entertainment
                            </label>
                        </div>
                        <div>
                            <label>
                                <Field type="checkbox" name="topics" value="topic3" />
                                Others
                            </label>
                        </div>
                    </div>
    
                    <div>
                        <label>
                            <Field type="checkbox" name="acceptTerms" />
                            I accept the terms and conditions
                        </label>
                        <ErrorMessage name="acceptTerms" component="div" />
                    </div>
    
                    <button type="submit">Subscribe</button>
                </Form>
            )}
            
        </Formik>
    );
};

export default SubscriptionForm;
