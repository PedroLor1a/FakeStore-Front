import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer fixed-footer">
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/loria-pedro-552068255/"
          target="_blank"
          rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
            alt="Linkedin"
          />
        </a>

        <a
          href="https://github.com/PedroLor1a"
          target="_blank"
          rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/128/25/25657.png"
            alt="Github"
          />
        </a>
        <a
          href="https://www.instagram.com/pedro_loria_/"
          target="_blank"
          rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png"
            alt="Instagram"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
