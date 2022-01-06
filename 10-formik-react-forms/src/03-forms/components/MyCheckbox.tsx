import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    /* poder añadir cualquier cantidad de parametros o propiedas adicionales*/
    [x: string]: any;

}

/* operador rest, para extraer el resto */
export const MyCheckbox = ({ label, ...props }: Props) => {

    /* meta: si ha sido tocado, si hay errores */
    const [field] = useField({ ...props, type: 'checkbox' });


    return (
        <>
            <label>
                <input type="checkbox" {...field} {...props} />
                {label}
            </label>
            <ErrorMessage name={props.name} component="span" />
        </>
    )
}
