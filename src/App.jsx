import "./App.css";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <ItemListContainer greeting={"Bienvenido"} />    </>
  )
}

export default App;