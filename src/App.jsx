// import { lazy, Suspense } from "react";
import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import ContactPage from "./pages/Contact/Contact";
import HomePage from "./pages/Home/Home";
//react router
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HelpContact from "./components/HelpContact/HelpContact";
import Favorites from "./pages/Favorites/Favorites";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Gallery from "./components/Gallery/Gallery";
import PropertyDetails from "./pages/PropertyDetails/PropertyDetails";
import PropertiesPage from "./pages/Properties/Properties";

// const PropertiesPage = lazy(() => import("./pages/Properties/Properties"));

// <Suspense fallback={<h2 className="heading-2 loading">Loading...</h2>}>
//   <PropertiesPage />
// </Suspense>;

const AppLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Sidebar />
      <Outlet />
      <Gallery />
      <HelpContact />
      <Footer />
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/properties" element={<PropertiesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/property/:proId" element={<PropertyDetails />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
