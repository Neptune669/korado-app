import { useState } from "react";
import hero from "./assets/pexels-matheus-bertelli-1380681.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const [image, setImage] = useState(hero);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-text">
          <h2 className="hero-title">capturing your priceless moments</h2>
          <p className="hero-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            .
          </p>
          <div className="hero-btn">
            <Link to="/pricing">Book now</Link>
            <div className="arr">→</div>
          </div>
        </div>
        <div className="hero-img">
          <img src={image} alt="hero" />
        </div>
      </section>
    </div>
  );
};

export default Home;
