import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
const store = configureStore({
  reducer: rootReducer,
});
export const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
