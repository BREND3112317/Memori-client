import React, {Component, useState } from 'react';
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

const { TabPane } = Tabs;
const Content = ({ children, extra }) => (
    <div className="content">
        <div className="main">{children}</div>
        <div 
            className="extra"
            style={{
                marginLeft: 16,
            }}
        >{extra}</div>
    </div>
);

class Header extends Component {
    state = {
        web_title: "<script>alert(1)</script>",
        origin_url: "https://www.google.com/",
        reurl: `https://brlin.org/reurl/${this.props.id}`
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

    extraContent = (
        <div style={{
            display: 'flex',
            width: 'max-content',
            justifyContent: 'flex-end',
        }}>
            <Statistic 
                title={<span><EyeTwoTone twoToneColor="#8957e5"/>View</span>}
                value={112893} 
                style={{
                    marginRight: 32,
                }}
            />
            <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
        </div>
    );

    render() {
        return (
            <PageHeader
                className="site-page-header-responsive"
                onBack={() => window.history.back()}
                title={this.state.web_title}
                subTitle={this.state.origin_url}
                extra={[
                    <Button key="3">Operation</Button>,
                    <Button key="2">Operation</Button>,
                    <Button key="1" type="primary">
                    Primary
                    </Button>,
                ]}
                footer={
                    <Tabs defaultActiveKey="1">
                    <TabPane tab="HTML-View" key="1"/>
                    <TabPane tab="SEO" key="2"/>
                    </Tabs>
                }
            >
                <Content extra={this.extraContent}>{this.renderContent()}</Content>
            </PageHeader>
        )
    }
}

// class Dashboard extends Component {
const Dashboard = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(true);

    const showModal = () => {
        setIsModalVisible(true);
    };
    
    const handleOk = () => {
        setIsModalVisible(false);
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    // render() {
        return (
            <div className="App container">
                <Header id={props.match.params.id}/>
                {/* <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    
                </Modal> */}
            </div>
        );
    // }
}

export {Dashboard};