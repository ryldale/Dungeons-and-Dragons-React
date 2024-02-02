const ItemReducer = (state,action) => {
    switch (action.type){
        case 'modalCart':{
            const data = action.data
            return{
                ...state,
                modalCart: data
            }
        }

        case 'test':{
            console.log("It's working!")
            return{
                ...state,
            }
        }
        default:{
            return state;
        }
    }
}

export default ItemReducer