import { Helmet } from 'react-helmet-async';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact | Iqbal Bin Hafiz</title>
      </Helmet>
      <Contact />
    </>
  );
}
