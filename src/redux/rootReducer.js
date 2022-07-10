import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducers";
import iceCreamReducer from "./iceCream/iceCreamReducers";
import reducer from "./user/userReducers";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream : iceCreamReducer,
    user: reducer
})

export default rootReducer;