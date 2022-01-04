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

   

    return {
        /* esparcir las propiedades que se le pasan en el initiState */
        ...formData,
        formData,
        onChange,
        
    }
}
