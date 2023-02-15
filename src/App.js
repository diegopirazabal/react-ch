import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header/Header"
import Cart from "./components/Cart/Cart"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';




function App() {
  return (
    <div className="App">

      <BrowserRouter>      
      
        <Header />
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>

          <Route path="itemdetail/:id" element={<ItemDetailContainer />}/>

          <Route path="category/:name" element={<ItemListContainer />}/>

          <Route path="cart" element={<Cart />} />


          <Route path="*" element={<h1>404</h1>} />

        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
