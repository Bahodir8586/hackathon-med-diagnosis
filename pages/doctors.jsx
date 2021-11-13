import DoctorFilter from '@/components/doctorFilter';
import DoctorsTable from '@/components/doctorTable';
import Head from 'next/head';
import Layout from '../components/layout';

const doctors = [
  {
    name: 'John Smith',
    hospital: 'Tashkent Hospital 1',
    rating: '4.0',
    field: 'Dentist',
    price: '100 000',
  },
  {
    name: 'Ben Parker',
    hospital: 'Tashkent Hospital 3',
    rating: '5.0',
    field: 'Oculist',
    price: '150 000',
  },
  {
    name: 'Jack Washington',
    hospital: 'Bukhara Hospital 2',
    rating: '3.6',
    field: 'Pulmonologist',
    price: '40 000',
  },
];

export default function Home() {
  const search = (name) => {
    alert('name');
  };
  return (
    <div>
      <Head>
        <title>Doctors</title>
        <meta name="description" content="Doctors" />
      </Head>
      <Layout pageTitle={'Doctors'}>
        <DoctorFilter search={search} />
        <DoctorsTable doctors={doctors} />
      </Layout>
    </div>
  );
}
