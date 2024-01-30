import { Formik, Form, Field, ErrorMessage } from 'formik';
import './styles/SignIn.css';
import { useNavigate} from 'react-router-dom';


const SignInForm = () => {
  const navigate = useNavigate();
    return (
        <div className='container'>
            <div className='form-container'>
                 <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ){
                        errors.email = 'Invalid email address';
                    }
                    if (!values.password) {
                        errors.password = 'Required';
                    } else if (values.password.length < 10) {
                        errors.password = 'Password must be at least 10 characters';
                    }
                        return errors;
                }}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        actions.resetForm();
                    }, 1000);
                }}
                >   
                {({ handleSubmit, resetForm }) => (
                    <Form className='form-container' noValidate onSubmit={e => {
                        e.preventDefault();
                        handleSubmit(e);
                    }}>
                    <h1>
                        Sign In
                    </h1>
                    <label htmlFor="email"> 
                        Email Address
                    </label>
                    <Field 
                        type="email" name="email" placeholder="Enter your email"/>
                    <ErrorMessage 
                        name="email"component="div" className='error'/>
                    <label htmlFor="password">
                        Password
                    </label>
                    <Field 
                        type="password" name="password" placeholder="Enter your password"/>
                    <ErrorMessage 
                        name="password" component="div" className='error'/>
                    <a href="/forgot-password">
                        Forgot your password?
                    </a>
                    <button type="submit" onClick={() => setTimeout(resetForm, 1000)}>
                        Sign In
                    </button>
                    </Form>
                )}
                 
            </Formik>
            </div>
            <button onClick={() => navigate('/')} className='close-btn'>Close</button> 
            </div>
            );
            };  

    export default SignInForm;