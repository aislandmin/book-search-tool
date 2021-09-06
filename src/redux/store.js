import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./book-slice";

export default configureStore({
  reducer: { bookList: listReducer },
});
