import { useRouter } from 'next/router';
import Layout from '@/modules/layout';

const AiChat = () => {
  const router = useRouter();

  return (
    <Layout>
      <div>chat表单处理</div>
    </Layout>
  );
};

export default AiChat;
