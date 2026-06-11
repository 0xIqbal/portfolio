import { Helmet } from 'react-helmet-async';
import Experience from '../components/Experience';

export default function ExperiencePage() {
  return (
    <>
      <Helmet>
        <title>Experience | Iqbal Bin Hafiz</title>
      </Helmet>
      <Experience />
    </>
  );
}
