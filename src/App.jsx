import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./style/reset";
import Landing from "./pages/Landing";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";
import { IdiomaProvider } from "./context/contextIdioma";
import TourNav from "./pages/TourNav";
import Services from "./pages/Services";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route
          path="/tournav/*"
          element={
            <IdiomaProvider>
              <Routes>
                <Route index element={<TourNav />} />
                <Route
                  path="services"
                  element={
                    <ProtectedRoute>
                      <Services />
                    </ProtectedRoute>
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </IdiomaProvider>
          }
        />

        <Route path="/admin" element={<AdminPanel />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
