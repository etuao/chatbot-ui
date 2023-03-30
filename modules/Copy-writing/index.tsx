import React from 'react';
import { Button, Form, Input, InputNumber, Select } from 'antd';
import styles from './index.module.scss';
// 请帮我使用简体中文语言，写一篇营销文案，实现引流的目的
// 产品名称是：T20MAX
// 目标人群是针对：都市白领女性
// 产品卖点有：拖布抬升功能，热水洗拖布功能
// 表述风格方面：正式专业
// 字数控制在300以内，但是请不要低于100字
const FormContent = () => {
  const onFinish = async (e: any) => {
    console.log(e);
    const controller = new AbortController();

    // {"messages":[{"role":"user","content":"请回答我的问题"}],"key":"","prompt":"You are ChatGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond using markdown."}
    const chatBody = {
      model: {
        id: 'gpt-3.5-turbo',
        name: 'Default (GPT-3.5)',
      },
      messages: [
        {
          role: 'user',
          content: `请回答我的问题`,
        },
      ],
      // key: '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',
      key: '',
      prompt: ``,
    };
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
      body: JSON.stringify(chatBody),
    });
    console.log(response, 123456879)
  };
  return (
    <Form layout={'vertical'} name="nest-messages" onFinish={onFinish}>
      <Form.Item name={'name'} label="产品名称" rules={[{ required: true }]}>
        <Input.TextArea
          className={styles.textArea}
          maxLength={100}
          showCount
          placeholder="请输入产品名称"
        />
      </Form.Item>
      <Form.Item name={'sellingPoints'} label="产品卖点">
        <Input.TextArea
          maxLength={100}
          showCount
          className={styles.textArea}
          placeholder="请输入产品卖点"
        />
      </Form.Item>
      <Form.Item name={'target'} label="目标人群" rules={[{ required: true }]}>
        <Input.TextArea
          maxLength={100}
          showCount
          className={styles.textArea}
          placeholder="请输入目标人群"
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
            defaultValue={'low'}
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
            defaultValue={'0'}
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
            defaultValue={'zh'}
            options={[
              { value: 'zh', label: '简体中文' },
              { value: 'en', label: '英语' },
              { value: '2', label: '韩语' },
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
          <InputNumber style={{ width: 120 }} min={100} max={1000} />
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
  return (
    <div className={styles.resultContent}>
      <div className={styles.title}>生成内容</div>
      <div className={styles.content}>
        尊敬的都市白领女性：
        您是否厌倦了每天在家里无休止的清洁工作？T20MAX为您提供了一个解决方案。我们的产品带有拖布抬升和热水洗拖布功能，体现了我们的创新精神和务实的态度。
        使用T20MAX让您的家居清洁工作变得更加轻松和舒适。我们的拖布抬升技术可以让您不必弯腰，无需低头，摆脱了传统方式下的不便和劳累。同时，热水洗拖布功能可以更好地保持清洁卫生，随时让您的家居更加清新而舒适。
        T20MAX是您必备的清洁工具。它的方便使用和智能化的设计，让您在家里的每一个角落都能快速清洁，同时也带来了事半功倍的效果。我们的目标是让您在享受快速清洁的同时，降低您的工作压力和精神压力。
        我们深信，T20MAX会成为您家庭清洁的好帮手。感谢您的支持，期待您尽快获得这款优质产品的便利和舒适。
      </div>
    </div>
  );
};
const Copywriting = () => {
  return (
    <div className={styles.copyWriting}>
      <div className={styles.formContent}>
        <FormContent></FormContent>
      </div>
      <Content></Content>
    </div>
  );
};
export { Copywriting };
