import { Route, Routes } from "react-router-dom";
import ItemListPage from "./modules/itemlist/pages/item-list_page";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./modules/navbar/components/navbar_section";
import { useReducer } from "react";
import ItemReducer from "./modules/itemlist/reducer/reducer";
import { ItemInit } from "./modules/itemlist/reducer/reducerInit";

function App() {
  const [state, dispatch] = useReducer(ItemReducer, ItemInit);
  return (
    <div>
        <Navbar state={state} dispatch={dispatch}/>
      <Routes>
        <Route path="/" element={<ItemListPage />} exact />
      </Routes>
    </div>
  );
}

export default App;
