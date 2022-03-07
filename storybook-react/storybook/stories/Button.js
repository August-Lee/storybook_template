/**
 * @file stories index.js
 * @author lijianan
 */

import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Button from '../../components/Button';
import MD from './Button.md';
import './style.css';

//  第一种写法
// const buttonProps = {
//     text: 'Button',
//     onClick: () => { }
// };

// storiesOf('Button', module)
//     .addDecorator(
//         withInfo({
//             header: false,
//             inline: true
//         })
//     )
//     .add('基本用法', () => <Button {...buttonProps} />, {
//         notes: { MD }
//     })


// 第二种写法
export default {
    title: "Button",
    component: Button,
};
export const 基本写法 = (args) => <Button {...args} />;
基本写法.args = { text: 'button' };
基本写法.story = {
    parameters: {
        notes: { MD },
    },
};



