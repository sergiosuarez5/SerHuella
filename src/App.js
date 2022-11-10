import './App.css';
import Header from './components/Header';
// import Body from "./components/Body";
// import Footer from "./components/footer";
import ItemLisContainer from "./components/ItemListContainer/index";
import Navbar from "./components/NavBar";


function App() {
  return (
    <div className="App">
      <main>

        <Navbar/>
        <ItemLisContainer greeting={"¡Proximamente!"} />
        <Header/>
      </main>
    </div>
  );
}

export default App;
