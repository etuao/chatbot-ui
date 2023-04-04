import React, { useState } from 'react';
import { Button, message } from 'antd';
import Layout from '@/modules/layout';
import styles from './index.module.scss';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useRouter } from 'next/router';
import FormContent from './form/writing';
import FormEmployment from './form/employment';
// writing
type PropsForm = {
  callback: Function;
};
const FormBox = (props: PropsForm) => {
  const router = useRouter();
  const type = router.query.type;
  switch (type) {
    case 'writing':
      return <FormContent {...props}></FormContent>;
    case 'employment':
      return <FormEmployment {...props}></FormEmployment>;
    default:
      return <FormContent {...props}></FormContent>;
  }
};
const Content = (props: { content: string }) => {
  return (
    <div className={styles.resultContent}>
      <div className={styles.title}>生成内容</div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: String(props.content).replace(/\n/g, '<br/>'),
        }}
      ></div>
      <CopyToClipboard
        // className="copy-text"
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
          <FormBox
            callback={(content: string) => {
              setContent(content);
            }}
          />
        </div>
        <Content content={content}></Content>
      </div>
    </Layout>
  );
};
export default Copywriting;
