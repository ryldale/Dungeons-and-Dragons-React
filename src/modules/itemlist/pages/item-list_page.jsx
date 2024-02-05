// import { useEffect } from "react";
import List from "../components/List";
import classes from "../styles/Item-list_page.module.css"

const ItemListPage = ({ state, dispatch }) => {
  return (
    <section className={classes.container}>
      <h1>Dungeons and Dragons</h1>
      <List state={state} dispatch={dispatch} />
    </section>
  );
};

export default ItemListPage;
