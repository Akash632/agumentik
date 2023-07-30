import React from "react";
import "./Banner.css";
import busineesImage from "../../assets/businessImage.png";
import women from "../../assets/women.png";
import women1 from "../../assets/women1.png";
import women3 from "../../assets/women3.png";
import EastIcon from "@mui/icons-material/East";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';


function Banner() {
  return (
    <div className="banner-main-container">
      <div className="banner-bg-container">
        <div className="banner-text-container">
            <div>
            <div className="banner-heading-container">
            <h1>
              Let's grow <br /> Your Business <br /> With Consulting
            </h1>
          </div>
          <div className="banner-paragraph-container">
            <p>
              img elements must have an alt prop, either with meaningful text,
              or an empty string for decorative images
            </p>
          </div>
          <div className="banner-btn-container">
            <div className="banner-btn">
              <p>Free Consulting</p>
              <EastIcon />
            </div>
            <div className="banner-video-btn">
                <PlayCircleOutlineIcon style={{fontSize:"50px",color:"#DE2D37"}}/>
                <p>Play Video</p>
            </div>
          </div>
            </div>
        </div>
        <div className="banner-image-container">
          <img src={women3} />
        </div>
      </div>
    </div>
  );
}

export default Banner;
