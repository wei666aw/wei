import React, { Component } from 'react';
import { Layout } from 'antd';
//引入antd的样式文件
// import style from './index.module.less';
import Btn from '../../components/Btn'
const { Header, Content, Footer, Sider } = Layout;

class Lys extends Component {
  state = {}
  render() {
    return (
      <Layout>
        <Sider style={{ with: '100vh', height: '100vh', color: 'white' }}  >
          <Btn></Btn>
        </Sider>
        <Layout className="site-layout" >
          <Header style={{ background: 'white' }}>头部</Header>
          <Content>
            内容区
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>

    )
  }
}


export default Lys;