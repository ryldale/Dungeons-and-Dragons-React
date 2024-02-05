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
        itemData: [...state.itemData],
      };
    }
    default: {
      return state;
    }
  }
};

export default ItemReducer;

// case "increment": {
//     const { itemId } = action;
//     console.log(itemId);
//     const updatedItems = state.itemData.map((item) => {
//       if (item.id === itemId) {
//         return {
//           ...item,
//           count: item.count + 1,
//         };
//       }
//       return item;
//     });
//     return {
//       ...state,
//       itemData: updatedItems,
//     };
//   }

//   case "decrement": {
//     const { itemId } = action;
//     const updatedItems = state.itemData.map((item) => {
//       if (item.id === itemId) {
//         return {
//           ...item,
//           count: item.count > 0 ? item.count - 1 : 0,
//         };
//       }
//       return item;
//     });
//     return {
//       ...state,
//       itemData: updatedItems,
//     };
//   }

// case "increment": {
//     return {
//       // Current State
//       ...state,
//       count: state.count + 1,
//     };
//   }

//   case "decrement": {
//     return {
//       // Current State
//       ...state,
//       count: state.count - 1,
//     };
//   }
