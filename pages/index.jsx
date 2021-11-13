import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';

import FirstForm from '../components/home/firstForm';
import KnowsForm from '../components/home/knowsForm';
import SortForm from '../components/home/sortForm';
import ResultsTable from '../components/home/resultsTable';

const doctors = [
  {
    name: 'John Smith',
    hospital: 'Tashkent Hospital 1',
    rating: '4.0',
    field: 'Dentist',
    price: '100 000',
    location: '4.1 km',
  },
  {
    name: 'Ben York',
    hospital: 'Tashkent Hospital 3',
    rating: '5.0',
    field: 'Dentist',
    price: '150 000',
    location: '3.2 km',
  },
];

export default function Home() {
  const [showFirstForm, setShowFirstForm] = useState(true);
  const [showKnowsForm, setShowKnowsForm] = useState(false);
  const [showOurForm, setShowOurForm] = useState(false);
  const [showSortForm, setShowSortForm] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const submitFirst = (knows) => {
    setShowFirstForm(false);
    if (knows) {
      setShowKnowsForm(true);
      return;
    } else {
      setShowOurForm(true);
      return;
    }
  };
  const submitKnows = () => {
    setShowKnowsForm(false);
    setShowSortForm(true);
  };
  const submitOur = () => {};
  const submitSort = () => {
    setShowSortForm(false);
    setShowResults(true);
  };
  return (
    <div>
      <Head>
        <title>Med Diagnosis</title>
        <meta name="description" content="Med Diagnosis" />
      </Head>
      <Layout pageTitle={'Home'}>
        {showFirstForm && <FirstForm submitForm={submitFirst} />}
        {showKnowsForm && <KnowsForm submitForm={submitKnows} />}
        {showOurForm && <FirstForm submitForm={submitOur} />}
        {showSortForm && <SortForm submitForm={submitSort} />}
        {showResults && (
          <>
            <h2 className="mb-4 text-center text-3xl font-semibold">Your results !!!</h2>
            <ResultsTable doctors={doctors} />
          </>
        )}
      </Layout>
    </div>
  );
}
