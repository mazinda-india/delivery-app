import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./redux/AuthReducer";
import InfoReducer from "./redux/InfoReducer";

export default configureStore({
  reducer: {
    auth: AuthReducer,
    info: InfoReducer,
  },
});
