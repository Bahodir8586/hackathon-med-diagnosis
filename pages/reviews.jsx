import Head from 'next/head';
import Layout from '../components/layout';
import ReviewsHolder from '../components/reviewsHolder.jsx';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Reviews</title>
        <meta name="description" content="Reviews" />
      </Head>
      <Layout pageTitle={'Reviews'}>
        <ReviewsHolder />
      </Layout>
    </div>
  );
}
