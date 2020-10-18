import React from "react"
import Icon from "../assets/telegram.svg"
import Logo from "../SubComponents/Logo"

function Footer() {
  const date = new Date().getFullYear()

  return (
    <footer>
      <div className="footer">
        <div className="footer__flex">
          <div className="footer__notes">
            <h1 className="footer__notes--text">
              Sign up for Mental health Tips
            </h1>
            <p className="footer__notes--p">
              Get to know more about mental health,and learn different ways to
              improve yourself mentally
            </p>
          </div>
          <div className="footer__email">
            <h2 className="footer__email--mail">Your email</h2>
            <input
              className="footer__email--input"
              placeholder="example@email.com"
            />
            <button className="footer__email--btn">
              Submit{" "}
              <img className="footer__email--icon" src={Icon} alt="icon" />
            </button>
          </div>
        </div>
        <div className="footer__grid">
          <div className="footer__logo">
            <Logo />
            <p className="footer__logo--p">
              Your Favourite online therapist session.Get tips, ask questions
              and live your life at its best!
            </p>
          </div>
          <div className="footer__quick-links">
            <ul>
              <li>Quick Links </li>
              <li>Home</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="footer__services">
            <ul>
              <li>Services</li>
              <li>Talk</li>
              <li>Rooms</li>
            </ul>
          </div>
          <div className="footer__socials">
            <ul>
              <li>Social Media</li>
              <li>Twitter</li>
              <li>Email</li>
            </ul>
          </div>
        </div>
        <p className="footer__copyright">copyright &copy; {date}</p>
      </div>
    </footer>
  )
}

export default Footer
