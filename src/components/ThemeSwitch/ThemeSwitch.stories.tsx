import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeSwitch } from './ThemeSwitch';

export default {
  title: 'Anspar/ThemeSwitch',
  component: ThemeSwitch,
} as ComponentMeta<typeof ThemeSwitch>;

const Template: ComponentStory<typeof ThemeSwitch> = (args) => <ThemeSwitch {...args} />;
const Template2: ComponentStory<typeof ThemeSwitch> = (args) => {
  return <div style={{display:"flex", 
                      justifyContent:"space-between", 
                      alignItems: "center", 
                      backgroundColor: "var(--as-light)",
                      padding: "1rem 0.5rem"}}>
    <ThemeSwitch {...args} />
    <button className='as-btn'>Default</button>
    <button className='as-btn as-bg-warning'>Warning</button>
    <button className='as-btn as-btn-primary'>Primary</button>
    <button className='as-btn' style={{backgroundColor:'var(--as-primary-dim)'}}>Primary Dim</button>
    <button className='as-btn as-btn-secondary'>Secondary</button>
    <button className='as-btn as-bg-danger'>Danger</button>
    <button className='as-btn as-bg-success'>Success</button>
  </div>
}

const Template3: ComponentStory<typeof ThemeSwitch> = (args) => {
  return <div style={{display:"flex", 
                      justifyContent:"space-between", 
                      alignItems: "center", 
                      backgroundColor: "var(--as-light)",
                      padding: "1rem 0.5rem"}}>
    <ThemeSwitch {...args} />
    <span className='as-text-dark as-text-bold as-text-size-xs'>Default</span>
    <span className='as-text-warning as-text-size-xs'>Warning</span>
    <span className='as-text-primary as-text-size-sm'>Primary</span>
    <span className='as-text-secondary as-text-size-n'>Secondary</span>
    <span className='as-text-danger as-text-size-l'>Danger</span>
    <span className='as-text-success as-text-size-xl'>Success</span>
  </div>
}

const Template4: ComponentStory<typeof ThemeSwitch> = (args) => {
  return <div style={{display:"flex", 
                      justifyContent:"space-between", 
                      alignItems: "center", 
                      backgroundColor: "var(--as-light)",
                      padding: "1rem 0.5rem"}}>
    <ThemeSwitch {...args} />
    <span className='as-text-primary as-text-bold as-text-size-xs as-pointer as-blink'>Blink</span>
    <span className='as-text-dark as-text-size-sm as-pointer as-highlight-hover-bg'>Highlight bg</span>
    <span className='as-text-dark as-text-size-n as-pointer as-zoom-hover'>Zoom</span>
    <span className='as-text-danger as-text-size-l as-pointer as-scale_bounce'>Bounce</span>
    <span className='as-text-success as-text-size-xl as-pointer as-lift-up-hover'>Lift up</span>
    <span className='as-loading as-shadow-sm'>Loading</span>
  </div>
}

export const Default = Template.bind({});
Default.args = {
  style: {
    width: "140px" 
  }
}

export const Buttons = Template2.bind({});
Buttons.args = {
  style: {
    width: "30px"
  }
}
export const Text = Template3.bind({});
Text.args = {
  style: {
    width: "30px"
  }
}
export const Animations = Template4.bind({});
Animations.args = {
  style: {
    width: "30px"
  }
}
