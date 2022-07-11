import Header from './components/header/header.component';
import Nav from './components/nav/nav.component';
import About from './components/about/about.component';
import Experience from './components/experience/experience.component';
import Services from './components/services/services.component';
import Portfolio from './components/portfolio/portfolio.component';
import Testimonials from './components/testimonials/testimonials.component';
import Contact from './components/contact/contact.component';
import Footer from './components/footer/footer.component';

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services />
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
