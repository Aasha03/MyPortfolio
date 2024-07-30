
import NavBar from "./components/NavBar/Nav"
import Intro from "./components/Intro/Page"
import About from "./components/About/About";
import Project from "./components/Projects/Project";
// import About from './components/About';
// import Page from './components/Page';
import Contact from './components/Contact/Contact';
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
       <NavBar />
       <Intro />
       <About />
       <Project />
       <Contact />
       <Footer />
    </div>
  );
}

export default App;
