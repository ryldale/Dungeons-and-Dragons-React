// import { Link } from "react-router-dom";
import { useEffect } from "react";
import classes from "../styles/navbar.module.css";

const Navbar = ({ state, dispatch }) => {
  const overlay = () => {
    dispatch({ type: "modalCart", data: true });
  };

    useEffect(()=>{
      console.log('State of Modal: ', state.modalCart)
    }, [state.modalCart])

  return (
    <header className={classes.header}>
      <div className={classes.total_items}>
        Total items: <span>2</span>
      </div>
      <nav>
        <ul>
          <li>
            <button onClick={() => overlay()}>Go to Cart</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
