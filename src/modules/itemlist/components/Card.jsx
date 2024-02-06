import { useState } from "react";
import classes from "../styles/Card.module.css";
import axios from "axios";
import { url } from "../../../App";

const Card = ({ state, dispatch, item}) => {

  const [quantity, setQuantity] = useState(1);

  const increment = (e) => {
    // (event) to stop the default action of an element from happening.
    e.preventDefault();
    setQuantity(quantity + 1)
  };

  const decrement = (e) => {
    // (e) to stop the default action of an element from happening.
    e.preventDefault();
    setQuantity(quantity > 0 ? quantity - 1 : 0)
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios(url);
      console.log(response);
    } catch (error) {
      
    }
  };

  return (
    <div className={`${classes.card} `}>
      <form onSubmit={submitHandler}>
        <h1 id={item.id}>{item.name}</h1>
        <p>
          cost <span>{item.index}</span>GP
        </p>
        <div className={`row`}>
          <div
            className={`col-8 ${classes.displayFlex} ${classes.centerItems}`}
          >
            <div>
              <button onClick={decrement}>-</button>
            </div>
            <div>
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                min="0"
                max="5"
                value={quantity}
                onChange={e => setQuantity(e.target.value)}
              />
            </div>
            <div>
              <button onClick={increment}>+</button>
            </div>
          </div>
          <div className={`col-4 ${classes.displayFlex} ${classes.flexRight}`}>
            <input
              type="submit"
              value="Add to Cart"
              className={`${classes.addBtn}`}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Card;
