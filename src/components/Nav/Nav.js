import React, { useState } from "react";
import logo from "../../img/Layer 3 copy@2x.png";
import { ReactComponent as OnlineBankingIcon } from "../../SVG/07 Responsive/online banking.svg";
import { ReactComponent as DropdownIcon } from "../../SVG/01 Nav/dropdown arrow.svg";
import { ReactComponent as SearchIcon } from "../../SVG/01 Nav/search.svg";
import { ReactComponent as FacebookIcon } from "../../SVG/01 Nav/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../SVG/01 Nav/instagram.svg";
import { ReactComponent as TwitterIcon } from "../../SVG/01 Nav/twitter.svg";
import { ReactComponent as LikedinIcon } from "../../SVG/01 Nav/linkedin.svg";
import { ReactComponent as LocationIcon } from "../../SVG/01 Nav/location.svg";
import { ReactComponent as CurrencyIcon } from "../../SVG/01 Nav/kurs.svg";
import { ReactComponent as ContactIcon } from "../../SVG/01 Nav/podrska.svg";
import { ReactComponent as Menu } from "../../SVG/07 Responsive/menu.svg";
import { ReactComponent as CloseIcon } from "../../SVG/07 Responsive/close menu.svg";
import { ReactComponent as ArrowIcon } from "../../SVG/07 Responsive/arrow dropdown.svg";

const cx = require("classnames");

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  function toggleDrowdown() {
    setIsDropdownOpen((prev) => !prev);
  }

  function toggleBurger() {
    setIsBurgerOpen((prev) => !prev);
  }

  return (
    <>
      <div className="topnav">
        <div className="topnav__container container-lg ">
          <ul className="topnav__links">
            <li className="topnav__item">Budimo u kontaktu</li>
            <li className="topnav__item">
              <a href="">
                <InstagramIcon className="btn__icon" />
              </a>
            </li>
            <li className="topnav__item">
              <a href="">
                <TwitterIcon className="btn__icon" />
              </a>
            </li>
            <li className="topnav__item">
              <a href="">
                <FacebookIcon className="btn__icon" />
              </a>
            </li>
            <li className="topnav__item">
              <a href="">
                <LikedinIcon className="btn__icon" />
              </a>
            </li>
          </ul>
          <div className="topnav__info container-xs">
            <div className="topnav__item-wrapper">
              <LocationIcon className="btn__icon" />
              <p className="topnav__item">Lokacija</p>
            </div>
            <div className="topnav__item-wrapper">
              <CurrencyIcon className="btn__icon" />
              <p className="topnav__item">Kursna lista</p>
            </div>
          </div>
          <div className="topnav__contact">
            <ContactIcon className="btn__icon" />
            <p className="topnav__item">
              <span className="topnav__contact-text">Korisnički centar</span>{" "}
              011 30 11 555
            </p>
          </div>
          <div className="nav__btns mobile">
            <div className="nav__btns-btn">
              <button className="btn__rounded--red">
                Online banking
                <span className="btn__icon-wrapper">
                  <OnlineBankingIcon className="btn__icon"></OnlineBankingIcon>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <nav
        className={`nav container-lg  ${cx({
          ["nav--open"]: isBurgerOpen,
        })}`}
      >
        <a className="nav__logo" href="">
          <img src={logo} className="nav__logo-img" alt="" />
        </a>
        <button className="btn__search mobile">
          <SearchIcon className="btn__icon"></SearchIcon>
        </button>
        <button onClick={toggleBurger} className="btn__burger">
          <Menu className="btn__icon"></Menu>
        </button>

        <div className="nav__header-mobile">
          <ul className="social__list">
            <li className="social__item">
              <a href="">
                <InstagramIcon className="btn__icon" />
              </a>
            </li>
            <li className="social__item">
              <a href="">
                <TwitterIcon className="btn__icon" />
              </a>
            </li>
            <li className="social__item">
              <a href="">
                <FacebookIcon className="btn__icon" />
              </a>
            </li>
            <li className="social__item">
              <a href="">
                <LikedinIcon className="btn__icon" />
              </a>
            </li>
          </ul>
          <button onClick={toggleBurger} className="nav__header-mobile-btn">
            Close
            <span className="nav__header-mobile-icon">
              <CloseIcon></CloseIcon>
            </span>
          </button>
        </div>

        <ul className="nav__links container-xs">
          <li className="nav__item">
            <button
              className={`nav__link nav__arrow ${cx({
                "nav__arrow--active": isDropdownOpen,
              })}`}
              onClick={toggleDrowdown}
            >
              Stanovništvo
              <span className="nav__link-dropdown-icon desktop">
                <DropdownIcon />
              </span>
              <span className="nav__link-dropdown-icon mobile example__title-icon">
                <ArrowIcon />
              </span>
            </button>
            <span></span>
            <ul
              className={`dropdown ${cx({
                ["dropdown--open"]: isDropdownOpen,
              })}`}
            >
              <li className="dropdown__item">
                <a className="dropdown__link" href="">
                  Krediti
                </a>
              </li>
              <li className="dropdown__item">
                <a className="dropdown__link" href="">
                  Keš krediti
                </a>
              </li>
              <li className="dropdown__item">
                <a className="dropdown__link" href="">
                  Kredti za refinansiranje
                </a>
              </li>
              <li className="dropdown__item">
                <a className="dropdown__link" href="">
                  Stambeni krediti
                </a>
              </li>
              <li className="dropdown__item">
                <a className="dropdown__link" href="">
                  Auto krediti
                </a>
              </li>
              <li className="dropdown__item">
                <a className="dropdown__link" href="">
                  Auto krediti
                </a>
              </li>
              <li className="dropdown__item">
                <a className="dropdown__link" href="">
                  Evergrin krediti za penzionere
                </a>
              </li>
              <li className="dropdown__item">
                <a className="dropdown__link" href="">
                  Fluo krediti za studente
                </a>
              </li>
              <li className="dropdown__item">
                <a className="dropdown__link" href="">
                  Potrosacki krediti
                </a>
              </li>
            </ul>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="">
              Mali biznis
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="">
              Privreda
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="">
              Privatno bankarstvo
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="">
              Magazin
            </a>
          </li>

          <li className="nav__item-info">
            <ul className="info">
              <li className="info-wrapper">
                <p className="info__text">O nama</p>
              </li>
              <li className="info-wrapper">
                <p className="info__text">Kontakt</p>
              </li>
              <li className="info-wrapper">
                <LocationIcon className="btn__icon" />
                <p className="info__text">Lokacija</p>
              </li>
              <li className="info-wrapper">
                <CurrencyIcon className="btn__icon" />
                <p className="info__text">Kursna lista</p>
              </li>
            </ul>
          </li>
          <li className="nav__item nav__item-lang">
            <ul className="lang">
              <li>
                <button className="lang-btn">
                  ENG
                  <span className="lang-divider">|</span>
                </button>
              </li>
              <li>
                <button className="lang-btn">SRB</button>
              </li>
            </ul>
          </li>
        </ul>

        <div className="nav__btns desktop">
          <div className="nav__btns-btn">
            <button className="btn__rounded--red">
              Online banking
              <span className="btn__icon-wrapper">
                <OnlineBankingIcon className="btn__icon" />
              </span>
            </button>
          </div>
          <button className="btn__search">
            <SearchIcon className="btn__icon" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
