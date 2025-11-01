import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout.jsx";
import ComingSoon from "@/pages/ComingSoon.jsx";
import Home from "@/pages/Home.jsx";
import AboutGreeting from "@/pages/about/AboutGreeting.jsx";

//서비스 지붕임대/한전수전
import ServiceRoofLease from "@/pages/ServiceRoofLease/ServiceRoofLease";
import PowerService from "@/pages/PowerService/PowerService";
import Eneris from "@/pages/Eneris/Eneris";

//문의/자주묻는질문/개인정보
import { EnerisCustomerSection } from "@/pages/CustomerSection";

import EnerisFaq from "@/pages/enerisfaq/EnerisFaq.jsx";
import EnerisPrivacy from "@/pages/privacy/EnerisPrivacy.jsx";

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
        <Route path="service">
          <Route index element={<Navigate replace to="service-1" />} />
          <Route path="service-1" element={<ServiceRoofLease />} />
          <Route path="service-2" element={<PowerService />} />
          <Route path="service-3" element={<Eneris />} />
          <Route path="service-4" element={<ComingSoon />} />
          <Route path="service-5" element={<ComingSoon />} />
          <Route path="*" element={<ComingSoon />} />
        </Route>
        <Route
          path="services/:legacy?"
          element={<Navigate replace to="/service/service-1" />}
        />
        <Route path="cases">
          <Route index element={<ComingSoon />} />
          <Route path="power" element={<ComingSoon />} />
          <Route path="building" element={<ComingSoon />} />
          <Route path="residential" element={<ComingSoon />} />
        </Route>
        <Route path="support">
          <Route index element={<EnerisCustomerSection />} />
          <Route path="contact" element={<EnerisCustomerSection />} />
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
