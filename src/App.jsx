import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Form from "./components/Form";
import Footer from "./components/Footer";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
    <div>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Experience />
      <Form />
      <Footer />
    </div>
    <Toaster/>

    </>
  );
}
