import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRouter from "./AppRouter";
import Home from "../pages/Home";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import ScrollToTop from "../components/ScrollToTop";
const HomeRouter = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/home"
          element={
            <PublicRouter>
              <Home />
            </PublicRouter>
          }
        />
        <Route
          path="*"
          element={
            <PrivateRouter>
              <AppRouter />
            </PrivateRouter>
          }
        />
      </Routes>
    </Router>
  );
};

export default HomeRouter;
