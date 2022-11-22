import Navbar from "./components/Navbar";
import './App.css'
import Home from "./components/Home";
import Services from "./components/Services";
import Property from "./components/Property";
import Work from "./components/Work";
import Accordion from "./components/Accordion";


function App() {
  return (
    <>
    <Navbar></Navbar>
    <Home></Home>
    <Property></Property>
    <Services></Services>
    <Work></Work>
    <Accordion></Accordion>
    
    </>
  );
}

export default App;
