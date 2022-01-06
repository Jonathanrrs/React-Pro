import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

import '../styles/styles.css';


export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''

                }}
                onSubmit={(values) => {
                    console.log(values);

                }}
                validationSchema={Yup.object({
                    name: Yup.string().required('Requerido').min(2, 'Debe tener al menos 2 caracteres').max(15, 'Debe de tener 15 caracteres o menos'),
                    email: Yup.string().required('Requerido').email('Debe ser un correo válido'),
                    password1: Yup.string().required('Requerido').min(6, 'Debe tener al menos 6 letras'),
                    password2: Yup.string().required('Requerido').oneOf([Yup.ref('password1')], 'Las contraseñas no coinciden'),
                })}
            >
                {({handleReset}) => (
                    <Form>

                        <MyTextInput
                            label="Name"
                            name="name"
                            type="text"
                            placeholder='Name'
                        />
                        <MyTextInput
                            label="Email"
                            name="email"
                            type="email"
                            placeholder='Email'
                        />
                        <MyTextInput
                            label="Password"
                            name="password1"
                            type="password"
                            placeholder='Password'
                        />
                        <MyTextInput
                            label="Repeat Password"
                            name="password2"
                            type="password"
                            placeholder='Repeat password'
                        />


                        <button type="submit">Create</button>
                        <button type="button" onClick={handleReset}>Reset</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
