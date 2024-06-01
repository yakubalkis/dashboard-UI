import { RouterProvider } from "react-router-dom";
import { ReduxStoreProvider } from "./redux/store/redux-store-provider";
import { router } from "./routes";
import { SharedModals } from "./components/modals/shared-modals";

function App() {
  return (
    <ReduxStoreProvider>
      <RouterProvider router={router} />
      <SharedModals />
    </ReduxStoreProvider>
  );
}

export default App;
