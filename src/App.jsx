import React from "react";
import Header from "./Components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import ItemListContainer from "./Components/ItemListContainer";

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ItemListContainer title='Esto es el componente ItemListContainer'/>
      </div>
    </BrowserRouter>
  )
}

export default App

