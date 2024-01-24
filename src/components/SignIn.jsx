import { Formik, Form, Field, ErrorMessage } from 'formik';
import './styles/SignIn.css'

const SignInForm = () => {
  
    return (
        <div className='container'>
            <div className='form-container'>
          
        <Formik
        initialValues={{ email: '', password: ''}}
        onSubmit={(values, {setSubmitting }) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);
        }}
        >      
        <Form className='form-container'>
            <h1>Sign In</h1>
            <label htmlFor="emal"> Email Address</label>
            <Field type="email" name="email" placeholder="Enter your email"/>
            <ErrorMessage name="email"component="div"/>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" placeholder="Enter your password"/>
            <ErrorMessage name="password" component="div" />
            <a href="/forgot-password">Forgot your password?</a>
            <button type="submit">Sign In</button>
           
            </Form>
        </Formik>
        </div>
    </div>
    );
    }
    export default SignInForm;