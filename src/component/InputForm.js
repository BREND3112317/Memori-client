import React, { Component, useState, useRef } from 'react';
import {
    PageHeader,
    Tabs,
    Input,
    Button,
    Statistic, 
    Descriptions,
    Modal
} from 'antd';
import { LikeOutlined, LinkOutlined, EyeTwoTone } from '@ant-design/icons';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import 'antd/dist/antd.css';
import '../App.css';

class Header extends Component {
    state = {
        url: "",
        id: "",
    };

    renderContent = (column = 2) => (
        <Descriptions size="small" column={column}>
            <Descriptions.Item label="re-url" span={3}>
            <Input 
                defaultValue={this.state.reurl}
                suffix={[
                <CopyToClipboard 
                    defaultValue={this.state.reurl} 
                    text={this.state.reurl}
                >
                    <LinkOutlined />
                </CopyToClipboard>,
                <Button>
                    開啟
                </Button>
                ]}
                readOnly
            />
            </Descriptions.Item>
            <Descriptions.Item label="Create-time">
                2021/10/09 17:19:00
            </Descriptions.Item>
        </Descriptions>
    );
}

const InputForm = () => {
    const accountRef = useRef(undefined);
    const passwordRef = useRef(undefined);

    const refArr = useRef([accountRef, passwordRef]);

    return (
        <div className="App container">
            <input
                type="text"
                name="account"
                ref={accountRef}
            />
            <input
                type="text"
                name="password"
                ref={passwordRef}
            />
            <button onClick={() => {
                refArr.current.forEach((item) => {
                    console.log(`${item.current.name} is ${item.current.value}`);
                })
            }}>提交</button>
        </div>
    )
}

export {InputForm};