import Footer from "./components/Footer";
import Nav from "./components/Nav";
import ContactForm from "./pages/Contact";
import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import NotFound from "./pages/NotFound";
import {Routes,Route, BrowserRouter } from "react-router-dom"
import Contact from "./pages/Contact";
function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Nav />
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="instructors" element={<Instructors/> }/>
      <Route path="contact" element={<Contact/> }/>
      <Route path="NotFound" element={<NotFound/> }/>

      </Routes>
      
      <Instructors />
      <ContactForm />
      <NotFound />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
