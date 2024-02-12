import Card from "../../itemlist/components/Card";
import { useState } from "react";
import classes from "../styles/navbar.module.css";
// import Modal from "./modal";

const Navbar = ({ cart, state, dispatch, item}) => {
  // console.log(cart);
  // const openModal = (e) => {
  //   dispatch({ type: "modalCart", data: true });
  // };

  // // const overlay = () => {
  // //   dispatch({ type: "modalCart", data: true });
  // // };

  //   useEffect(()=>{
  //     console.log('State of Modal: ', state.modalCart)
  //   }, [state.modalCart])
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    // console.log(modal);
  };

  return (
    <div>
      <header className={classes.header}>
        <div className={classes.total_items}>
          Total items: <span>{cart.length}</span>
        </div>
        <nav>
          <ul>
            <li>
              <button onClick={toggleModal}>Go to Cart</button>
            </li>
          </ul>
        </nav>
      </header>

      <div style={{ display: modal ? "block" : "none" }}>
        <div>
          {state.cart.map((item, index) => (
            // calls index for unique key and item for card compontent
            <div key={index} item={item} state={state} dispatch={dispatch}>
              <h1>{item.name}</h1>
              <p>
                Cost: {item.totalCost}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
