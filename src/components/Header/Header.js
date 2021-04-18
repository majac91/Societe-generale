import React from "react";
import TextBlock from "../TextBlock/TextBlock";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = () => {
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
    <header className="header">
      <Slider {...settings}>
        <div className="header__slide header__slide--slide1">
          <div className="header__slide__text container-md">
            <TextBlock
              heading="Stanovništvo"
              p="Ostvarite male i velike planove vodeći računa da uštedite svoje vreme i novac. Planirajte budućnost za sebe i svoje najmilije, a mi smo tu da vam damo savete i ponudimo rešenja.Čekamo vas u vašem komšiluku ili u našoj online ekspozituri. "
              linkTxt="Zakažite sastanak"
              isHeroTxt={true}
            ></TextBlock>
          </div>
        </div>
        <div className="header__slide header__slide--slide2">
          <div className="header__slide__text container-md">
            <TextBlock
              heading="mKeš"
              p="Ostvarite male i velike planove vodeći računa da uštedite svoje vreme i novac. Planirajte budućnost za sebe i svoje najmilije, a mi smo tu da vam damo savete i ponudimo rešenja.Čekamo vas u vašem komšiluku ili u našoj online ekspozituri. "
              linkTxt="Saznaj više"
              isHeroTxt={true}
            ></TextBlock>
          </div>
        </div>
        <div className="header__slide header__slide--slide3">
          <div className="header__slide__text container-md">
            <TextBlock
              heading="Obaveštenje za uvodjenje olakšica"
              p="Ostvarite male i velike planove vodeći računa da uštedite svoje vreme i novac. Planirajte budućnost za sebe i svoje najmilije, a mi smo tu da vam damo savete i ponudimo rešenja.Čekamo vas u vašem komšiluku ili u našoj online ekspozituri. "
              linkTxt="Saznaj više"
              isHeroTxt={true}
            ></TextBlock>
          </div>
        </div>
      </Slider>
    </header>
  );
};

export default Header;
