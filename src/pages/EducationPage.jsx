import { Helmet } from 'react-helmet-async';
import Education from '../components/Education';

export default function EducationPage() {
  return (
    <>
      <Helmet>
        <title>Education | Iqbal Bin Hafiz</title>
      </Helmet>
      <Education />
    </>
  );
}
