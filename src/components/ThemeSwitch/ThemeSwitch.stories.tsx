import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeSwitch } from './ThemeSwitch';

export default {
  title: 'Anspar/ThemeSwitch',
  component: ThemeSwitch,
} as ComponentMeta<typeof ThemeSwitch>;

const Template: ComponentStory<typeof ThemeSwitch> = (args) => <ThemeSwitch {...args}/>;

export const Default = Template.bind({});
export const Large = Template.bind({});
Large.args = {
  size: "140px"
}