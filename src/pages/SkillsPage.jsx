import { Helmet } from 'react-helmet-async';
import Skills from '../components/Skills';

export default function SkillsPage() {
  return (
    <>
      <Helmet>
        <title>Skills | Iqbal Bin Hafiz</title>
      </Helmet>
      <Skills />
    </>
  );
}
