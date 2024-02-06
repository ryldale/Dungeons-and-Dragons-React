import { Route, Routes } from "react-router-dom";
import ItemListPage from "./modules/itemlist/pages/item-list_page";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./modules/navbar/components/navbar_section";
import { useEffect, useReducer } from "react";
import ItemReducer from "./modules/itemlist/reducer/reducer";
import { ItemInit } from "./modules/itemlist/reducer/reducerInit";
import axios from "axios";

export const url =
  "https://www.dnd5eapi.co/api/equipment-categories/adventuring-gear";

function App() {
  // useReducer Parent - The state and dispatch must be pass along the children
  const [state, dispatch] = useReducer(ItemReducer, ItemInit);
  const fetchData = async () => {
    axios.get(url)
    .then((response) => {
      const equipmentData = response.data.equipment;
      console.log(equipmentData);
      dispatch({ type: "itemData", data: equipmentData })
    })
    .catch((error) => {
      console.log(error.response);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* <FirstRequest /> */}
      <Navbar state={state} dispatch={dispatch} />
      <Routes>
        <Route
          path="/"
          element={<ItemListPage state={state} dispatch={dispatch} />}
          exact
        />
      </Routes>
    </div>
  );
}

export default App;
