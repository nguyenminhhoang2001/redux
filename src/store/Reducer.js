import { combineReducers } from "redux";
import reducers from "../featre/productSlice";
import cartReducer from "../featre/cartSilce";
import in4 from "../featre/in4Slice";

const rootReducer = combineReducers({
  add: reducers,
  cart: cartReducer,
  in4: in4,
});
export default rootReducer;
