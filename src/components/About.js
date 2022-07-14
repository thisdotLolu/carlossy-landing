import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="about_one">
          <div className="circle circle_one"></div>
          <div className="circle circle_two"></div>
          <div className="circle circle_three"></div>
          <div className="about_image">
            <h2
              style={{ textAlign: "center", marginBottom: "50px" }}
              className="grobold about-us-desktop"
            >
              About Us
            </h2>
            <div
              className="about-image-inner"
            >
              <img src="/images/coinbee.png" alt="brandImage" />

              <p>
                <h2
                  style={{ textAlign: "center", marginBottom: "10px" }}
                  className="grobold about-us-mobile"
                >
                  About Us
                </h2>
                The goal of this coin is to build more interest in the digital
                world, using the interests of the common people and giving them
                a platform to not only focus on their interests but also earn
                from them.
              </p>
            </div>
          </div>
          <div className="circle circle_four"></div>
          <div className="circle circle_five"></div>
          <div className="circle circle_six"></div>
        </div>

        <div className="about_two">
          <div className="circle circle_seven"></div>
          <div className="circle circle_eight"></div>
          <div className="circle circle_nine"></div>
          <div className="circle circle_ten"></div>
          <div className="circle circle_eleven"></div>
          <div className="about2_inner">
            <h3
              className="grobold"
              style={{ textAlign: "center", color: "#582900" }}
            >
              The vision of Carlossy Caterpillar
            </h3>
            <div className="about2_inner_items">
              <div className="about2_inner_items_each">
                <img src="/images/Rectangle 5.png" alt="rectangle" />
                <p style={{ textAlign: "center" }}>
                  Drawing more people into <br />
                  the blockchain market
                </p>
              </div>
              <div className="about2_inner_items_each">
                <img src="/images/Rectangle 5 (1).png" alt="rectangle" />
                <p style={{ textAlign: "center" }}>
                  Making use of <br /> something unseeming
                </p>
              </div>
              <div className="about2_inner_items_each">
                <img src="/images/Rectangle 5 (2).png" alt="rectangle" />
                <p style={{ textAlign: "center" }}>
                  Development of meme coins <br />& their ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about_three">
          <div className="circle circle_twelve"></div>
          <div className="circle circle_thirteen"></div>
          <div className="circle circle_fourteen"></div>
          <div className="circle circle_fifteen"></div>
          <div className="about_three_inner">
            <h2 className="grobold" style={{ color: "#7D7975" }}>
              As seen on
            </h2>
            <div className="companies">
              <div>
                <img src="/images/Dailycoin 1.png" alt="dailycoin" />
                <img src="/images/Coincodex 1.png" alt="Coin codex" />
                <img
                  src="/images/Enonomic Times 1.png"
                  alt="The Economic Times"
                />
                <img src="/images/be-incrypto 1.png" alt="bein crypto" />
                <img src="/images/Newsbtc 1.png" alt="news btc" />
              </div>

              <div>
                <img src="/images/Insider Monkey 1.png" alt="Insider monkey" />
                <img src="/images/techtimes 1.png" alt="tech times" />
                <img src="/images/Frame 57.png" alt="coin telegraph" />
                <img src="/images/Crytpo news 1.png" alt="crypto news" />
                <img
                  src="/images/Ourbitcoin News 1.png"
                  alt="ourbitcoin news"
                />
              </div>

              <div>
                <img
                  src="/images/CoinMarket Blog 1.png"
                  alt="Coin Market Blog"
                />
                <img
                  src="/images/Jesusalem post 1.png"
                  alt="The Jerusalem Post"
                />
                <img src="/images/theguardian 1.png" alt="The guardian" />
                <img
                  src="/images/Internation Business  1.png"
                  alt="International business times"
                />
                <img
                  src="/images/The business standard 1.png"
                  alt="the business standard"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="about_four">
          <div className="about_four_inner">
            {/* <h2 className='grobold' style={{textAlign:'center'}}>Presale Countdown</h2>
            <p>Hurry! Register for presale before time runs out</p>
            <div className='about_four_timer'>
              <div className='grobold' style={{textAlign:'center',fontSize:'30px'}}>120 <br/><p className='grobold'style={{fontSize:'12px'}}>DAYS</p></div>
              <div className='grobold' style={{textAlign:'center',fontSize:'30px'}}>03 <br/><p className='grobold'style={{fontSize:'12px'}}>HOURS</p></div>
              <div className='grobold' style={{textAlign:'center',fontSize:'30px'}}>54 <br/><p className='grobold'style={{fontSize:'12px'}}>MINUTES</p></div>
              <div className='grobold' style={{textAlign:'center',fontSize:'30px'}}>09 <br/><p className='grobold'style={{fontSize:'12px'}}>SECONDS</p></div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default About