import { ChangeEvent, FormEvent, useState } from 'react'

/* el tipo de dato T es lo que sea que se le esté pasando por los params a initState */
export const useForm = <T>(initState: T) => {

    const [formData, setFormData] = useState(initState);


    const onChange = (event: ChangeEvent<HTMLInputElement>) => {

        setFormData(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))

    }

    const resetForm = () => {
        setFormData({...initState});
    }

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

   

    return {
        /* esparcir las propiedades que se le pasan en el initiState */
        ...formData,
        /* properties */
        formData,
        /* methods */
        resetForm,
        isValidEmail,
        onChange,
        
    }
}
