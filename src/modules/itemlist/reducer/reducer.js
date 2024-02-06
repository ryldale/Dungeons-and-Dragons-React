const ItemReducer = (state, action) => {
  switch (action.type) {
    case "modalCart": {
      const data = action.data;
      return {
        // Current State
        ...state,
        modalCart: data,
      };
    }

    case "itemData": {
      return {
        // Current State
        ...state,
        // spread syntax or spread operator in array
        itemData: action.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default ItemReducer;
