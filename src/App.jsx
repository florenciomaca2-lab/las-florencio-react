import { Routes, Route } from "react-router-dom";
import "./App.css";

import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <>
      <Banner />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ItemListContainer greeting="Bienvenido" />
            </>
          }
        />

        <Route
          path="/item/:id"
          element={<ItemDetailContainer />}
        />
      </Routes>
      </>
      );
}

      export default App;