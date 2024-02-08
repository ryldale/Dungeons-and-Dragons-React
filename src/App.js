import { Route, Routes } from "react-router-dom";
import ItemListPage from "./modules/itemlist/pages/item-list_page";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./modules/navbar/components/navbar_section";
import { useEffect, useReducer } from "react";
import ItemReducer from "./modules/itemlist/reducer/reducer";
import { ItemInit } from "./modules/itemlist/reducer/reducerInit";
// import CustomInstance from "./modules/Instances/CustomInstance";
import authFetch from "./modules/Axios/CustomAxios";

export const url =
  "/api/equipment-categories/adventuring-gear";

function App() {
  // useReducer Parent - The state and dispatch must be pass along the children
  const [state, dispatch] = useReducer(ItemReducer, ItemInit);
  const fetchData = async () => {
    try {
      const response = await authFetch(url);
      const equipmentData = response.data.equipment;
  
      const equipmentWithCost = await Promise.all(
        equipmentData.map(async (equipment) => {
          const itemResponse = await authFetch(equipment.url);
          return {
            ...equipment,
            cost: itemResponse.data.cost,
          };
        })
      );
  
      dispatch({ type: "itemData", data: equipmentWithCost });
    } catch (error) {
      console.error("Error fetching equipment data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
      {/* <CustomInstance /> */}
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
