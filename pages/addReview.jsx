import Head from 'next/head';
import Layout from '../components/layout';
import AddReviewForm from '@/components/addReviwForm';

export default function AddReview() {
  const submitForm = (rating, review) => {
    console.log(rating, review);
  };
  return (
    <div>
      <Head>
        <title>Add Review</title>
        <meta name="description" content="Add Review" />
      </Head>
      <Layout pageTitle={'Add Review'}>
        <AddReviewForm submitForm={submitForm} />
      </Layout>
    </div>
  );
}
