import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
// import { Goerli } from "@thirdweb-dev/chains";
import { AuthProvider } from "./context/AuthProvider";
import { StateContextProvider } from "./context";
import App from "./App";
import "./index.css";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <ThirdwebProvider activeChain={Goerli}>
  <Router>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <StateContextProvider>
          <App />
        </StateContextProvider>
      </AuthProvider>
    </QueryClientProvider>
  </Router>
  // </ThirdwebProvider>
);
