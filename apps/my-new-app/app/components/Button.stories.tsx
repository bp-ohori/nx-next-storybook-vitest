import { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
    component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args : {
        primary: true,
        label: 'XXXXXXXXButton'
    },
}


export const Secondary: Story = {
    args : {
        label: 'Button',
    },
}


export const Large : Story = {
    args : {
    size: 'large',
    label: 'Button',
    }
};

export const Small: Story = {
    args :{
    size: 'small',
    label: 'Button',
    },
};

export const LongText: Story = {
    args :{
    size: 'small',
    label: 'ButtonButtonButtonButtonButtonButton',
    },
};