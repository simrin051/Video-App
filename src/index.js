import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { VideoContextProvider } from "./contexts/videos";
import { UserContextProvider } from "./contexts/user";
import { ToastProvider } from "./contexts/toast";
import { PlaylistModalProvider } from "./contexts/playlistmodal";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserContextProvider>
        <VideoContextProvider>
          <PlaylistModalProvider>
            <ToastProvider>
              <App />
            </ToastProvider >
          </PlaylistModalProvider>
        </VideoContextProvider>
      </UserContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
