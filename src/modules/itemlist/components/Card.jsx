import classes from "../styles/Card.module.css";

const Card = () => {
  return (
    <div className={`${classes.card} `}>
      <form>
        <h1>EQUIPMENT NAME</h1>
        <p>
          cost <span>2 GP</span>
        </p>
        <div className={`row`}>
          <div className={`col-8 ${classes.displayFlex} ${classes.centerItems}`}>
            <div><button>-</button></div>
            <div>
              <label for="quantity">Quantity:</label>
              <input type="number" value="0" min="0" max="5"></input>
            </div>
            <div><button>+</button></div>
          </div>
          <div className={`col-4 ${classes.displayFlex} ${classes.flexRight}`}>
            <input type="submit" value="Add to Cart" className={`${classes.addBtn}`} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Card;
