import React, { useState } from 'react';
import { Button, Form, Input, InputNumber, Select, message } from 'antd';
import Layout from '@/modules/layout';
import styles from './index.module.scss';
import { handleSend } from './request';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Loading } from '../components/Loading/index';
type PropsForm = {
  callback: Function;
};
const FormContent = (props: PropsForm) => {
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = async (e: any) => {
    setIsLoading(true)
    const {
      name,
      sellingPoints,
      target,
      creativity,
      style,
      language,
      MaximumLength,
    } = e;
    const content = `请帮我使用${language}语言，写一篇营销文案，实现引流的目的；产品名称是：${name}；
    ${
      sellingPoints ? '产品卖点有:' + sellingPoints : ''
    }；目标人群是：${target}；表述风格是：${style}；字数为：${MaximumLength}字；`;
    const text = await handleSend(content);
    console.log(text, 123456789)
    setIsLoading(false)
    props.callback(text || '');
  };
  return (
    <div>
      <Form layout={'vertical'} name="nest-messages" onFinish={onFinish}>
        <Form.Item
          name={'name'}
          label="产品名称"
          rules={[{ required: true, message: '请输入产品名称' }]}
        >
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
        <Form.Item
          name={'target'}
          label="目标人群"
          rules={[{ required: true, message: '请输入目标人群' }]}
        >
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
            initialValue={'低'}
            style={{
              display: 'inline-block',
              width: '50%',
            }}
          >
            <Select
              style={{ width: 120 }}
              options={[
                { value: '低', label: '低' },
                { value: '中', label: '中' },
                { value: '高', label: '高' },
              ]}
            />
          </Form.Item>
          <Form.Item
            name="style"
            label="风格"
            initialValue={'轻松休闲'}
            style={{
              display: 'inline-block',
              width: '50%',
            }}
          >
            <Select
              style={{ width: 120 }}
              options={[
                { value: '轻松休闲', label: '轻松休闲' },
                { value: '正式专业', label: '正式专业' },
                { value: '搞笑幽默', label: '搞笑幽默' },
                { value: '抒情细腻', label: '抒情细腻' },
                { value: '诙谐讽刺', label: '诙谐讽刺' },
                { value: '童趣可爱', label: '童趣可爱' },
                { value: '热情活泼', label: '热情活泼' },
                { value: '戏剧夸张', label: '戏剧夸张' },
              ]}
            />
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <Form.Item
            name="language"
            initialValue={'简体中文'}
            label="语言"
            style={{ display: 'inline-block', width: '50%' }}
          >
            <Select
              style={{ width: 120 }}
              options={[
                { value: '简体中文', label: '简体中文' },
                { value: '英语', label: '英语' },
                { value: '韩语', label: '韩语' },
                { value: '德语', label: '德语' },
                { value: '法语', label: '法语' },
              ]}
            />
          </Form.Item>
          <Form.Item
            name="MaximumLength"
            initialValue={100}
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
const Content = (props: { content: string }) => {
  return (
    <div className={styles.resultContent}>
      <div className={styles.title}>生成内容</div>
      <div className={styles.content} dangerouslySetInnerHTML={
        {
          __html: String(props.content).replace(/\n/g, '<br/>')
        }
      }></div>
      <CopyToClipboard
        className="copy-text"
        onCopy={(_: any, result: Boolean) => {
          result
            ? message.success('复制成功')
            : message.error('复制失败请手动复制');
        }}
        text={props.content}
      >
        <Button>复制文案</Button>
      </CopyToClipboard>
    </div>
  );
};
const Copywriting = () => {
  const [content, setContent] = useState('');
  return (
    <Layout>
      <div className={styles.copyWriting}>
        <div className={styles.formContent}>
          <FormContent
            callback={(content: string) => {
              setContent(content);
            }}
          ></FormContent>
        </div>
        <Content content={content}></Content>
      </div>
    </Layout>
  );
};
export default Copywriting;
