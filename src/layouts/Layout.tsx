import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

import { MailOutlined, AppstoreOutlined } from "@ant-design/icons";

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
          <Link to="/">Inicio</Link>
        </Menu.Item>
        <Menu.Item key="about" icon={<AppstoreOutlined />}>
          <Link to="/about">Acerca</Link>
        </Menu.Item>
        <Menu.Item key="contact" icon={<AppstoreOutlined />}>
          <Link to="/contact">Contacto</Link>
        </Menu.Item>
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
