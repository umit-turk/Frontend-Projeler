import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./home.css";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
    <div className="home">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <img
            loading="lazy"
            src="//wwfint.awsassets.panda.org/img/forces_for_nature_podcast_754768.png"
            alt="firstpic"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://updates.panda.org/hubfs/WWF_January2019%20Theme/Images/13_tsp_xmas_dec13_156_sm.jpg"
            alt="secondpic"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="//wwfint.awsassets.panda.org/img/small_ww222125_686349.jpg"
            alt="thirdpic"
          />
        </div>
      </Carousel>
      <h2>TOP NEWS</h2>
      <div className="grid-container">
        <p>
          <Link to="/blog1">
            <div className="card">
              <img src="https://updates.panda.org/hubfs/Ananda%20Kumar,%20Nature%20Conservation%20Foundation.jpg" />
              <div className="container">
                <h4>
                  Human-wildlife conflict, one of the greatest threats to
                  wildlife species
                </h4>
              </div>
            </div>
          </Link>
        </p>
        <p>
          <Link to="/blog2">
            <div className="card">
              <img src="https://updates.panda.org/hs-fs/hubfs/Esmeralda%202-2.jpg?width=2880&name=Esmeralda%202-2.jpg"/>
              <div className="container">
                <h4>
                  WWF launches new Forces of Nature podcast to mark 60 years of
                  conservation impact
                </h4>
              </div>
            </div>
          </Link>
        </p>
        <p>
          <Link to="/blog3">
            <div className="card">
              <img src="https://updates.panda.org/hubfs/Screenshot%202021-05-24%20at%2013.19.51.png"/>
              <div className="container">
                <h4>
                  FROM FOREST TO MARKET HOW PANDEMICS ARE FUELED BY NATURE LOSS
                </h4>
              </div>
            </div>
          </Link>
        </p>
      </div>
    </div>
    </>
  );
};

export default Home;

/* <div style="width: 100%;height: 600px;background-size: cover;background-position: center center;position: relative; background-image:url('//wwfint.awsassets.panda.org/img/forces_for_nature_podcast_754768.png')"></div> */
/* <div class="banner-top-group" style="background-image: url('https://updates.panda.org/hubfs/WWF_January2019%20Theme/Images/13_tsp_xmas_dec13_156_sm.jpg');min-height:340px;">    

    <div class="banner-content">
      <div class="page-center">
        <div class="banner-inner-center">
          <h1>WWF Updates</h1>       
        </div>  
      </div>
    </div>
    <div class="banner-bottom-content">
      © Louise Jasper
    </div>    
  </div> */
/* <div style="width: 100%;height: 600px;background-size: cover;background-position: center center;position: relative; background-image:url('//wwfint.awsassets.panda.org/img/small_ww222125_686349.jpg')"></div> */
