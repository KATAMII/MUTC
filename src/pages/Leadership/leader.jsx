import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Leader = ({
  image,
  fburl,
  twitterurl,
  lnurl,
  igurl,
  fullName,
  Field,
  bio,
}) => {
  return (
    <div className="leader">
      <div className="leader-image">
        <img src={image} alt="leader" />
      </div>
      <div className="leader-info">
        <h3>{fullName}</h3>
        <p className="leader-field">{Field}</p>
        <p className="leader-bio">{bio}</p>
        <div className="leader-social">
          {twitterurl && (
            <Link to={twitterurl}>
              <FaTwitter />
            </Link>
          )}
          {fburl && (
            <Link to={fburl}>
              <FaFacebook />
            </Link>
          )}
          {lnurl && (
            <Link to={lnurl}>
              <FaLinkedin />
            </Link>
          )}
          {igurl && (
            <Link to={igurl}>
              <FaInstagram />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Leader;
