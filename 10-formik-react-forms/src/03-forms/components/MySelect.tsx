import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name: string;
    placeholder?: string;
    /* poder añadir cualquier cantidad de parametros o propiedas adicionales*/
    [x:string]: any;

}

/* operador rest, para extraer el resto */
export const MySelect = ({label, ...props}: Props) => {

    /* meta: si ha sido tocado, si hay errores */
    const [field] = useField(props);
    

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            <ErrorMessage name={props.name} component="span" />
        </>
    )
}
