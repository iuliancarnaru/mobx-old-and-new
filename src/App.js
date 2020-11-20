import React from "react";
import Store, { StoreProvider } from "./store/store";
import Home from "./pages/Home";
import "./index.css";

const store = new Store();

function App() {
  return (
    <StoreProvider store={store}>
      <Home />
    </StoreProvider>
  );
}

export default App;
