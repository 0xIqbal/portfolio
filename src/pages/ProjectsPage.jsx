import { Helmet } from 'react-helmet-async';
import Projects from '../components/Projects';

export default function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>Projects | Iqbal Bin Hafiz</title>
      </Helmet>
      <Projects />
    </>
  );
}
