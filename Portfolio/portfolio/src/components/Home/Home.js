import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./home.css"
const Home = () => {
  return (
    <div className="carousel">

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
            src='//wwfint.awsassets.panda.org/img/forces_for_nature_podcast_754768.png'
            alt="firstpic"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src='https://updates.panda.org/hubfs/WWF_January2019%20Theme/Images/13_tsp_xmas_dec13_156_sm.jpg'
            alt="secondpic"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src='//wwfint.awsassets.panda.org/img/small_ww222125_686349.jpg'
            alt="thirdpic"
          />
        </div>
      </Carousel>
    </div>
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