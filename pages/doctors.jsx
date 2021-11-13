import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Doctors</title>
        <meta name="description" content="Doctors" />
      </Head>
      <Layout pageTitle={"Doctors"}></Layout>
    </div>
  );
}
