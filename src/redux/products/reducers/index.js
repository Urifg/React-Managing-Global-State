import { RETRIEVE_PRODUCTS } from "../constants";

const initialState = {
    items: []
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case RETRIEVE_PRODUCTS:
            return {
                ...state,
                items: action.payload
            }
        default: 
            return state;
    }
};

export default reducer;