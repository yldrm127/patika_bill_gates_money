import "./App.css";
import Header from "./components/header";
import Productlist from "./components/productlist";
import Basket from "./components/basket";
function App() {
  return (
    <div className="App">
      <Header />
      <Productlist />
      <Basket />
    </div>
  );
}

export default App;
