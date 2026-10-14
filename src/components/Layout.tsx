import { Outlet, useLocation, useOutletContext } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect, useState } from 'react';

export default function Layout() {
  const location = useLocation();
  const [hasDarkHero, setHasDarkHero] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar hasDarkHero={hasDarkHero} />
      <main className={`flex-grow ${!hasDarkHero ? 'pt-20' : ''}`}>
        <Outlet context={{ setHasDarkHero }} />
      </main>
      <Footer />
    </div>
  );
}

export function useLayoutConfig() {
  return useOutletContext<{ setHasDarkHero: (value: boolean) => void }>();
}
