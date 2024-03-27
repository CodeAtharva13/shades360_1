import "./AboutUsContent.css";

const AboutUsContent = () => {
  return (
    <div className="about-us-content">
      <img className="sg2-1-icon" alt="" src="/sg2-1@2x.png" />
      <div className="text">{` `}</div>
      <img className="about-us-content-child" alt="" src="/group-19812.svg" />
      <b className="discover-the-shades">Discover the Shades 360 Story</b>
      <div className="born-in-la-container">
        <p className="born-in-la">{`Born in LA, Shades 360 is the fusion of fashion and function. Our mission was to craft sunglasses that elevate your style and protect your eyes. `}</p>
        <p className="from-city-streets-to-sandy-sho">
          <i className="from-city-streets">
            From city streets to sandy shores, we've got you covered.
          </i>
        </p>
      </div>
      <img className="about-us-content-item" alt="" src="/line-45.svg" />
    </div>
  );
};

export default AboutUsContent;
