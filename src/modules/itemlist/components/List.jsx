import Card from "./Card";

const List = ({ state, dispatch }) => {
  return (
    <>
      {state.itemData.map((item, index) => (
        // calls index for unique key and item for card compontent
        <Card key={index} item={item} state={state} dispatch={dispatch} />
      ))}
    </>
  );
};

export default List;
