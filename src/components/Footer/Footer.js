import React from "react";
import TextBlock from "../../components/TextBlock/TextBlock";

import { ReactComponent as FacebookIcon } from "../../SVG/01 Nav/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../SVG/01 Nav/instagram.svg";
import { ReactComponent as TwitterIcon } from "../../SVG/01 Nav/twitter.svg";
import { ReactComponent as LikedinIcon } from "../../SVG/01 Nav/linkedin.svg";
import { ReactComponent as ArrowIcon } from "../../SVG/06 Footer/back to top.svg";
import phone from "../../img/telefon.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__section1">
          <div className="section-wrapper">
            <TextBlock
              heading="Karijera u Societe Generale"
              p="Zanima vas rad u našoj banci? Societe Generale je banka koja raste sa svojim zaposlenima. Postanite i vi deo tima kojem milioni ljudi širom sveta decenijama ukazuje svoje poverenje."
              linkTxt="Saznaj više"
            ></TextBlock>
          </div>
        </div>

        <div className="footer__section2">
          <div className="footer__section2-block block1">
            <ul className="block1__col">
              <li className="block1__col-item">
                <a className="block1__col-link">STANOVNIŠTVO</a>
              </li>
              <li className="block1__col-item">
                <a className="block1__col-link">MALI BIZNIS</a>
              </li>
              <li className="block1__col-item">
                <a className="block1__col-link">PRIVREDA</a>
              </li>
              <li className="block1__col-item">
                <a className="block1__col-link">PRIVATNO BANKARSTVO</a>
              </li>
            </ul>
            <ul className="block1__col">
              <li className="block1__col-item">
                <a className="block1__col-link">O NAMA</a>
              </li>
              <li className="block1__col-item">
                <a className="block1__col-link">OBAVEŠTENJA</a>
              </li>
              <li className="block1__col-item">
                <a className="block1__col-link">KONTAKTI</a>
              </li>
              <li className="block1__col-item">
                <a className="block1__block1__col-link">MAGAZIN</a>
              </li>
            </ul>
          </div>

          <div className="footer__section2-block block2">
            <h3 className="block2-heading">BUDIMO U KONTAKTU</h3>
            <ul className="block2__social">
              <li className="block2__social-item">
                <a href="">
                  <InstagramIcon className="block2__social-icon" />
                </a>
              </li>
              <li className="block2__social-item">
                <a href="">
                  <TwitterIcon className="block2__social-icon" />
                </a>
              </li>
              <li className="block2__social-item">
                <a href="">
                  <FacebookIcon className="block2__social-icon" />
                </a>
              </li>
              <li className="block2__social-item">
                <a href="">
                  <LikedinIcon className="block2__social-icon" />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__section2-block block3">
            <a href="" className="block3-store store1"></a>
            <a href="" className="block3-store store2"></a>
            <a href="" className="block3-store store3"></a>
          </div>
        </div>

        <div className="footer__section3">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="footer__section3__button"
          >
            <span className="footer__section3__button-icon">
              <ArrowIcon></ArrowIcon>
            </span>
            <span className="footer__section3__button-text">
              Vrati na vrh stranice
            </span>
          </button>
          <img className="footer__section3-img" src={phone}></img>
        </div>
        <div className="footer__bottom">
          <ul className="footer__bottom-list">
            <li className="footer__bottom-item">
              <a className="footer__bottom-link">PRAVNA REGULATIVA</a>
            </li>
            <li className="footer__bottom-item">
              <a className="footer__bottom-link">UGOVOR O OSNIVANJU</a>
            </li>
            <li className="footer__bottom-item">
              <a className="footer__bottom-link">STATUT BANKE</a>
            </li>
            <li className="footer__bottom-item">
              <a className="footer__bottom-link">DEVIZNI HEDŽING</a>
            </li>
            <li className="footer__bottom-item">
              <a className="footer__bottom-link">TVOJ NOVAC</a>
            </li>
            <li className="footer__bottom-item">
              <a className="footer__bottom-link">
                KODEKS PROFESIONALNOG PONAŠANJA
              </a>
            </li>
            <li className="footer__bottom-item">
              <a className="footer__bottom-link">© SGBS 2017</a>
            </li>
          </ul>
          <div className="footer__bottom-lang">
            <button className="footer__bottom-lang-btn">ENG</button>
            <span>|</span>
            <button className="footer__bottom-lang-btn">SRB</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
