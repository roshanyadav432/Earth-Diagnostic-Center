import location from "../assets/location_icon.png";
import call from "../assets/call_icon.png";
import mail from "../assets/mail_icon.png";
import facebook from "../assets/facebook.png";
import insta from "../assets/instagram.png";
import twit from "../assets/twitter.png";
function Footer() {
  return (
    <div className="Footer">
      <div className="footer">
        <div className="images">
          {/* First images and info */}
          <div className="footer_info">
            <a
              id="footerLink"
              href="https://www.google.com/maps/place/Earth+Diagnostic+Centre/@19.2133567,72.9508435,822m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be7b92e955da501:0xc3a0005093e33e14!8m2!3d19.2133567!4d72.9534184!16s%2Fg%2F11rb4sj1z4?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D"
              target="new"
            >
              <img id="img_icon" src={`${location}`} alt="Location Image" />
            </a>
            <div className="bold">
              Room no 31 \ 3 pokharan road no 1 near yashodhan English school
              shastri nagar thane west 400606
            </div>
          </div>
          {/* second image and info */}
          <div className="footer_info">
            <a href="tel:+919119812125" id="footerLink">
              <img id="img_icon" src={`${call}`} alt="Location Image" />
            </a>

            <div className="bold">9119812125/ 9594990555</div>
          </div>
          {/* Third image and info */}
          <div className="footer_info">
            <a href="mailto:diagnosticearth@gmail.com" id="footerLink">
              <img id="img_icon" src={`${mail}`} alt="Location Image" />
            </a>
            <div className="bold">diagnosticearth@gmail.com</div>
          </div>
        </div>

        <div className="share">
          <h2 className="bold">Connect with us</h2>
          <div className="share_logo">
            <a
              href="https://www.instagram.com/earth_diagnostic/"
              target="new"
              id="footerLink"
            >
              <img src={insta} alt="image" id="img_icon" />
            </a>
            <a
              href="https://www.facebook.com/earth_diagnostic/"
              target="new"
              id="footerLink"
            >
              <img src={facebook} alt="image" id="img_icon" />
            </a>
            <a href="https://x.com/" target="new" id="footerLink">
              <img src={twit} alt="image" id="img_icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        © 2024 &nbsp;
        <span style={{ color: "aqua", backgroundColor: "#28343b" }}>
          Earth Diagnostic Center .
        </span>
        &nbsp;All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
