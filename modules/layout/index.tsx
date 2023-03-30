import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout as AntLayout, Menu } from 'antd';
import classnames from 'classnames';
import Head from 'next/head';
import router from 'next/router';
import { MenuClickEventHandler } from 'rc-menu/lib/interface';
import styles from './index.module.scss';

const { Header, Sider, Content } = AntLayout;
export interface ILayoutProps {
  children: any;
}
const Layout: React.FC<ILayoutProps> = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [menuKey, setMenuKey] = useState('');
  const handleOnClick: MenuClickEventHandler = (e) => {
    setMenuKey(e.key);
    router.push(e.key);
  };

  return (
    <>
      <Head>
        <title>Chatbot UI</title>
        <meta name="description" content="ChatGPT but better." />
        <meta
          name="viewport"
          content="height=device-height ,width=device-width, initial-scale=1, user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AntLayout className={styles.layout}>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className={styles.logo} onClick={() => router.push('/')}>
              AI GPT
            </div>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              items={[
                {
                  key: '/chat',
                  icon: <UserOutlined />,
                  label: 'AI 聊天',
                },
                {
                  key: '/gen-article',
                  icon: <VideoCameraOutlined />,
                  label: 'AI 图文',
                },
              ]}
              onClick={handleOnClick}
            />
          </Sider>
          <AntLayout className="site-layout">
            <Header className={styles.common}>
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: classnames({ [styles.trigger]: true }),
                  onClick: () => setCollapsed(!collapsed),
                },
              )}
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              {props.children}
            </Content>
          </AntLayout>
        </AntLayout>
      </main>
    </>
  );
};

export default Layout;
