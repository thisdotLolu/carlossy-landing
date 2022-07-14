import React from 'react'
import './Footer.css'
import {FaTelegram,FaFacebook,FaTwitter,FaYoutube} from 'react-icons/fa'
// import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-inner">
        <h1 className="grobold" style={{ color: "#582900" }}>
          Don't miss out on this amazing opportunity
        </h1>
        <p>
          Be one of the first to explore this unique coin ecosystem where you
          can invest your interest in the ever-evolving digital world and also
          make a profit!
        </p>
        <button>Enter Presale</button>
        <div className="footer-logos">
          <img src="/images/Coingecko.png" alt="coin gecko" />
          <img src="/images/CoinmarketCap.png" alt="coin market cap" />
          <img src="/images/PancakeSwap.png" alt="pancake swap" />
        </div>
      </div>
      <div className="footer-inner2">
        <div className="footer-inner2_1">
          <img src="/images/Logo.png" alt="logo" />
          <div className="language">
            <p>LANGUAGE</p>
            <img
              src="/images/US.png"
              alt="us"
              style={{ width: "20px", objectFit: "cover", height: "20px" }}
            />
            <select
              style={{
                backgroundColor: "#361900",
                color: "white",
                border: "none",
              }}
              name=""
              id=""
            >
              <option value="ENG">ENG</option>
            </select>
          </div>
          <div className="links">
            <p>LINKS</p>
            <p style={{ fontWeight: "bolder" }}>
              <a
                href="https://carlossy.io/token-allocation"
                smooth
                to="#token"
                style={{ color: "white", textDecoration: "none" }}
                // to="/token-allocation"
              >
                Tokenomics
              </a>
            </p>
            <p style={{ fontWeight: "bolder" }}>
              <a
                href="https://carlossy.io/roadmap"
                style={{ color: "white", textDecoration: "none" }}
                // to="/roadmap"
              >
                Roadmap
              </a>
            </p>
          </div>
          <div className="links2">
            <p style={{ fontWeight: "bolder" }}>
              <a
                href="https://carlossy.io"
                style={{ color: "white", textDecoration: "none" }}
                to="/"
              >
                Whitepaper
              </a>
            </p>
            <p style={{ fontWeight: "bolder" }}>
              <a
                href="https://carlossy.io/faq"
                style={{ color: "white", textDecoration: "none" }}
                // to="/faq"
              >
                FAQ
              </a>
            </p>
            <p style={{ fontWeight: "bolder", cursor: "pointer" }}>
              Enter Presale
            </p>
          </div>
          <div className="subscribe">
            <p>Subscribe to our email</p>
            <div>
              <input type="text" />
              <button>Enter Presale</button>
            </div>
          </div>
        </div>
        <hr style={{ marginLeft: "70px", marginRight: "70px" }} />
        <div className="footer-inner2_2">
          <p>&copy; 2022 Carlossy Caterpillar. All rights reserved</p>
          <div className="connect_socials">
            <p>Connect With Us</p>
            <div>
              <a
                style={{ color: "white" }}
                href="https://t.me/CarlossyCaterpillarOfficial"
              >
                <FaTelegram className="main_socials" />
              </a>
              <FaFacebook className="main_socials" />
              <a
                style={{ color: "white" }}
                href="https://twitter.com/CarlossyToken"
              >
                <FaTwitter className="main_socials" />
              </a>
              <FaYoutube className="main_socials" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer