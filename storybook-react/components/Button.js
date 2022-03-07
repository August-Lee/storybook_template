/**
 * @file button
 * @author lijianan
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'antd';
import 'antd/dist/antd.min.css'


export default class TsButton extends Component {

    static propTypes = {
        /** 显示文案 */ 
        text: PropTypes.string.isRequired,
        /** 点击事件 */
        onClick: PropTypes.func.isRequired
    };

    static defaultProps = {
        text: '提交'
    }


    render() {
        const {text, onClick} = this.props;
        return (
            <Button onClick={onClick} type="primary">{text}</Button>
        );
    }
}
