import { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import Layout from '../components/layout';

import FirstForm from '../components/home/firstForm';
import KnowsForm from '../components/home/knowsForm';
import SortForm from '../components/home/sortForm';
import OurForm from '../components/home/ourForm';
import NextOurForm from '../components/home/nextOurForm';
import ResultsTable from '../components/home/resultsTable';
import Body from '@/components/home/body';

// const doctors = [
//   {
//     name: 'John Smith',
//     hospital: 'Tashkent Hospital 1',
//     rating: '4.0',
//     field: 'Dentist',
//     price: '100 000',
//     location: '4.1 km',
//   },
//   {
//     name: 'Ben York',
//     hospital: 'Tashkent Hospital 3',
//     rating: '5.0',
//     field: 'Dentist',
//     price: '150 000',
//     location: '3.2 km',
//   },
// ];

export default function Home() {
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState(false);
  const [field, setField] = useState(undefined);
  const [bodyParts, setBodyParts] = useState([]);

  const [showFirstForm, setShowFirstForm] = useState(true);
  const [showKnowsForm, setShowKnowsForm] = useState(false);
  const [showOurForm, setShowOurForm] = useState(false);
  const [showNextOur, setShowNextOur] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
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
  const submitKnows = (fieldName) => {
    setField(fieldName);
    setShowKnowsForm(false);
    setShowSortForm(true);
  };
  const submitOur = (bodyParts) => {
    setBodyParts(bodyParts);
    setShowOurForm(false);
    setShowNextOur(true);
  };
  const submitNextOur = (...values) => {
    console.log(values);
    setShowNextOur(false);
    setShowLoader(true);
  };
  const submitSort = async (rating, price, distance) => {
    setError(false);
    console.log(`rating: ${rating}, price: ${price}, distance: ${distance}, field: ${field}`);
    setShowSortForm(false);
    try {
      const results = await axios.get('/url');
      setDoctors(results);
      setShowResults(true);
    } catch (error) {
      console.log(error);
      setError(true);
      setShowResults(true);
    }
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
        {showOurForm && <OurForm submitForm={submitOur} />}
        {showSortForm && <SortForm submitForm={submitSort} />}
        {showNextOur && <NextOurForm submitForm={submitNextOur} />}
        {showLoader && <h3 className="my-16 text-4xl font-bold text-center">Loading</h3>}
        {showResults && (
          <>
            <h2 className="mb-4 text-center text-3xl font-semibold">Your results !!!</h2>
            <ResultsTable doctors={doctors} error={error} />
          </>
        )}
      </Layout>
    </div>
  );
}
