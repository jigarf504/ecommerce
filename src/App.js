import {Route,Routes,BrowserRouter} from "react-router-dom";
import Layout from "./layouts/default"
import IndexPage from "./pages/index"
function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route path="/" element={<IndexPage />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
