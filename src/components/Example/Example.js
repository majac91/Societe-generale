import React from "react";
import { ReactComponent as ArrowIcon } from "../../SVG/05 Ebanking primer/dropdown.svg";
import { ReactComponent as CloseIcon } from "../../SVG/05 Ebanking primer/X.svg";

const Example = () => {
  return (
    <div className="container-xs">
      <div className="example">
        <button className="example__title">
          Reprezntativni primer 1
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
            </table>
            <table className="table table2">
              <caption className="table__caption">
                Troškovi koji prate odobrenje kredita, poznati u trenutku
                oglašavanja
              </caption>
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
              <tfoot className="table__footer">
                <tr className="table__footer-row">
                  <td className="table__footer-data">
                    Efektivna kamatna stopa obrčunata na dan XX.XX.XXXX. Godine
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div className="example__close">
          <button className="example__close-btn">
            Zatvori
            <span className="example__close-icon">
              <CloseIcon></CloseIcon>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Example;
