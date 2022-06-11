import React, { useState } from 'react';
import 'antd/dist/antd.min.css';
import Search from './search'
import './index.css';
import { Button} from 'antd';
import { Layout, Menu} from 'antd';
import {
  PieChartOutlined,
  FileOutlined,
  UserOutlined,
  SkinOutlined,
  DollarOutlined,
  SearchOutlined
} from '@ant-design/icons';
const { Header, Content, Sider } = Layout;

const items = [{
    icon: <UserOutlined />,
    key: 1
},{
    label: "Events",
    icon: <PieChartOutlined />,
    key: 2
},{
    label: "Blog",
    icon: <FileOutlined />,
    key: 3
},{
    label: "Membership",
    icon: <UserOutlined />,
    key: 4
},{
    label: "Merchandise Products",
    icon: <SkinOutlined />,
    key: 5
},{
    label: "Rewards",
    icon: <DollarOutlined />,
    key: 6
},{
    label: "Search",
    icon: <SearchOutlined />,
    key: 7
}];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        ><h2 style={{ padding: 10, fontWeight:'bold'  ,color: 'lightblue', }}>Search</h2></Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <div 
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 500,
            }}
          >
                <Search></Search>
                <Button type="link" onClick={(e) => {
      e.preventDefault();
      window.location.href='http://google.com';
      }} block>Link for Registration</Button>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;