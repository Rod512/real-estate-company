import Navbar from "./components/Navbar";
import './App.css'
import Home from "./components/Home";
import Services from "./components/Services";
import Property from "./components/Property";
import Work from "./components/Work";


function App() {
  return (
    <>
    <Navbar></Navbar>
    <Home></Home>
    <Property></Property>
    <Services></Services>
    <Work></Work>
    
    </>
  );
}

export default App;
