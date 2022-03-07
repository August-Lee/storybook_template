/**
 * @file stories index.js
 * @author lijianan
 */

import React from 'react';
import {storiesOf, addDecorator} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import Chart from '../../components/Chart';
import './style.css';

const props = {
    onEvent: {
        'click': (e) => {
            console.log('打印', e);
        }   
    },
    text: '标题'
};

storiesOf('Chart', module)
.addDecorator(
    withInfo({
        header: false,
        inline: true
    })
)
.add('基本用法', () => <Chart {...props}/>)


