import {Meta, StoryObj} from "@storybook/react";
import Button, {ButtonProps} from "./Button";

type Story = StoryObj<ButtonProps>;

export default {
    component: Button
} as Meta<Story>;

export const Primary: Story = (args) => (
    <Button label='button-label' {...args} />
)
