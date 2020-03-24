import React, { Component } from 'react'
import { Menu } from 'antd';
import style from './index.module.less'
import {
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

class Btn extends Component {
    state = {
        collapsed: false,
    }
    render() {
        return (
            <div>
                <div className={style.logo} > Welcome Admin </div>
                <Menu defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline" theme="dark"
                    inlineCollapsed={this.state.collapsed} >
                    <Menu.Item key="1" >
                        <PieChartOutlined />
                        <span > 大致概况 </span> </Menu.Item >
                    <Menu.Item key="2" >
                        <DesktopOutlined />
                        <span > 用户管理 </span> </Menu.Item >
                    < Menu.Item key="3" >
                        < ContainerOutlined />
                        <span> 商品管理 </span> </Menu.Item >
                    < SubMenu key="sub1" title={<span> <MailOutlined/><span > 设置属性 </span> </span >} >
                    </SubMenu>
                </Menu>
            </div>

        );
    }
}
export default Btn;