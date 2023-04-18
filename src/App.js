import "./App.css";
import Home from "./pages/home";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./pages/signup";
import SignIn from "./pages/login";
import Navbar from "./components/navbar";
import Background_Video from "./components/background";

function App() {
  return (
    <>
      <Background_Video id={Math.floor(Math.random() * 2 + 1)} />
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/signup" index element={<Signup />} />
        <Route path="/signin" index element={<SignIn />} />
        <Route path="*" index element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
