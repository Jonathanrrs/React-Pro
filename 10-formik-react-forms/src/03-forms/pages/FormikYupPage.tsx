import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';



export const FormikYupPage = () => {


    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(15, 'Debe de tener 15 caracteres o menos').required('Requerido'),
            lastName: Yup.string().max(15, 'Debe de tener 15 caracteres o menos').required('Requerido'),
            email: Yup.string().email('Debe ser un correo válido').required('Requerido')
        })
    });

    return (
        <div>
            <h1>Formik Yup</h1>
            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="firstName">First name</label>
                {/* <input
                    type="text"
                    name="firstName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                /> */}
                {/* con el getFieldProps ya estable el name, value, blur y onchange */}
                <input type="text" {...getFieldProps('firstName')} />

                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label htmlFor="lastName">Last name</label>
                <input type="text" {...getFieldProps('lastName')} />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label htmlFor="email">Email Address</label>
                <input type="text" {...getFieldProps('email')} />
                {/* <span>Email is required</span> */}
                {/* <span>Check for an valid email format</span> */}
                {touched.email && errors.email && <span>{errors.email}</span>}

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
