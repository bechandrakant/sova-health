import React from "react";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YoutubeIcon from "@material-ui/icons/YouTube";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="contact">
        <div id="left">
          <p>
            Just good content. No spam. <br />
            Sign up for our newsletter
          </p>
          <input type="text" placeholder="Your email" />
          <button>Submit</button>
        </div>
        <div id="right">
          <div>
            <PhoneIcon />
            <span>+91-9876543210</span>
          </div>
          <div>
            <EmailIcon />
            <span>support@sova.health</span>
          </div>
        </div>
      </div>
      <div className="social">
        <a href="https://www.facebook.com/SovaNutrition/" target="new">
          <FacebookIcon style={{ fontSize: "48px" }} />
        </a>
        <a href="https://www.instagram.com/sova_health/" target="new">
          <InstagramIcon style={{ fontSize: "48px" }} />
        </a>
        <a href="https://twitter.com/sovahealth" target="new">
          <TwitterIcon style={{ fontSize: "48px" }} />
        </a>
        <a href="https://www.youtube.com/channel/UCQACeaXNRC_H3S9KcxWsg3w" target="new">
          <YoutubeIcon style={{ fontSize: "48px" }} />
        </a>
      </div>
      <div className="company-info">
        WEDNESDAY HEALTH INDIA PVT. LTD. 2020. ALL RIGHTS RESERVED
      </div>
    </footer>
  );
};

export default Footer;
