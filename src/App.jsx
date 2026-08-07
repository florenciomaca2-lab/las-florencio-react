import { Routes, Route } from "react-router-dom";
import "./App.css";

import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";

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

        <Route
          path="/category/:categoria"
          element={<ItemListContainer />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

      </Routes>
    </>
  );
}

export default App;