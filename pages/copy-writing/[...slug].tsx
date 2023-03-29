import { useRouter } from 'next/router';
// import dynamic from 'next/dynamic'

// const DynamicHeader = dynamic(() => import('../components/header'), {
//   ssr: false,
// })

const Comment = () => {
  const router = useRouter();
  const slug = (router.query.slug as string[]) || [];

  return (
    <>
      <h1 style={{ color: '#fff' }}>Slug: {slug.join('/')}</h1>
    </>
  );
};

export default Comment;
