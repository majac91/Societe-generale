import React from "react";
import { ReactComponent as PlayIcon } from "../../SVG/00 General icons/play.svg";
import video1x from "../../img/video1x.jpg";
import video2x from "../../img/video2x.jpg";
import laptop1x from "../../img/laptop1x.jpg";
import laptop2x from "../../img/laptop2x.jpg";
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
    autoplay: true,
    swipe: true,
    useCss: true,
    fade: true,
  };

  return (
    <>
      <section className="banking m-banking desktop">
        <div className="banking__inner container-md">
          <div className="banking__img">
            <img
              className="banking__img-img"
              src={video1x}
              srcSet={`${video1x} 1x, ${video2x} 2x`}
            />
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
      <section className="banking m-banking mobile">
        <div className="banking__inner container-md">
          <div className="banking__txt">
            <TextBlock
              heading="M-banking, da vam banka uvek bude pri ruci"
              p="Uživajte u svom vremenu i sa svojim prijateljima, a bankarske stvari rešavajte kada vama to odgovara. Putem besplatne mobilne aplikacije, proverite stanje i prebacujte sredstva između svojih računa, plaćajte račune bez provizije, novac menjajte po povoljnijem kursu 24/7 i još mnogo toga."
              linkTxt="Saznaj više"
            ></TextBlock>
          </div>
          <div className="banking__img">
            <img
              className="banking__img-img"
              src={video1x}
              srcSet={`${video1x} 1x, ${video2x} 2x`}
            />{" "}
            <div className="banking__img-icon">
              <PlayIcon></PlayIcon>
            </div>
          </div>
        </div>
      </section>
      <section className="banking e-banking">
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
                <img
                  className="banking__slide-img1"
                  src={laptop1x}
                  srcSet={`${laptop1x} 1x, ${laptop2x} 2x`}
                />
              </div>
              <div className="banking__slide">
                <img
                  className="banking__slide-img1"
                  src={laptop1x}
                  srcSet={`${laptop1x} 1x, ${laptop2x} 2x`}
                />
              </div>
              <div className="banking__slide">
                <img
                  className="banking__slide-img1"
                  src={laptop1x}
                  srcSet={`${laptop1x} 1x, ${laptop2x} 2x`}
                />
              </div>
              <div className="banking__slide">
                <img
                  className="banking__slide-img1"
                  src={laptop1x}
                  srcSet={`${laptop1x} 1x, ${laptop2x} 2x`}
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionBanking;
