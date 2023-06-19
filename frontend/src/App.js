import "./App.css";
import Header from "./components/Header/Header";
import Home from "./views/Home/Home";
import Products from "./views/Products/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Products />
    </div>
  );
}

export default App;
