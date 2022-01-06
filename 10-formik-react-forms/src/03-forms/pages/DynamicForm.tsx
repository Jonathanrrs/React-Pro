import { Formik, Form } from 'formik';
import { MyTextInput } from '../components';
import formJson from '../data/custom-form.json';
import { MySelect } from '../components/MySelect';

/* acepte cualquier tipo de valor que venga ahí */
const initialValues: {[x:string]: any} = {};

for (const input of formJson) {
    initialValues[input.name] = input.value;
}

export const DynamicForm = () => {
    
    return (
        <div>
            <h1>Dynamic Form</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log(values);
                }}
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
