import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import ComingSoon from "./pages/ComingSoon.jsx";
import Home from "./pages/Home.jsx";
import AboutGreeting from "./pages/about/AboutGreeting.jsx";

//서비스 지붕임대/한전수전
import Rooftop from "./pages/services/Rooftop.jsx";
import Power from "./pages/power/Power.jsx";

//문의/자주묻는질문/개인정보
import Customer from "./pages/customer/Customer.jsx";
import EnerisFaq from "./pages/enerisfaq/EnerisFaq.jsx";
import EnerisPrivacy from "./pages/privacy/EnerisPrivacy.jsx";

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
          <Route path="services-1" element={<Rooftop />} />
          <Route path="services-2" element={<Power />} />
          <Route path="services-3" element={<ComingSoon />} />
          <Route path="services-4" element={<ComingSoon />} />
          <Route path="services-5" element={<ComingSoon />} />
        </Route>
        <Route path="cases">
          <Route index element={<ComingSoon />} />
          <Route path="power" element={<ComingSoon />} />
          <Route path="building" element={<ComingSoon />} />
          <Route path="residential" element={<ComingSoon />} />
        </Route>
        <Route path="support">
          <Route index element={<Customer />} />
          <Route path="contact" element={<Customer />} />
          <Route path="faq" element={<EnerisFaq />} />
        </Route>
        <Route path="legal">
          <Route index element={<ComingSoon />} />
          <Route path="privacy" element={<EnerisPrivacy />} />
        </Route>
        <Route path="*" element={<ComingSoon />} />
      </Route>
    </Routes>
  );
}

export default App;
