import Footer from './components/Footer';
import MyNavbar from './components/Nav';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Instructors from './pages/Instructors';
import NotFound from './pages/NotFound';
import {BrowserRouter,Routes,Route } from "react-router-dom"
function App() {
  return (
    <>
      <MyNavbar />
      <Home />
      <Instructors />
      <Contact />
      <NotFound />
      <Footer />
    </>
  );
}

export default App;
