import logo from './logo.svg';
import './App.css';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import Navigation from './components/Navigation';
import { useState } from 'react';
import { findAllByAltText } from '@testing-library/react';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  console.log("hello world")
  var [isResumeHidden, setIsResumeHidden] = useState(true);
  var [isAboutHidden, setIsAboutHidden] = useState(false);
  var [isPortfolioHidden, setIsPortfolioHidden] = useState(true);
  var [isContactHidden, setIsContactHidden] = useState(true);

const hideAllPanels = () => {
 setIsResumeHidden(true);
 setIsAboutHidden(true);
 setIsPortfolioHidden(true);
 setIsContactHidden (true);


}


  return (
    <div className="App">
      <div className='banner'>
      <Header></Header>

      <Navigation
        onClickAbout={() => { console.log('clicked about'); hideAllPanels(); setIsAboutHidden(false); }} 
        onClickResume={() => { console.log('clicked resume'); hideAllPanels(); setIsResumeHidden(false);}}
        onClickPortfolio={() => { console.log('clicked portfolio'); hideAllPanels(); setIsPortfolioHidden(false);}}
        onClickContact={() => { console.log('clicked contact'); hideAllPanels(); setIsContactHidden(false);}}
        ></Navigation>
      </div>
      <Resume isHidden={isResumeHidden}></Resume>
      <About isHidden={isAboutHidden} ></About>
      <Portfolio isHidden={isPortfolioHidden}></Portfolio>
      <Contact isHidden={isContactHidden}></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
