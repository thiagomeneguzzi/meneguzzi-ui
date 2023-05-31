import {useState} from "react";
import {Meta, StoryObj} from "@storybook/react";
import {Button, ButtonProps} from "./Button";

type Story = StoryObj<ButtonProps>;

export default {
    component: Button
} as Meta<Story>;

export const Primary: Story = (args) => {
    const [value, setValue] = useState('Hello');
    const setChange = () => {
        setValue(value === 'Hello' ? 'Bye' : 'Hello');
    };

    return <Button onClick={setChange}>{value}</Button>
}
