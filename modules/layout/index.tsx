import React, { useState } from 'react';
import { Layout as AntLayout, Menu } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  FileTextOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import classnames from 'classnames';
import Head from 'next/head';
import router from 'next/router';
import { MenuClickEventHandler } from 'rc-menu/lib/interface';
// import { Copywriting } from '../Copy-writing/index';
import 'antd/dist/reset.css';
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
              items={[
                {
                  key: '/ai-chat',
                  icon: <UserOutlined />,
                  label: 'AI 聊天',
                },
                {
                  key: '/text',
                  icon: <FileTextOutlined />,
                  label: '文案创作',
                  children: [{
                    key: '/copy-writing?type=writing',
                    label: '引流营销文案',
                  },{
                    key: '/copy-writing?type=employment',
                    label: '招聘JD',
                  }]
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
          <AntLayout>
            <Header className={styles.header}>
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: classnames({ [styles.trigger]: true }),
                  onClick: () => setCollapsed(!collapsed),
                },
              )}
            </Header>
            <Content className={styles.content}>{props.children}</Content>
          </AntLayout>
        </AntLayout>
      </main>
    </>
  );
};

export default Layout;
