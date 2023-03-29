import React from 'react';
import { Button, Form, Input, InputNumber, Select } from 'antd';
// 请帮我使用简体中文语言，写一篇营销文案，实现引流的目的
// 产品名称是：T20MAX
// 目标人群是针对：都市白领女性
// 产品卖点有：拖布抬升功能，热水洗拖布功能
// 表述风格方面：正式专业
// 字数控制在300以内，但是请不要低于100字
const FormContent = () => {
  const onFinish = (e: any) => {
    console.log(e);
  };
  return (
    <Form layout={'vertical'} name="nest-messages" onFinish={onFinish}>
      <Form.Item name={'name'} label="产品名称" rules={[{ required: true }]}>
        <Input.TextArea
          maxLength={100}
          showCount
          style={{ width: '260px', height: '100px' }}
        />
      </Form.Item>
      <Form.Item name={'sellingPoints'} label="产品卖点">
        <Input.TextArea
          maxLength={100}
          showCount
          style={{ width: '260px', height: '100px' }}
        />
      </Form.Item>
      <Form.Item name={'target'} label="目标人群" rules={[{ required: true }]}>
        <Input.TextArea
          maxLength={100}
          showCount
          style={{ width: '260px', height: '100px' }}
        />
      </Form.Item>
      <Form.Item style={{ width: '100%' }}>
        <Form.Item
          name="creativity"
          label="创造力"
          style={{
            display: 'inline-block',
            width: '50%',
          }}
        >
          <Select
            style={{ width: 120 }}
            options={[
              { value: 'low', label: '低' },
              { value: 'meddle', label: '中' },
              { value: 'high', label: '高' },
            ]}
          />
        </Form.Item>
        <Form.Item
          name="style"
          label="风格"
          style={{
            display: 'inline-block',
            width: '50%',
          }}
        >
          <Select
            style={{ width: 120 }}
            options={[
              { value: '0', label: '轻松休闲' },
              { value: '1', label: '正式专业' },
              { value: '2', label: '搞笑幽默' },
              { value: '3', label: '抒情细腻' },
              { value: '4', label: '诙谐讽刺' },
              { value: '5', label: '童趣可爱' },
              { value: '6', label: '热情活泼' },
              { value: '7', label: '戏剧夸张' },
            ]}
          />
        </Form.Item>
      </Form.Item>
      <Form.Item>
        <Form.Item
          name="language"
          label="语言"
          style={{ display: 'inline-block', width: '50%' }}
        >
          <Select
            style={{ width: 120 }}
            options={[
              { value: 'zh', label: '简体中文' },
              { value: 'en', label: '英语' },
              { value: '2', label: '韩语' },
              { value: '3', label: '抒情细腻' },
              { value: '4', label: '德语' },
              { value: '5', label: '法语' },
            ]}
          />
        </Form.Item>
        <Form.Item
          name="MaximumLength"
          label="最大结果长度"
          style={{
            display: 'inline-block',
            width: '50%',
          }}
        >
          <InputNumber style={{ width: 120 }} />
        </Form.Item>
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ background: '#1677ff' }}
        >
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};
const Content = () => {
  return <div></div>;
};
const Copywriting = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{ width: '300px', background: '#fff', padding: '20px' }}
        className="formContent"
      >
        <FormContent></FormContent>
      </div>
      <Content></Content>
    </div>
  );
};
export { Copywriting };
