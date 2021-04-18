import React from "react";
import { ReactComponent as PlayIcon } from "../../SVG/00 General icons/play.svg";
import video from "../../img/video.jpg";
import laptop from "../../img/Laptop maska.png";
import laptopImg from "../../img/Slika u laptopu.png";
import TextBlock from "../TextBlock/TextBlock";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SectionBanking = () => {
  var settings = {
    lazyLoad: true,
    accessibility: true,
    arrows: true,
    slidesToShow: 1,
    dots: true,
    // autoplay: true,
    swipe: true,
    useCss: true,
    fade: true,
    responsive: [
      {
        breakpoint: 481,
        settings: {
          centerPadding: "0",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          centerPadding: "0",
        },
      },
    ],
  };

  return (
    <>
      <section className="banking e-banking">
        <div className="banking__inner container-md">
          <div className="banking__img">
            <img className="banking__img-img" src={video} />
            <div className="banking__img-icon">
              <PlayIcon></PlayIcon>
            </div>
          </div>
          <div className="banking__txt">
            <TextBlock
              heading="M-banking, da vam banka uvek bude pri ruci"
              p="Uživajte u svom vremenu i sa svojim prijateljima, a bankarske stvari rešavajte kada vama to odgovara. Putem besplatne mobilne aplikacije, proverite stanje i prebacujte sredstva između svojih računa, plaćajte račune bez provizije, novac menjajte po povoljnijem kursu 24/7 i još mnogo toga."
              linkTxt="Saznaj više"
            ></TextBlock>
          </div>
        </div>
      </section>
      <section className="banking">
        <div className="banking__inner container-md">
          <div className="banking__txt">
            <TextBlock
              heading="E-banking, banka na klik!"
              p="Sve one svakodnevne transakcije dostupne su vam na računaru, bez izlaska iz doma i suvišne papirologije. Ne samo da ćete plaćati račune bez provizije i menjati novac po povoljnijem kursu 24/7, već ćemo vam online i jednostavno, odobriti dozvoljeni minus, a i keš kredit."
              linkTxt="Saznaj više"
            ></TextBlock>
          </div>
          <div className="banking__slider">
            <Slider {...settings}>
              <div className="banking__slide">
                <img className="banking__slide-img1" src={laptop} />
                <img className="banking__slide-img2" src={laptopImg} />
              </div>
              <div className="banking__slide">
                <img className="banking__slide-img1" src={laptop} />
                <img className="banking__slide-img2" src={laptopImg} />
              </div>
              <div className="banking__slide">
                <img className="banking__slide-img1" src={laptop} />
                <img className="banking__slide-img2" src={laptopImg} />
              </div>
              <div className="banking__slide">
                <img className="banking__slide-img1" src={laptop} />
                <img className="banking__slide-img2" src={laptopImg} />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionBanking;
