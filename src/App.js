import { Routes, Route, Outlet } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import FarmstandsPage from "./pages/FarmstandsPage";
import FarmstandDetailPage from "./pages/FarmstandDetailPage";
import MapsPage from "./pages/MapsPage";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import ProfilePage from "./pages/ProfilePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import TestPage from "./pages/TestPage";

//remove header and footer from MapsPage - possibly useRoutes hook


  const AppLayout = () => {
    return(
    <>
    <div>
      <Header />
      <Outlet />
      <Footer />
      </div>
    </>
  )};

  const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="map" element={<MapsPage />} />
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="profile" element={<ProfilePage />} />
          {/* <Route path='forgot-password' element={<ForgotPasswordPage />} /> */}
          <Route path="contact" element={<ContactPage />} />
          <Route path="About" element={<AboutPage />} />
          <Route path="farmstands" element={<FarmstandsPage />} />
          <Route
            path="farmstands/:farmstandId"
            element={<FarmstandDetailPage />}
          />
          <Route path="test" element={<TestPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
