import { Helmet } from 'react-helmet-async';
import About from '../components/About';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About | Iqbal Bin Hafiz</title>
      </Helmet>
      <About />
    </>
  );
}
