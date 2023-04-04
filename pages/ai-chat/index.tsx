import { useState } from 'react';
import { trim, debounce } from 'lodash';
import { Input, List, Button, message } from 'antd';
import { v5 as uuid } from 'uuid';
import { RobotOutlined, UserOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import Layout from '@/modules/layout';
import styles from './index.module.scss';

export enum CHAT_TYPE {
  Robot,
  Human,
}

export interface IChatItem {
  id: string;
  name: 'AI Robot' | 'Human';
  type: CHAT_TYPE;
  content: string;
  date?:string;
}

const { TextArea } = Input;

const AiChat = () => {
  const router = useRouter();
  const [len, setLen] = useState(0);
  const [chatList, setChatList] = useState<IChatItem[]>([
    {
      id: '1',
      name: 'AI Robot',
      type: CHAT_TYPE.Robot,
      content: 'hellow, Human!',
      date: '2023-04-02'
    },
    {
      id: '2',
      name: 'Human',
      type: CHAT_TYPE.Human,
      content: 'hello, Robot!',
      date: '2023-04-02'
    },
  ]);
  const handleSend = () => {
    message.info("TODO")
  };
  const handleChange = (e: any) => setLen(trim(e.target.value).length);

  return (
    <Layout>
      <div className={styles.chat}>
        <List
          itemLayout="horizontal"
          dataSource={chatList}
          renderItem={(item) => {
            const isRobot = item.type === CHAT_TYPE.Robot;
            return (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={
                    isRobot ? (
                      <RobotOutlined className={styles.icon} />
                    ) : (
                      <UserOutlined className={styles.icon} />
                    )
                  }
                  title={
                    <div className={styles.title}>
                      <h4>{item.name}</h4>
                      <span>{item.date}</span>
                    </div>
                  }
                  description={item.content}
                />
              </List.Item>
            );
          }}
          size="small"
          className={styles.list}
        />
        <div className={styles.input}>
          <TextArea
            rows={6}
            maxLength={500}
            placeholder="用一句简短的话描述您的问题"
            onChange={debounce(handleChange, 50)}
            allowClear
          />
          <div className={styles.send}>
            <Button type="primary" onClick={handleSend}>
              发送
            </Button>
            <span>{len}/500</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AiChat;
