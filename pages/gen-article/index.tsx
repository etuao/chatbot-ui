import { useRouter } from 'next/router';
import Layout from '@/modules/layout';

const GenArticle = () => {
  const router = useRouter();

  return (
    <Layout>
      <div>gen-article 表单处理</div>
    </Layout>
  );
};

export default GenArticle;
