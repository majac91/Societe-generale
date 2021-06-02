import React, { useState } from "react";
import { ReactComponent as ArrowIcon } from "../../SVG/05 Ebanking primer/dropdown.svg";
import { ReactComponent as CloseIcon } from "../../SVG/05 Ebanking primer/X.svg";
const cx = require("classnames");
const Example = () => {
  const [isExample1Open, setIsExample1Open] = useState(false);
  const [isExample2Open, setIsExample2Open] = useState(false);

  const example1Class = cx("example", { open: isExample1Open });
  const example2Class = cx("example", { open: isExample2Open });

  const handleExample1 = () => setIsExample1Open((prev) => !prev);
  const handleExample2 = () => setIsExample2Open((prev) => !prev);

  return (
    <div className="example__container container-xs">
      <div className={example1Class}>
        <button onClick={handleExample1} className="example__title">
          Reprezntativni primer 1
          <span className="example__title-icon">
            <ArrowIcon></ArrowIcon>
          </span>
        </button>
        <div className="example__content slideInDown">
          <div className="example__content-heading">
            <h3 className="example__content-heading-title">
              Stambeni kredit iz sredstava banke sa promenljivom kamatnom stopom
            </h3>
          </div>
          <div className="example__content__table">
            <table className="table">
              <tbody>
                <tr className="table__row">
                  <th className="table__row-heading">Iznos kredita</th>
                  <td className="table__row-data">200.000din</td>
                </tr>
                <tr className="table__row">
                  <th className="table__row-heading">Rok otplate</th>
                  <td className="table__row-data">60 meseci</td>
                </tr>
                <tr className="table__row">
                  <th className="table__row-heading">NKS na godišnjem nivou</th>
                  <td className="table__row-data">22,00%</td>
                </tr>
                <tr className="table__row">
                  <th className="table__row-heading">Mesečna rata </th>
                  <td className="table__row-data">5.561 dinara</td>
                </tr>
                <tr className="table__row">
                  <th className="table__row-heading">Administrativni trošak</th>
                  <td className="table__row-data">4.000 dinara</td>
                </tr>
              </tbody>
            </table>
            <table className="table table2">
              <caption className="table__caption">
                Troškovi koji prate odobrenje kredita, poznati u trenutku
                oglašavanja
              </caption>
              <tbody>
                <tr className="table__row">
                  <th className="table__row-heading">Menica</th>
                  <td className="table__row-data">50 dinara</td>
                </tr>
                <tr className="table__row">
                  <th className="table__row-heading">
                    Osnovni izveštaj kreditnog biroa
                  </th>
                  <td className="table__row-data">246 dinara</td>
                </tr>
                <tr className="table__row">
                  <th className="table__row-heading">EKS na godišnjem nivou</th>
                  <td className="table__row-data">26,05%</td>
                </tr>
                <tr className="table__row">
                  <th className="table__row-heading">
                    Ukupan iznos kredira (glavnica, kamata i troškovi)
                  </th>
                  <td className="table__row-data">37.960 dinara</td>
                </tr>
              </tbody>
              <tfoot className="table__footer">
                <tr className="table__footer-row">
                  <td className="table__footer-data">
                    Efektivna kamatna stopa obrčunata na dan XX.XX.XXXX. Godine
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="example__close container-xs">
            <button onClick={handleExample1} className="example__close-btn">
              Zatvori
              <span className="example__close-icon">
                <CloseIcon></CloseIcon>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className={example2Class}>
        <button onClick={handleExample2} className="example__title">
          Reprezntativni primer 2
          <span className="example__title-icon">
            <ArrowIcon></ArrowIcon>
          </span>
        </button>
        <div className="example__content">
          <div className="example__content-heading">
            <h3>
              Stambeni kredit iz sredstava banke sa promenljivom kamatnom stopom
            </h3>
          </div>
          <div className="example__content__table">
            <table className="table">
              <tbody>
                <tr className="table__row">
                  <th className="table__row-heading">Iznos kredita</th>
                  <td className="table__row-data">200.000din</td>
                </tr>
                <tr className="table__row">
                  <th className="table__row-heading">Rok otplate</th>
                  <td className="table__row-data">60 meseci</td>
                </tr>
                <tr className="table__row">
                  <th className="table__row-heading">NKS na godišnjem nivou</th>
                  <td className="table__row-data">22,00%</td>
                </tr>
                <tr className="table__row">
                  <th className="table__row-heading">Mesečna rata </th>
                  <td className="table__row-data">5.561 dinara</td>
                </tr>
                <tr className="table__row">
                  <th className="table__row-heading">Administrativni trošak</th>
                  <td className="table__row-data">4.000 dinara</td>
                </tr>
              </tbody>
            </table>
            <table className="table table2">
              <caption className="table__caption">
                Troškovi koji prate odobrenje kredita, poznati u trenutku
                oglašavanja
              </caption>
              <tbody>
                <tr className="table__row">
                  <th className="table__row-heading">Menica</th>
                  <td className="table__row-data">50 dinara</td>
                </tr>
                <tr className="table__row">
                  <th className="table__row-heading">
                    Osnovni izveštaj kreditnog biroa
                  </th>
                  <td className="table__row-data">246 dinara</td>
                </tr>
                <tr className="table__row">
                  <th className="table__row-heading">EKS na godišnjem nivou</th>
                  <td className="table__row-data">26,05%</td>
                </tr>
                <tr className="table__row">
                  <th className="table__row-heading">
                    Ukupan iznos kredira (glavnica, kamata i troškovi){" "}
                  </th>
                  <td className="table__row-data">37.960 dinara</td>
                </tr>
              </tbody>
              <tfoot className="table__footer">
                <tr className="table__footer-row">
                  <td className="table__footer-data">
                    Efektivna kamatna stopa obrčunata na dan XX.XX.XXXX. Godine
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="example__close container-xs">
            <button onClick={handleExample2} className="example__close-btn">
              Zatvori
              <span className="example__close-icon">
                <CloseIcon></CloseIcon>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example;
