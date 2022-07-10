import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducers";
import iceCreamReducer from "./iceCream/iceCreamReducers";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream : iceCreamReducer
})

export default rootReducer;