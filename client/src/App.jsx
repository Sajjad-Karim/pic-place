import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import { Toaster } from "react-hot-toast";
import { ReduxProvider } from "./store/Provider";
function App() {
  return (
    <>
      <ReduxProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <RouterProvider router={routes} />
      </ReduxProvider>
    </>
  );
}

export default App;
