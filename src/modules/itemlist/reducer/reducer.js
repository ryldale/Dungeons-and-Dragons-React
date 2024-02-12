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

    case "addToCart": {
      return {
        // Current State
        ...state,
        cart: [...state.cart, action.data],
      };
    }

    default: {
      return state;
    }
  }
};

export default ItemReducer;
