import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { categoriesReducer } from "./reducers/categoriesReducer";
import { productsReducer } from "./reducers/productsReducer";
import { favoriteReducer } from "./reducers/favoriteReducer";

const rootReducer = combineReducers({
    products: productsReducer,
    categories: categoriesReducer,
    favoriteProducts: favoriteReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
