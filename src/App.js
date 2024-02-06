import { Route, Routes } from "react-router-dom";
import ItemListPage from "./modules/itemlist/pages/item-list_page";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./modules/navbar/components/navbar_section";
import { useReducer } from "react";
import ItemReducer from "./modules/itemlist/reducer/reducer";
import { ItemInit } from "./modules/itemlist/reducer/reducerInit";
import Headers from "./modules/Axios/Headers";
// import itemData from "./data";

function App() {
  // useReducer Parent - The state and dispatch must be pass along the children 
  const [state, dispatch] = useReducer(ItemReducer, ItemInit);


  return (
    <div>
        <Headers />
        <Navbar state={state} dispatch={dispatch}/>
      <Routes>
        <Route path="/" element={<ItemListPage state={state} dispatch={dispatch}/>} exact />
      </Routes>
    </div>
  );
}

export default App;
