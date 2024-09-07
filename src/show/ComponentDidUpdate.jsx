import React, { useState, useEffect } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, Image, Drawer } from "antd";
import {
  BrowserRouter as Router,
  Route, Routes, Link, useParams, useNavigate,
} from "react-router-dom";
import "./show-post.css";

const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(window.innerWidth <= 768);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleResize = () => {
    const isMobileView = window.innerWidth <= 768;
    setIsMobile(isMobileView);
    setCollapsed(isMobileView);
  };

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Router>
      <Layout>
        {!isMobile && (
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={[
                {
                  key: "1",
                  icon: <UserOutlined />,
                  label: <Link to="/post/1">nav 1</Link>,
                },
                {
                  key: "2",
                  icon: <VideoCameraOutlined />,
                  label: <Link to="/post/2">nav 2</Link>,
                },
                {
                  key: "3",
                  icon: <UploadOutlined />,
                  label: <Link to="/post/3">nav 3</Link>,
                },
              ]}
            />
          </Sider>
        )}
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={
                collapsed || isMobile ? (
                  <MenuUnfoldOutlined />
                ) : (
                  <MenuFoldOutlined />
                )
              }
              onClick={isMobile ? toggleDrawer : toggleCollapsed}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Drawer
            title="Navigation"
            placement="left"
            onClose={toggleDrawer}
            visible={drawerVisible}
          >
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={[
                {
                  key: "1",
                  icon: <UserOutlined />,
                  label: <Link to="/post/1">nav 1</Link>,
                },
                {
                  key: "2",
                  icon: <VideoCameraOutlined />,
                  label: <Link to="/post/2">nav 2</Link>,
                },
                {
                  key: "3",
                  icon: <UploadOutlined />,
                  label: <Link to="/post/3">nav 3</Link>,
                },
              ]}
            />
          </Drawer>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes>
              <Route path="/post/:id" element={<Post />} />
              <Route path="/post/:id/more-info" element={<PostMoreInfo />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    fetchPostData(id);
  }, [id]);

  const fetchPostData = async (postId) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const data = await response.json();
    // Adding a placeholder image URL for each post
    data.imageUrl = `https://placehold.co/600x400?text=Post+${postId}`;
    setPost(data);
  };

  return (
    <div className="post-container">
      {post ? (
        <div className="post-content">
          <h1>{post.title}</h1>
          <Image
            className="responsive-image"
            width={400}
            src={post.imageUrl}
            alt={`Post ${post.id} Image`}
            style={{ marginBottom: "24px", borderRadius: "20px" }}
          />
          <p>{post.body}</p>
          <Button onClick={() => navigate(`/post/${post.id}/more-info`)}>
            More Information
          </Button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

const PostMoreInfo = () => {
  const { id } = useParams();
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    fetchPostData(id);
  }, [id]);

  const fetchPostData = async (postId) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const data = await response.json();
    setPost(data);
  };

  return (
    <div className="post-more-info-container">
      {post ? (
        <div className="post-more-info-content">
          <h1>More Information about Post {post.id}</h1>
          <p>{post.body}</p>
          {/* Add any additional information you want to display here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
