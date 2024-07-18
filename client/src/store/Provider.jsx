import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { reducers } from "./reducers";
const store = configureStore({
  reducer: reducers,
});
export const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
