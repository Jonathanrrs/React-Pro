import './mylabel.css';

export interface MyLabelProps {
    /**
        * This is the message that will be displayed on the label
   */
    label: string;
    /**
        * This is the default size of the label
    */
    size: 'normal'|'h1'|'h2'|'h3';
}



export const MyLabel = ({
    label = 'No Label',
    size = 'normal'
}: MyLabelProps) => {
    return (
        <span className={`${size}`}>
            {label}
        </span>
    )
}
