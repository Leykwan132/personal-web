import React from "react";
import "./NavBar.css";
import { Affix, Menu, PageHeader, Button, Dropdown } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
const menu = (
  <Menu>
    <Menu.Item>
      <p>Back to top</p>
    </Menu.Item>
    <Menu.Item>
      <p>Erm</p>
    </Menu.Item>
    <Menu.Item>
      <p>Contact Me</p>
    </Menu.Item>
  </Menu>
);

const NavBar = () => {
  return (
    <div>
      <Affix>
        <PageHeader
          className="site-page-header-ghost-wrapper"
          title="Ley Kwan Choo"
          subTitle="Madison, WI"
        />
      </Affix>
    </div>
  );
};

export default NavBar;
