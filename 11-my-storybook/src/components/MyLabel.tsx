import './mylabel.css';

export interface MyLabelProps {
    /**
        * This is the message that will be displayed on the label
   */
    label: string;
    /**
        * This is the default size of the label
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
        * This will be displayed the label oi uppercase if it is true
    */
    allCaps?: boolean;
    /**
        *  This will be the color of the label
    */
   color?: 'primary'|'secondary'|'tertiary';

}



export const MyLabel = ({
    allCaps = false,
    color = 'primary',
    label = 'No Label',
    size = 'normal',
}: MyLabelProps) => {
    return (
        <span className={`${size} text-${color}`}>
            {allCaps ? label.toUpperCase() : label}
        </span>
    )
}
