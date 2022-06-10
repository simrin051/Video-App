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
import { WishLaterList } from "./pages/watchlaterlist";
import { Toast } from './components/toast/toast';
import { PlayList } from './pages/PlayList/playlist';
import { PlaylistModal } from './components/modal/PlaylistModal';
import { usePlaylistModal } from "./contexts/playlistmodal";

function App() {

  const { displayModal } = usePlaylistModal();

  return (
    <div className="App">
      <Toast />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<VideoItemCard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/videoList" element={<VideoListCard />} />
        <Route path="/playlist" element={<PlayList />} />
        <Route path="/mock" element={<Mockman endPointsList={["/api/auth/signup", "/api/videos", "/api/user/playlist"]} />} />
        <Route path="/watchlater" element={<WishLaterList />} />

      </Routes>



    </div>
  );
}

export default App;
