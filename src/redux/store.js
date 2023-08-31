import counterReducer from "./reducer/conterReducer";

import { createStore } from "redux";

const store = createStore(counterReducer);

export default store;