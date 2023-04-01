import Layout from '@/modules/layout';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface HomeProps {
  serverSideApiKeyIsSet: boolean;
}
const Home: React.FC<HomeProps> = ({ serverSideApiKeyIsSet }) => {
  return (
    <Layout>
      <div>伙计们，让我们AI革命吧！</div>
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      serverSideApiKeyIsSet: !!process.env.OPENAI_API_KEY,
      ...(await serverSideTranslations(locale ?? 'en', [
        'common',
        'chat',
        'sidebar',
        'markdown',
        'promptbar',
      ])),
    },
  };
};
