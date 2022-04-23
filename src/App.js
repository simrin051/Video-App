import "./App.css";
import { SignIn } from './authentication/SignIn';
import { SignUp } from './authentication/SignUp';
import { Home } from './pages/home';
import {
  BrowserRouter as Router,
  Switch,
  Route, Routes,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
