/**
 * The external imports
 */

/**
 * The internal imports
 */
import { Link } from "react-router-dom";
import { fbk, insta, logo, whatsApp } from "../assets";

function Footer() {
  return (
    <footer className="w-full h-24 top-0 px-14">
      <div>
        <div className="flex justify-between items-center pt-5">
          <div>
            <img src={logo} alt="logo kinésiologie animalière 25" />
          </div>
          <div>
            <div>
              <span className=" w-2/3">
                © 2023 Kinésiologie Animalière 25 Tous droits réservés .
              </span>
              <span className="lien w-1/3">
                <Link to="#">Conditions Générales de Vente</Link>
              </span>
            </div>
            <p className="flex justify-center">
              <span className="lien">
                <Link to="#">Mentions légales</Link>
              </span>
              . Design & Développement par So&Si Marketing
            </p>
          </div>
          <div className="flex">
            <a href="https://www.facebook.com/kinesiologieanimaliere25">
              <img src={fbk} alt="logo facebook" className="h-11" />
            </a>
            <a href="https://www.instagram.com/kinesiologie_animaliere_25/">
              <img src={insta} alt="logo instagram" className="h-11 px-5" />
            </a>
            <a href="https://www.instagram.com/kinesiologie_animaliere_25/">
              <img src={whatsApp} alt="logo instagram" className="h-11" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
