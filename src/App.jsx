import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./style/reset";
import Landing from "./pages/Landing";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";
import { IdiomaProvider } from "./context/contextIdioma";
import TourNav from "./pages/TourNav";
import Services from "./pages/Services";
import ProtectedRoute from "./components/ProtectedRoute";
import NavBarServices from "./sections/NavBarServices";
import NavigationService from "./sections/NavigationService";
import MisionVisionHistoria from "./pages/MisionVisionHistoria";
import CurrentData from "./pages/CurrentData";
import ExclusiveOffer from "./pages/ExclusiveOffer";
import Commitments from "./pages/Commitments";
import GeneralConditions from "./pages/GeneralConditions";
import NoData from "./components/NoData";

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
                  path="services/*"
                  element={
                    <ProtectedRoute>
                      <NavBarServices />
                      <NavigationService />
                      <Routes>
                        <Route index element={<Services />} />
                        <Route
                          path="mission-vision-history"
                          element={<MisionVisionHistoria />}
                        />
                        <Route path="current-data" element={<CurrentData />} />
                        <Route
                          path="exclusive-offer"
                          element={<ExclusiveOffer />}
                        />
                        <Route path="commitments" element={<Commitments />} />
                        <Route
                          path="general-conditions"
                          element={<GeneralConditions />}
                        />
                        {/* hacer un no hay resultados en ves del NotFound */}
                        <Route path="*" element={<NoData />} />
                      </Routes>
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
