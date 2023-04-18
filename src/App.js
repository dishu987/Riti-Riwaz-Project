import "./App.css";
import Home from "./pages/home";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./pages/signup";
import SignIn from "./pages/login";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
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
