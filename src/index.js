import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { VideoContextProvider } from "./contexts/videos";
import { UserContextProvider } from "./contexts/user";
import { ToastContainer } from 'react-toastify';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserContextProvider
      >
        <VideoContextProvider>
          <App />
          <ToastContainer />
        </VideoContextProvider>
      </UserContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
