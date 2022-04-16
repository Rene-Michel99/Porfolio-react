import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { useEffect } from 'react';

function App() {
  const userLang = navigator.language || navigator.userLanguage;
  useEffect(() => {
    document.title = "Portfolio"
  }, [])
  return (
    <>
      <Header lang={userLang}/>
      <Nav />
      <About lang={userLang}/>
      <Experience lang={userLang}/>
      <Services lang={userLang}/>
      <Portfolio lang={userLang}/>
      <Contact lang={userLang}/>
      <Footer lang={userLang}/>
    </>

  );
}

export default App;
