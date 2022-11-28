import './App.css';
import Accordion from "./components/Accordion";
import Counter from "./components/Counter";
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
    </>
  );
}

export default App;
