import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { VideoContextProvider } from "./contexts/videos";
import { UserContextProvider } from "./contexts/user";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserContextProvider>
        <VideoContextProvider>
          <App />
        </VideoContextProvider>
      </UserContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
