import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <img
        className="logo-no-background-1-icon"
        alt=""
        src="/logonobackground-1@2x.png"
      />
      <div className="trends-parent">
        <Button className="trends" variant="outline-primary">
          TRENDS
        </Button>
        <Button className="trends" variant="outline-primary">
          SHOP BY GENDER
        </Button>
        <Button className="trends" variant="outline-primary">
          ACCESSORIES
        </Button>
        <Button className="trends" variant="outline-primary">
          ABOUT US
        </Button>
      </div>
      <img className="hero-section-child" alt="" src="/group-19812.svg" />
      <b className="b">3</b>
      <b className="b1">6</b>
      <b className="b2">0°</b>
      <img className="sg-1-icon" alt="" src="/sg-1@2x.png" />
      <img className="hero-section-item" alt="" src="/line-44.svg" />
      <b className="embrace-every-angle">Embrace Every Angle of Style</b>
    </div>
  );
};

export default HeroSection;
