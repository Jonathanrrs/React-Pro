import {FormEvent} from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';


export const RegisterPage = () => {

    const {formData, onChange, name, email, password1, password2} = useForm({
        name: '',
        email: '',
        password1: '',
        password2: '',
    });
    

    const onSubmit = (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
        
    }
    return (
        <div>
            <h1>Register Page</h1>

            <form noValidate onSubmit={onSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={onChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={onChange}
                />
                <input
                    type="password"
                    name="password1"
                    placeholder="Password"
                    value={password1}
                    onChange={onChange}
                />
                <input
                    type="password"
                    name="password2"
                    placeholder="Repeat Password"
                    value={password2}
                    onChange={onChange}
                />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}
