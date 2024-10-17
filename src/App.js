import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Screens/Home.js/Home";
import Login from "./Screens/Login.js/Login";
import Signup from "./Screens/Signup.js/Signup";
import MyOrder from "./Components/MyOrder";

import { CardProvider } from "./Components/contextReducer";
function App() {
  return (
    <CardProvider>
      <Router className="">
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/createAccount" element={<Signup />} />
            <Route exact path="/myOrder" element={<MyOrder />} />
          </Routes>
        </div>
      </Router>
    </CardProvider>
  );
}

export default App;
