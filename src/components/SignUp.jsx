import './styles/SignUp.css';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const SignUpForm = ({ onClose, showForm }) => {
    const navigate = useNavigate();

    const styles = {
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
        },
        formContainer: {
            height: '75%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            borderRadius: '10px',
            border: '1px solid #DDDDDD',
            boxShadow: '1px 3px 10px rgba(136,136,136,.4)'
        },
        childElement: {
            backgroundColor: 'white',
            textAlign: 'center',
        },
        input: {
            width: '80%',
            padding: '10px',
            margin: '10px auto',
            display: 'block',
            border: '1px solid #DDDDDD',
            borderRadius: '10px',
        },
        inputFocus: {
            outline: 'none'
        }
        }
        useEffect(() => {
            if(!showForm) {
                navigate('/');
            }
        }, [showForm, navigate]);

        const validate = Yup.object({
        firstName: Yup.string().required("Firstname Required"),
        lastName: Yup.string(),
        email: Yup.string().email("Invalid email format").required("Email Required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Password Required"),
        confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Password must match").required("Confirm Password Required"),
        age: Yup.number().required("Age Required").min(14, "You must be at least 14 years"),
    });

    return (
    <div>
    <Formik
        initialValues ={initialValues}
        validationSchema={validate}
        onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
        }}
        >
            {(formik) => (
               <div style={styles.container}>
                 <div style={styles.formContainer}>
                     <h1 style={styles.childElement} className='signup-header'>
                        Sign Up
                    </h1>
                     <Form className='form-content' noValidate>
                          <div style={styles.childElement}>
                            <label style={{...styles.childElement, ...styles.firstNameLabel}} className="data-info" htmlFor="firstName">
                                First Name
                            </label>
                            <input style={styles.input} type="text" {...formik.getFieldProps("firstName")}
                            onFocus={(e) => e.target.style.outline = 'none'}
                            onBlur={(e) => e.target.style.outline = ''} placeholder="Your first name"/>
                            <ErrorMessage name="firstName" component="div" className="error" />
                          </div>
                          <div style={styles.childElement}>
                            <label htmlFor="lastName"style={styles.childElement}>
                                Last Name
                            </label>
                            <input type="text" style={styles.input} {...formik.getFieldProps("lastName")} 
                            onFocus={(e) => e.target.style.outline = 'none'}
                            onBlur={(e) => e.target.style.outline = ''}
                            placeholder="Your last name"
                            />
                            <ErrorMessage name="lastName" component="div" className="error" />
                          </div>
                          <div style={styles.childElement}>
                            <label htmlFor="email" style={styles.childElement}>
                                Email
                            </label>
                            <input type="email" style={styles.input} {...formik.getFieldProps("email")} 
                            onFocus={(e) => e.target.style.outline = 'none'}
                            onBlur={(e) => e.target.style.outline = ''}
                            placeholder="Your email address"
                            />
                            <ErrorMessage name="email" component="div" className="error"/>
                          </div>
                          <div style={styles.childElement}>
                            <label htmlFor="password" style={styles.childElement}>Password
                            </label>
                            <input type="password" style={styles.input}{...formik.getFieldProps("password")} 
                            onFocus={(e) => e.target.style.outline = 'none'}
                            onBlur={(e) => e.target.style.outline = ''}
                            placeholder="Your password"
                            />
                            <ErrorMessage name="password" component="div" className="error" />
                          </div>
                          <div style={styles.childElement}>
                            <label htmlFor="confirmPassword" style={styles.childElement}>
                                Confirm Password
                            </label>
                            <input type="password" style={styles.input} {...formik.getFieldProps("confirmPassword")} 
                            onFocus={(e) => e.target.style.outline = 'none'}
                            onBlur={(e) => e.target.style.outline = ''}
                            placeholder="Confirm your password"
                            />
                            <ErrorMessage name="confirmPassword" component="div" className="error"/>
                          </div>
                          <div style={styles.childElement} >
                          <button type="submit" className='sign-up-btn'>
                            Register
                        </button>
                          <button type="reset" className='sign-up-btn'>
                            Reset
                        </button>
                          </div>
                     </Form>
                    </div>
               </div>
            )}
            </Formik>
            <button onClick={() => { onClose(); navigate('/'); }} className='close-btn'>Close</button> 
        </div>
   
    );
    };  
        const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        age: "",
        confirmPassword: "",
    };
    export default SignUpForm;