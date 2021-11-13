import Head from 'next/head';
import Layout from '../components/layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Med Diagnosis</title>
        <meta name="description" content="Med Diagnosis" />
      </Head>
      <Layout pageTitle={'Home'}></Layout>
    </div>
  );
}
