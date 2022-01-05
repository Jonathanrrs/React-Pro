import {useFormik} from 'formik';
import '../styles/styles.css';


export const FormikBasicPage = () => {

    const {handleChange, values, handleSubmit} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: (values) => {
            console.log(values);
            
        }
    });

    return (
        <div>
            <h1>Formik Basic Tutorial</h1>
            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="firstName">First name</label>
                <input
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    value={values.firstName}
                />
                <span>First Name is required</span>

                <label htmlFor="lastName">Last name</label>
                <input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    value={values.lastName}
                />
                <span>Last Name is required</span>

                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                />
                <span>Email is required</span>
                <span>Check for an valid email format</span>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
