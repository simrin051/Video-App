import "./App.css";
import { SignIn } from './authentication/SignIn';
import { SignUp } from './authentication/SignUp';
import { Home } from './pages/home';
import { VideoItemCard } from './components/VideoItemCard/VideoItemCard';
import Mockman from "mockman-js";

import {
  BrowserRouter as Router,
  Switch,
  Route, Routes,
  Link
} from "react-router-dom";
import { VideoListCard } from "./components/VideoItemCard/VideoListCard";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<VideoItemCard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/videoList" element={<VideoListCard />} />
        <Route path="/mock" element={<Mockman endPointsList={["/api/auth/signup", "/api/videos"]} />} />

      </Routes>
    </div>
  );
}

export default App;
