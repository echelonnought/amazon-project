import React from "react";
import "./Footer.css";
// import { useWindowScroll } from "react-use";

function Footer() {

  const handleScrollToTop = () => {
      window[`scrollTo`]({ top: 0, behavior: `smooth`})
  }
  return (
    <div className="main_footer">
      <button className="footer_button scroll_to_top" onClick={handleScrollToTop}>Retour en haut</button>
      <div className="container">
        <div className="row">
          {/*Column 1 */}
          <div className="col first-col">
            <h4>Pour mieux nous connaître</h4>
            <ul>
              <li>À propos d'Amazon</li>
              <li>Carrières</li>
            </ul>
          </div>
          {/*Column 2 */}
          <div className="col">
            <h4>Gagnez de l'argent</h4>
            <ul>
              <li>Vendez sur Amazon</li>
              <li>Vendre sous Amazon</li>
              <li>Accelerator</li>
              <li>
                Vendez sur Amazon <br />
                Business
              </li>
              <li>
                Vendez sur Amazon <br /> Handmade
              </li>
              <li>Devenez Partenaire</li>
              <li>Expédié par Amazon</li>
              <li>
                Faites la promotion <br />
                de vos produits
              </li>
              <li>
                Auto-publiez votre <br />
                livre
              </li>
              <li>Amazon Pay</li>
              <li>
                ›Tous nos <br />
                programmes
              </li>
            </ul>
          </div>

          {/*Column 3 */}
          <div className="col third-col">
            <h4>Moyens de paiement Amazon</h4>
            <ul>
              <li>Cartes de paiement</li>
              <li>Paiement en plusieurs fois</li>
              <li>Amazon Currency Converter</li>
              <li>Chèques-cadeaux</li>
              <li>Recharge en ligne</li>
              <li>Recharge en point de vente</li>
            </ul>
          </div>

          {/*Column 4 */}
          <div className="col forth-col">
            <h4>Besoin d'aide ?</h4>
            <ul>
              <li>
                Amazon et <br />
                COVID-19
              </li>
              <li>
                Voir ou suivre <br /> vos commandes
              </li>
              <li>
                Tarifs et options <br /> de livraison
              </li>
              <li>Amazon Prime</li>
              <li>
                Retours et <br /> remplacements
              </li>
              <li>
                Recyclage (y <br /> compris les <br /> équipements <br />{" "}
                électriques et <br /> électroniques)
              </li>
              <li>
                Infos sur notre <br /> Marketplace
              </li>
              <li>
                Application <br /> Amazon Mobile
              </li>
              <li>
                Amazon <br /> Assistant
              </li>
              <li>Service Client</li>
              <li>Accessibilité</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer_countries">
        <img
          className="footer_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
        <div className="table">
        <ul className="countries">
          <li>Australie</li>
          <li>Allemagne</li>
          <li>Brésil</li>
          <li>Canada</li>
          <li>Chine</li>
          <li>Espagne</li>
          <li className="no_space">États-Unis</li>
          <li>Inde</li>
          <li>Italie</li>
          <li>Japon</li>
          <li>Mexique</li>
          <li className="no_space">Pays-Bas</li>
          <li className="no_space">Royaume-Uni</li>
          <li className="no_space">Émirats arabes unis</li>
          <li>Singapour</li>
          <li>Turquie</li>
        </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
