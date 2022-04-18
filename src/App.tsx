import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Comment from "./pages/comment";
import Login from "./pages/login";
import Home from "./pages/home";
import SidebarLeft from "./layout/SidebarLeft";
import { Layout, Menu } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const { Header, Sider, Content } = Layout;
function App() {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="app">
      <Router>
        <Layout>
          <SidebarLeft collapsed={collapsed} />
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: toggle,
                }
              )}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: "24 12",
                minHeight: 280,
              }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="comment" element={<Comment />} />
                <Route path="login" element={<Login />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
