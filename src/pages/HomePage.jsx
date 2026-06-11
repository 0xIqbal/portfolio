import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home | Iqbal Bin Hafiz</title>
      </Helmet>
      <Hero />
    </>
  );
}
