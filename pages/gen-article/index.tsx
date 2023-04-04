import { useRouter } from 'next/router';
import Layout from '@/modules/layout';
import React, { useState } from 'react';
import { Button, Form, Input, InputNumber, Select } from 'antd';
import { Loading } from '../components/Loading/index';
import styles from './index.module.scss';

const GenArticle = () => {
  return (
    <Layout>
      <div className={styles.genArticle}>
        <div className={styles.formTop}>
          <div className={styles.textArea}>
            <div placeholder="请输入您的需求" contentEditable />
          </div>
          <div className={styles.buttonSubmit} onClick={async () => {}}>
            生成图片
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GenArticle;
