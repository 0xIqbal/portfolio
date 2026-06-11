import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ParticleBackground from '../components/ParticleBackground';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function PortfolioLayout() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050816]">
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10 pt-24 sm:pt-28">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
