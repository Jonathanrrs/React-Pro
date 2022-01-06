import { Formik, Form } from 'formik';
import { MyTextInput } from '../components';
import formJson from '../data/custom-form.json';
import { MySelect } from '../components/MySelect';
import * as Yup from 'yup';

/* acepte cualquier tipo de valor que venga ahí */
const initialValues: {[x:string]: any} = {};
const requiredFields: {[x:string]: any} = {}; 

for (const input of formJson) {
    initialValues[input.name] = input.value;

    if(!input.validations) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {
        if(rule.type === 'required') {
            schema = schema.required('Este campo es requerido');
        }

        if (rule.type === 'minLength') {
            schema = schema.min((rule as any).value || 2, `Mínimo de ${(rule as any).value || 2} caracteres`)
        }

        if(rule.type === 'email') {
            schema = schema.email(`Debe ser un correo válido`);
        }

        requiredFields[input.name] = schema;
    }
}

const validationSchema = Yup.object({...requiredFields})

export const DynamicForm = () => {
    
    return (
        <div>
            <h1>Dynamic Form</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={validationSchema}
            >
                {(formil) => (
                    <Form noValidate>

                        {formJson.map(({ type, name, placeholder, label, options }) => {

                            if(type === 'text' || type === 'pasword' || type === 'email') {

                                return <MyTextInput
                                    key={name}
                                    type={(type as any)}
                                    name={name}
                                    label={label}
                                    placeholder={placeholder}
                                />
                            } else if(type === 'select') {
                                return (
                                    <MySelect
                                        key={name}
                                        label={label}
                                        name={name}
                                    >
                                        <option value="">Select an option</option>
        
                                        {
                                            options?.map(({id, label}) => (
                                                <option key={id} value={label} >{label}</option>
                                            ))
                                        }
                                    </MySelect>
                                )
                            }

                            throw new Error(`El type ${type}, no es soportado`)

                        })}


                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
