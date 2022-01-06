import { Formik, Form } from 'formik';
import { MyTextInput } from '../components';
import formJson from '../data/custom-form.json'

export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic Form</h1>

            <Formik
                initialValues={{
                    name: "jona"
                }}
                onSubmit={(values) => {
                    console.log(values);

                }}
            >
                {(formil) => (
                    <Form>

                        {formJson.map(({ type, name, placeholder, label }) => {
                            return <MyTextInput
                                key={name}
                                type={(type as any)}
                                name={name}
                                label={label}
                                placeholder={placeholder}
                            />
                        })}



                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
