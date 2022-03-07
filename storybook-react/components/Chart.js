/**
 * @file chart
 * @author lijianan
 */
import React, { Component } from 'react'
import ReactEcharts from "echarts-for-react";
import PropTypes from 'prop-types';

export default class index extends Component {

    static propTypes = {
        /** 显示文案 */
        text: PropTypes.string.isRequired,
        /** 事件集合 */
        onEvent: PropTypes.func.isRequired
    };

    render() {
        const {text, onEvent} = this.props;
        const option = {
            title: {
                text: text,
                left: 'center',
                align: 'right'
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // 套接口数据 data: this.state.week
                // data: this.state.week
            },
            yAxis: {
                type: 'value'
            },
            dataZoom: [{
                show: true,
                type: 'slider',
                start: 70,
                end: 100,
                bottom: '-2%',
            }], // dataZoom 设置滚动条
            color: ['#4ecb73', '#28a6ff', '#cccccc', '#FF3333'], // color 设置颜色
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130], // 套接口数据 data: this.state.date
                // data: this.state.date,
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(220, 220, 220, 0.8)'
                }
            }]
        }

        return (
            <div>
                <ReactEcharts
                    option={option}
                    onEvents={onEvent}
                    style={{ height: '220px', width: '88%', margin: '0 auto', paddingBottom: '100' }}
                />
            </div>
        )
    }
}