import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    /* poder añadir cualquier cantidad de parametros o propiedas adicionales*/
    [x:string]: any;

}

/* operador rest, para extraer el resto */
export const MyTextInput = ({label, ...props}: Props) => {

    /* meta: si ha sido tocado, si hay errores */
    const [field, /* meta */] = useField(props);
    

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            <ErrorMessage name={props.name} component="span" />
            {/* {
                meta.touched && meta.error && (
                    <span className="error">{meta.error}</span>
                )
            } */}
        </>
    )
}
