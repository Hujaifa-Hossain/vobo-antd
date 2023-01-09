import React, { lazy, Suspense, useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";

import Loading from "./shared/Loading";
const Home = lazy(() => import("./pages/Home"));
const Details = lazy(() => import("./pages/Details"));
const NotFound = lazy(() => import("./shared/NotFound"));
const { Content, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const User = () => {
    return (
      <>
        <Layout
          style={{
            minHeight: "100vh",
          }}
        >
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
          >
            
            <Menu
              theme="light"
              defaultSelectedKeys={["1"]}
              mode="inline"
              items={items}
            />
          </Sider>
          <Layout className="site-layout">
            
            <Content
              style={{
                margin: "0 16px",
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <User />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "users/:id",
          element: <Details />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
};

export default App;