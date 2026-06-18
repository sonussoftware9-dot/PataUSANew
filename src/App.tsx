import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Programs from './pages/Programs';
import Foundation from './pages/Foundation';
import Membership from './pages/Membership';
import Contact from './pages/Contact';

type Page = 'home' | 'about' | 'events' | 'programs' | 'foundation' | 'membership' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about': return <About onNavigate={navigate} />;
      case 'events': return <Events onNavigate={navigate} />;
      case 'programs': return <Programs onNavigate={navigate} />;
      case 'foundation': return <Foundation onNavigate={navigate} />;
      case 'membership': return <Membership onNavigate={navigate} />;
      case 'contact': return <Contact onNavigate={navigate} />;
      default: return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPage={currentPage} onNavigate={navigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
