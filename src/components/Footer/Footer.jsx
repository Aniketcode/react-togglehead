import React from "react";
import style from "./footer.module.css";
const Footer = () => {
  return (
    <footer className={style.footerContainer}>
       <img src='/images/globe.jpg' alt="Globe" className={style.globeBackground} />

      <div className={style.footerGrid}>
        <div className={style.column}>
          <h3 className={style.heading}>Contact us</h3>
          <p className={style.text}>
            Address: amet, constetetur sadipscing elitr, sed diam
          </p>
          <p className={style.text}>
            Email id: eirmod tempor invidunt ut labore et dolore
          </p>
          <p className={style.text}>Phone no: 123456789</p>
        </div>

        <div className={style.column}>
          <h3 className={style.heading}>Follow us</h3>
          <div className={style.icons}>
            <img
              className={style.icon}
              src="/icons/facebook.png"
              alt="facebook"
            />
            <img
              className={style.icon}
              src="/icons/linkedin.png"
              alt="linkedin"
            />
            <img
              className={style.icon}
              src="/icons/instagram.png"
              alt="instagram"
            />
            <img
              className={style.icon}
              src="/icons/twitter.png"
              alt="twitter"
            />
            <img
              className={style.icon}
              src="/icons/youtube.png"
              alt="youtube"
            />
            <img className={style.icon} src="/icons/github.png" alt="youtube" />
          </div>
        </div>

        <div className={style.column}>
          <h3 className={style.heading}>Head Office</h3>
          <div className={style.headOfficeItem}>
            <img src="/icons/marker.png" alt="marker" />
            <div className={style.iconText}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut
            </div>
          </div>
          <div className={style.headOfficeItem}>
            <img src="/icons/time.png" alt="time" />
            <div className={style.iconText}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            </div>
          </div>
          <div className={style.headOfficeItem}>
            <img src="/icons/time.png" alt="time" />
            <div className={style.iconText}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            </div>
          </div>
          <div className={style.headOfficeItem}>
            <img src="/icons/bus.png" alt="bus" />

            <div className={style.iconText}>
              Lorem ipsum asd asdsaaweq Lorem Ipsum
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
