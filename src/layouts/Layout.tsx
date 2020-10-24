import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  const [current, setCurrent] = React.useState("home");
  const handleClick = (e: any) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="home" icon={<MailOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="about" icon={<AppstoreOutlined />}>
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="contact" icon={<AppstoreOutlined />}>
          <Link to="/contact">Contact</Link>
        </Menu.Item>
        {/* <SubMenu
          key="SubMenu"
          icon={<SettingOutlined />}
          title="Navigation Three - Submenu"
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu> */}
        <Menu.Item key="alipay">
          <a
            href="http://anthondev.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            anthondev.com
          </a>
        </Menu.Item>
      </Menu>

      <div>{children}</div>
    </div>
  );
};
