import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="flogo"></div>
            <div className="flinks">
                <a href="/" style={{width: "51px"}}>Home</a>
                <a href="/about" style={{width: "52px"}}>About</a>
                <a href="/menu" style={{width: "48px"}}>Menu</a>
                <a href="/venue" style={{width: "54px"}}>Venue</a>
                <a href="/events" style={{width: "58px"}}>Events</a>
                <a href="/contactus" style={{width: "93px"}}>Contact us</a>
            </div>
            <div className="bottom">
                <p>© 2021 | All rights reserved.</p>
                <div className="social">
                    <FaFacebook />
                    <FaTwitter />
                    <FaLinkedin />
                    <FaInstagram />
                </div>
            </div>
        </div>
    );
}

export default Footer;