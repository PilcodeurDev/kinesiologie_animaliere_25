/* eslint-disable react/no-unescaped-entities */
/**
 * The external imports
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

/**
 * The internal imports
 */
import { article1 } from "../../public/assets/images";
// import GoogleMap from "../components/forBackend/GoogleMap";

function InfoGoogle() {
  const infoReviewsGoogle = [
    {
      id: 1,
      iconImage: { article1 },
      userName: "Françoise COTTREL",
      createdDate: "03/03/2021",
      rating: (
        <div className="flex justify-center pb-2">
          {/* rating temporaire */}
          <FontAwesomeIcon
            icon={faStar}
            size="lg"
            style={{ color: "#f7b704" }}
          />
          <FontAwesomeIcon
            icon={faStar}
            size="lg"
            style={{ color: "#f7b704" }}
          />
          <FontAwesomeIcon
            icon={faStar}
            size="lg"
            style={{ color: "#f7b704" }}
          />
          <FontAwesomeIcon
            icon={faStar}
            size="lg"
            style={{ color: "#f7b704" }}
          />
          <FontAwesomeIcon
            icon={faStar}
            size="lg"
            style={{ color: "#f7b704" }}
          />
        </div>
      ),
      text: "Étant cartésien, les résultats sur mes animaux sont vraiment incroyable !! N'hésitez pas contacter Alix, c'est le genre de service pas très connu mais vraiment magique pour mon chien et mes deux chats !!!",
    },
    {
      id: 2,
      iconImage: { article1 },
      userName: "Françoise COTTREL",
      createdDate: "03/03/2021",
      rating: (
        <div className="flex justify-center pb-2">
          {/* rating temporaire */}
          <FontAwesomeIcon
            icon={faStar}
            size="lg"
            style={{ color: "#f7b704" }}
          />
          <FontAwesomeIcon
            icon={faStar}
            size="lg"
            style={{ color: "#f7b704" }}
          />
          <FontAwesomeIcon
            icon={faStar}
            size="lg"
            style={{ color: "#f7b704" }}
          />
          <FontAwesomeIcon
            icon={faStar}
            size="lg"
            style={{ color: "#f7b704" }}
          />
          <FontAwesomeIcon
            icon={faStar}
            size="lg"
            style={{ color: "#f7b704" }}
          />
        </div>
      ),
      text: "Étant cartésien, les résultats sur mes animaux sont vraiment incroyable !! N'hésitez pas contacter Alix, c'est le genre de service pas très connu mais vraiment magique pour mon chien et mes deux chats !!!",
    },
    {
      id: 3,
      iconImage: { article1 },
      userName: "Françoise COTTREL",
      createdDate: "03/03/2021",
      rating: (
        <div className="flex justify-center pb-2">
          {/* rating temporaire */}
          <FontAwesomeIcon
            icon={faStar}
            size="lg"
            style={{ color: "#f7b704" }}
          />
          <FontAwesomeIcon
            icon={faStar}
            size="lg"
            style={{ color: "#f7b704" }}
          />
          <FontAwesomeIcon
            icon={faStar}
            size="lg"
            style={{ color: "#f7b704" }}
          />
          <FontAwesomeIcon
            icon={faStar}
            size="lg"
            style={{ color: "#f7b704" }}
          />
          <FontAwesomeIcon
            icon={faStar}
            size="lg"
            style={{ color: "#f7b704" }}
          />
        </div>
      ),
      text: "Étant cartésien, les résultats sur mes animaux sont vraiment incroyable !! N'hésitez pas contacter Alix, c'est le genre de service pas très connu mais vraiment magique pour mon chien et mes deux chats !!!",
    },
    {
      id: 4,
      iconImage: { article1 },
      userName: "Françoise COTTREL",
      createdDate: "03/03/2021",
      rating: (
        <div className="flex justify-center pb-2">
          {/* rating temporaire */}
          <FontAwesomeIcon
            icon={faStar}
            size="lg"
            style={{ color: "#f7b704" }}
          />
          <FontAwesomeIcon
            icon={faStar}
            size="lg"
            style={{ color: "#f7b704" }}
          />
          <FontAwesomeIcon
            icon={faStar}
            size="lg"
            style={{ color: "#f7b704" }}
          />
          <FontAwesomeIcon
            icon={faStar}
            size="lg"
            style={{ color: "#f7b704" }}
          />
          <FontAwesomeIcon
            icon={faStar}
            size="lg"
            style={{ color: "#f7b704" }}
          />
        </div>
      ),
      text: "Étant cartésien, les résultats sur mes animaux sont vraiment incroyable !! N'hésitez pas contacter Alix, c'est le genre de service pas très connu mais vraiment magique pour mon chien et mes deux chats !!!",
    },
    {
      id: 5,
      iconImage: { article1 },
      userName: "Françoise COTTREL",
      createdDate: "03/03/2021",
      rating: (
        <div className="flex justify-center pb-2">
          {/* rating temporaire */}
          <FontAwesomeIcon
            icon={faStar}
            size="lg"
            style={{ color: "#f7b704" }}
          />
          <FontAwesomeIcon
            icon={faStar}
            size="lg"
            style={{ color: "#f7b704" }}
          />
          <FontAwesomeIcon
            icon={faStar}
            size="lg"
            style={{ color: "#f7b704" }}
          />
          <FontAwesomeIcon
            icon={faStar}
            size="lg"
            style={{ color: "#f7b704" }}
          />
          <FontAwesomeIcon
            icon={faStar}
            size="lg"
            style={{ color: "#f7b704" }}
          />
        </div>
      ),
      text: "Étant cartésien, les résultats sur mes animaux sont vraiment incroyable !! N'hésitez pas contacter Alix, c'est le genre de service pas très connu mais vraiment magique pour mon chien et mes deux chats !!!",
    },
  ];

  return (
    // <GoogleMap />
    <div>
      <div>
        <h2 className="flex justify-center uppercase">Excellent</h2>
        <div className="flex justify-center pb-2">
          <FontAwesomeIcon
            icon={faStar}
            size="lg"
            style={{ color: "#f7b704" }}
          />
          <FontAwesomeIcon
            icon={faStar}
            size="lg"
            style={{ color: "#f7b704" }}
          />
          <FontAwesomeIcon
            icon={faStar}
            size="lg"
            style={{ color: "#f7b704" }}
          />
          <FontAwesomeIcon
            icon={faStar}
            size="lg"
            style={{ color: "#f7b704" }}
          />
          <FontAwesomeIcon
            icon={faStar}
            size="lg"
            style={{ color: "#f7b704" }}
          />
        </div>
        <div className="flex justify-center">
          <span style={{ color: "#4285F4", fontSize: "30px" }}>G</span>
          <span style={{ color: "#DB4437", fontSize: "30px" }}>o</span>
          <span style={{ color: "#F4B400", fontSize: "30px" }}>o</span>
          <span style={{ color: "#4285F4", fontSize: "30px" }}>g</span>
          <span style={{ color: "#0F9D58", fontSize: "30px" }}>l</span>
          <span style={{ color: "#DB4437", fontSize: "30px" }}>e</span>
        </div>
      </div>
      <div className="mt-16 h-60 bg-gray">
        <div className="bg-red">
          <div>
            <img src={infoReviewsGoogle.iconImage} alt="icon utilisateur" />
            <div>
              <p>{infoReviewsGoogle.userName}</p>
              <p>{infoReviewsGoogle.createdDate}</p>
            </div>
            <img src="" alt="logo google" />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
export default InfoGoogle;
