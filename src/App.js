import './App.css';
import Accordion from "./components/Accordion";
import Agents from './components/Agents';
import Counter from "./components/Counter";
import Footer from './components/Footer';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Property from "./components/Property";
import Services from "./components/Services";
import Work from "./components/Work";



function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Property></Property>
      <Services></Services>
      <Work></Work>
      <Accordion></Accordion>
      <Counter></Counter>
      <Agents></Agents>
      <Footer></Footer>
    </>
  );
}

export default App;
