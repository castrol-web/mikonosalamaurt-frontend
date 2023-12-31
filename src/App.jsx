//import page routes in react
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import NotFound from "./pages/notFound/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RegistrationForm from "./components/RegistrationForm";
import BlogDetail from "./components/BlogDetail";

//having the url server in the .env folder to be able to access it from anywhere
export const URL = process.env.REACT_APP_SERVER_URL;

function App() {
  return (  
  <BrowserRouter>
  {/* static component for all the page is the navbar */}
  <Navbar/>
  <Routes>
    <Route    exact path="/" element= {<Home />} />
    <Route    exact path="/about" element= {<About />} />
    <Route    exact path="/gallery" element= {<Gallery />} />
    <Route    exact path="/blogs/:id" element= {<BlogDetail />} />
    <Route    exact path="/blogs" element= {<Blogs />} />
    <Route    exact path="/contact" element= {<Contact />} />
    <Route    exact path="/registration" element={<RegistrationForm />}/>
    <Route    exact path="*" element= {<NotFound />} />
  </Routes>
  {/* another static component for all the pages is the footer */}
  <Footer/>
  </BrowserRouter>
  );
}

export default App;
