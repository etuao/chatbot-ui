import React, { useState } from 'react';
import { Button, Form, Input, InputNumber, Select } from 'antd';
import { Loading } from '../../components/Loading/index';
import { handleSend } from '../request';
import styles from '../index.module.scss';
type PropsForm = {
  callback: Function;
};
export const FormEmployment = (props: PropsForm) => {
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = async (e: any) => {
    setIsLoading(true);
    const { name, language } = e;
    const content = `请帮我使用${language}语言，请帮我写一个招聘JD。包含岗位职责和能力要求等信息。
    招聘岗位名称是：${name}`;
    const text = await handleSend(content);
    setIsLoading(false);
    props.callback(text || '');
  };
  return (
    <div>
      <Form layout={'vertical'} name="nest-messages" onFinish={onFinish}>
        <Form.Item
          name={'name'}
          label="招聘岗位名称"
          rules={[{ required: true, message: '请输入招聘岗位名称' }]}
        >
          <Input.TextArea
            className={styles.textAreaEmp}
            placeholder="请输入招聘岗位名称"
          />
        </Form.Item>

        <Form.Item
          name="language"
          initialValue={'简体中文'}
          label="语言"
          style={{ width: '100%' }}
        >
          <Select
            options={[
              { value: '简体中文', label: '简体中文' },
              { value: '英语', label: '英语' },
              { value: '韩语', label: '韩语' },
              { value: '德语', label: '德语' },
              { value: '法语', label: '法语' },
            ]}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={isLoading}
            style={{ background: '#1677ff' }}
          >
            提交
          </Button>
        </Form.Item>
      </Form>
      {isLoading ? <Loading /> : <></>}
    </div>
  );
};
