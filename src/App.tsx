import { RouterProvider } from "react-router-dom";
import { ReduxStoreProvider } from "./redux/redux-store-provider";
import { router } from "./routes";

function App() {
  return (
    <ReduxStoreProvider>
      <RouterProvider router={router} />
    </ReduxStoreProvider>
  );
}

export default App;
