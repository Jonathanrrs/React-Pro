import { MyLabel } from "../../components/MyLabel";

export default {
    title: 'UI/MyLabel',
    component: MyLabel
}

const Template = () => <MyLabel />

/* se crea una complia del template, para tener diferentes  historias */
export const Basic = Template.bind({});

export const AllCaps = Template.bind({});

export const Secondary = Template.bind({});