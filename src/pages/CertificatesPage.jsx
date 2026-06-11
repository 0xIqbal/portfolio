import { Helmet } from 'react-helmet-async';
import Certificates from '../components/Certificates';

export default function CertificatesPage() {
  return (
    <>
      <Helmet>
        <title>Certificates | Iqbal Bin Hafiz</title>
      </Helmet>
      <Certificates />
    </>
  );
}
