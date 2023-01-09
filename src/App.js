import React, { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import { UserOutlined, ProfileFilled } from "@ant-design/icons";

import { Layout, Menu } from "antd";

import Loading from "./shared/Loading";
const Users = lazy(() => import("./pages/Users"));
const CreateUser = lazy(() => import("./pages/CreateUser"));
const Pages = lazy(() => import("./pages/Pages"));
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
  getItem("Users", "sub1", <UserOutlined />, [
    getItem("", "1", <Link to="/">All users</Link>),
    getItem("", "2", <Link to="create-user">Register user</Link>),
  ]),
  getItem("Pages", "sub2", <ProfileFilled />, [
    getItem("", "3", <Link to="pages">Pages</Link>),
  ]),
];

const App = () => {
  const User = () => {
    return (
      <>
        <Layout
          style={{
            minHeight: "100vh",
          }}
        >
          <Sider
            style={{ backgroundColor: "#fff" }}
            breakpoint="lg"
            collapsedWidth="60"
            collapsible
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
          element: <Users />,
        },
        {
          path: "create-user",
          element: <CreateUser />,
        },
        {
          path: "users/:id",
          element: <Details />,
        },
        {
          path: "pages",
          element: <Pages />,
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
