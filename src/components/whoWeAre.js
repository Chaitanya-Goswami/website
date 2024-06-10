import React from 'react';
import './WhoWeAre.css';

const WhoWeAre = () => {
  return (
    <section className="who-we-are-section text-white text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1 className="mb-5">Who We Are</h1>
            <p className="lead mb-5">
              CricSolutions is a premier officiating organization based in Bangalore, India. Our team of dedicated professionals is committed to providing top-tier officiating services for cricket matches. We staunchly uphold the values of fair play and competition, ensuring every game we oversee is conducted in a professional and unbiased manner.
            </p>
            <hr className="my-5" />
            <h2 className="mb-5">Ensuring Fair Play</h2>
            <p className="lead mb-5">
              As a leading organization in the field, CricSolutions provides comprehensive education, training, assessment, and scheduling of officiating for cricket matches. We are driven by our passion for promoting fair play, fostering healthy competition, and enhancing the enjoyment of athletics for players, fans, and participants alike. Our unwavering commitment to excellence ensures we deliver the best officiating services for every cricket match.
            </p>
            <a href="/about-us" className="btn btn-light btn-xl">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;