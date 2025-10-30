import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import ComingSoon from "./pages/ComingSoon.jsx";
import Home from "./pages/Home.jsx";
import AboutGreeting from "./pages/about/AboutGreeting.jsx";

//서비스
import Rooftop from "./pages/services/Rooftop.jsx";

//문의
import Customer from "./pages/customer/Customer.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about">
          <Route index element={<AboutGreeting />} />
          <Route path="about-1" element={<AboutGreeting />} />
          <Route path="mission" element={<ComingSoon />} />
          <Route path="news" element={<ComingSoon />} />
          <Route path="*" element={<ComingSoon />} />
        </Route>
        <Route path="services">
          <Route index element={<Rooftop />} />
          <Route path="rooftop" element={<Rooftop />} />
          <Route path="power-plant" element={<ComingSoon />} />
          <Route path="finance" element={<ComingSoon />} />
          <Route path="gov-support" element={<ComingSoon />} />
          <Route path="re100" element={<ComingSoon />} />
          <Route path="equipment" element={<ComingSoon />} />
          <Route path="monitoring" element={<ComingSoon />} />
          <Route path="*" element={<ComingSoon />} />
        </Route>
        <Route path="cases">
          <Route index element={<ComingSoon />} />
          <Route path="power" element={<ComingSoon />} />
          <Route path="building" element={<ComingSoon />} />
          <Route path="residential" element={<ComingSoon />} />
          <Route path="*" element={<ComingSoon />} />
        </Route>
        <Route path="support">
          <Route index element={<Customer />} />
          <Route path="contact" element={<Customer />} />
          <Route path="faq" element={<ComingSoon />} />
          <Route path="guide" element={<ComingSoon />} />
          <Route path="resources" element={<ComingSoon />} />
          <Route path="*" element={<ComingSoon />} />
        </Route>
        <Route path="legal">
          <Route index element={<ComingSoon />} />
          <Route path="privacy" element={<ComingSoon />} />
          <Route path="*" element={<ComingSoon />} />
        </Route>
        <Route path="promotion">
          <Route index element={<ComingSoon />} />
          <Route path="events" element={<ComingSoon />} />
          <Route path="*" element={<ComingSoon />} />
        </Route>
        <Route path="*" element={<ComingSoon />} />
      </Route>
    </Routes>
  );
}

export default App;
