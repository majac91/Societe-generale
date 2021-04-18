import React, { useState } from "react";
import Button from "../Button/Button";
import logo from "../../img/Layer 3 copy@2x.png";
import { ReactComponent as DropdownIcon } from "../../SVG/01 Nav/dropdown arrow.svg";
import { ReactComponent as ArrowIcon } from "../../SVG/01 Nav/location.svg";
import { ReactComponent as SearchIcon } from "../../SVG/01 Nav/search.svg";
import { ReactComponent as FacebookIcon } from "../../SVG/01 Nav/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../SVG/01 Nav/instagram.svg";
import { ReactComponent as TwitterIcon } from "../../SVG/01 Nav/twitter.svg";
import { ReactComponent as LikedinIcon } from "../../SVG/01 Nav/linkedin.svg";
import { ReactComponent as LocationIcon } from "../../SVG/01 Nav/location.svg";
import { ReactComponent as CurrencyIcon } from "../../SVG/01 Nav/kurs.svg";
import { ReactComponent as ContactIcon } from "../../SVG/01 Nav/podrska.svg";

const cx = require("classnames");

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function toggleDrowdown() {
    setIsDropdownOpen((prev) => !prev);
  }

  return (
    <>
      <div className="topnav">
        <div className="topnav container-lg">
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
            <p className="topnav__item">Korisnički centar 011 30 11 555</p>
          </div>
        </div>
      </div>

      <nav className="nav container-lg">
        <a className="nav__logo" href="">
          <img src={logo} className="nav__logo-img" alt="" />
        </a>
        <ul className="nav__links container-xs">
          {/* DROPDOWN */}
          <li className="nav__item">
            <button className="nav__link" onClick={toggleDrowdown}>
              Stanovništvo
              <span className="nav__link-drowpodn-icon">
                <DropdownIcon />
              </span>
            </button>

            <ul
              class={`dropdown ${cx({
                ["dropdown--open"]: isDropdownOpen,
              })}`}
            >
              <h2 className="dropdown__heading">Krediti</h2>

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
        </ul>
        <div className="nav__btns">
          <div className="nav__btns-btn">
            <Button
              className="btn__rounded--red"
              txt="Online banking"
              Icon={ArrowIcon}
            ></Button>
          </div>
          <SearchIcon />
        </div>
      </nav>
    </>
  );
};

export default Nav;
