import "./App.css";
import { SignIn } from './authentication/SignIn';
import { SignUp } from './authentication/SignUp';
import { Home } from './pages/home';
import { VideoItemCard } from './components/VideoItemCard/VideoItemCard';

import Mockman from "mockman-js";

import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import { VideoListCard } from "./components/VideoItemCard/VideoListCard";
import { WishLaterList } from "./pages/watchlaterlist";
import { Toast } from './components/toast/toast';
import { PlayList } from './pages/PlayList/playlist';
import { PlaylistModal } from './components/modal/PlaylistModal';
import { getAllPlayList } from "./services/playlist-service";
import { usePlaylistModal } from "./contexts/playlistmodal";
import { useEffect } from "react";
import { useVideoContext } from './contexts/videos';
import { PlayListVideos } from "./pages/playlistvideos";
import { History } from "./pages/history";
import PrivateRoute from "./authentication/PrivateRoute";


function App() {

  const { displayModal } = usePlaylistModal();
  const {
    videoStateDispatch,
} = useVideoContext();

  useEffect(() => {
    getAllPlayList({videoStateDispatch});
  });

  return (
    <div className="App">
      <Toast />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<VideoItemCard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/videoList" element={<VideoListCard />} />

        {/** Private Routes **/}
      <Route element={<PrivateRoute/>}>
        <Route path="/playlist" element={<PlayList/>} />
        <Route path="/watchlater" element={<WishLaterList/>} />
        <Route path="/playlistvideos" element={<PlayListVideos />} />
        <Route path="/history" element={<History />} />
      </Route>
      </Routes>
      </div>
  );
}

export default App;
