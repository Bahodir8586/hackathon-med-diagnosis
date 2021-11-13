import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import AddReviewForm from '@/components/addReviwForm';

export default function AddReview() {
  const [showForm, setShowForm] = useState(true);
  const submitForm = (rating, review) => {
    console.log(rating, review);
    setShowForm(false);
  };
  return (
    <div>
      <Head>
        <title>Add Review</title>
        <meta name="description" content="Add Review" />
      </Head>
      <Layout pageTitle={'Add Review'}>
        {showForm ? (
          <AddReviewForm submitForm={submitForm} />
        ) : (
          <>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl mb-4 font-semibold">Thank you for your feedback</h2>
              <p className="text-sm mb-2">
                Our moderators will check your review and will be published soon
              </p>
              <Link href="/">
                <a className="text-blue-500 hover:text-blue-700">Go to home page</a>
              </Link>
            </div>
          </>
        )}
      </Layout>
    </div>
  );
}
