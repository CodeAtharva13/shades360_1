import { useEffect } from "react";
document.title = 'Shades360';
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HeroSection from "./pages/HeroSection";
import AboutUsContent from "./pages/AboutUsContent"

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/" element={<AboutUsContent />} />

    </Routes>
  );
}
export default App;
