import "./App.css"
import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"

function App() {
  return (
    <>
      <Banner />
      <Navbar />
      <ItemListContainer greeting={"Bienvenido a Las Florencio"}/>
    </>
  )
}

export default App