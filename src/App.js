import {Route,Routes,BrowserRouter} from "react-router-dom";
import Layout from "./layouts/default"
import IndexPage from "./pages/index"
import Cart from "./pages/cart"
import SuccessPage from "./pages/success";
import CancelPage from "./pages/cancel";
function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route path="/" element={<IndexPage />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/success" element={<SuccessPage />} />
                  <Route path="/cancel" element={<CancelPage />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
