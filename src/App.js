import {Route,Routes,BrowserRouter} from "react-router-dom";
import Layout from "./layouts/default"
import IndexPage from "./pages/index"
import Cart from "./pages/cart"
import SuccessPage from "./pages/success";
import CancelPage from "./pages/cancel";
import Login from "./pages/login";
import Register from "./pages/register";
import Profile from "./pages/profile";
import Order from "./pages/order";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const authToken = localStorage.getItem("auth_token");
    if (authToken) {
      fetchUser();
    }
  }, []);

  async function fetchUser() {
    try {
      const { data, status } = await axios("auth/user");
      if (status === 200) {
        dispatch({
          type: "SET_USER",
          payload: data.user,
        });
      }
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<IndexPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/cancel" element={<CancelPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/order" element={<Order />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
