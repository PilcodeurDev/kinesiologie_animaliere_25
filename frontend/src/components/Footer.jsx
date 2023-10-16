/**
 * The external imports
 */

/**
 * The internal imports
 */
import { fbk, insta, logo, whatsApp } from "../assets";

function Footer() {
  return (
    <footer className="w-full h-20 top-0 px-14">
      <div className="flex justify-between items-center">
        <div>
          <img src={logo} alt="logo kinésiologie animalière 25" />
        </div>
        <div>
          <p>
            © 2023 kinésiologieAnimalière25 Tous droits réservés. Conditions
            Générales de Vente Mentions légales - Design & Développement par
            So&Si Marketing
          </p>
        </div>
        <div className="flex">
          <a href="https://www.facebook.com/kinesiologieanimaliere25">
            <img src={fbk} alt="logo facebook"
            className="h-11 px-2"/>
          </a>
          <a href="https://www.instagram.com/kinesiologie_animaliere_25/">
            <img src={insta} alt="logo instagram"
            className="h-11 px-2"/>
          </a>
          <a href="https://www.instagram.com/kinesiologie_animaliere_25/">
            <img src={whatsApp} alt="logo instagram"
            className="h-11 px-2"/>
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
