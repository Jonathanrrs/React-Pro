import { Formik, Field, Form, ErrorMessage, } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components/MyTextInput';

import '../styles/styles.css';

export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Abstraction</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',

                }}
                onSubmit={(values) => {
                    console.log(values);

                }}
                validationSchema={Yup.object({
                    firstName: Yup.string().max(15, 'Debe de tener 15 caracteres o menos').required('Requerido'),
                    lastName: Yup.string().max(15, 'Debe de tener 15 caracteres o menos').required('Requerido'),
                    email: Yup.string().email('Debe ser un correo válido').required('Requerido'),
                    terms: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
                    jobType: Yup.string().required('Requerido').notOneOf(['it-jr'], 'Esta opción no es permitida.')
                })
                }>

                {(formik) => (
                    /* ya el onsubmit viene dentro */
                    <Form>
                        <MyTextInput
                            label="First name"
                            name={'firstName'}
                            placeholder="First name"
                        />

                        <MyTextInput
                            label="Last name"
                            name={'lastName'}
                            placeholder="Last name"
                        />

                        <MyTextInput
                            label="Email"
                            name={'email'}
                            placeholder="email"
                            type="email"
                        />


                        <label htmlFor="jobType">Job Type</label>
                        <Field name="jobType" as="select">
                            <option>Pick something</option>
                            <option value="">Pick something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-jr">IT JR. </option>
                        </Field>
                        <ErrorMessage name="jobType" component="span" />

                        <label>
                            <Field name="terms" type="checkbox" />
                            Terms and conditions
                        </label>
                        <ErrorMessage name="terms" component="span" />

                        <button type="submit">Submit</button>
                    </Form>

                )
                }
            </Formik>
        </div>
    )
}
