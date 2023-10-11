/**
 * The internal imports
 */
import "./NegativesWordsCarrousel.css";

const negativeWords = [
  { text: "anxiété" },
  { text: "réactivité" },
  { text: "peur" },
  { text: "marquage" },
  { text: "destruction" },
  { text: "aboiement" },
  { text: "tristesse" },
  { text: "fatigue" },
  { text: "protection" },
];

function NegativesWordsCarrousel() {
  return (
    <div className="flex items-center ">
      <div className="slider-word flex">
        {negativeWords.map((word) => (
          <span
            key={word.id}
            className="border-linear-gradient p-[2px] mx-1 rounded-xl"
          >
            <div className="word_bg px-7 py-2 rounded-xl">
              <span className="word">{word.text}</span>
            </div>
          </span>
        ))}
      </div>
      <div className="slider-word flex">
        {negativeWords.map((word) => (
          <span
            key={word.id}
            className="border-linear-gradient p-[2px] mx-1 rounded-xl"
          >
            <div className="word_bg px-7 py-2 rounded-xl">
              <span className="word">{word.text}</span>
            </div>
          </span>
        ))}
      </div>
    </div>
  );
}
export default NegativesWordsCarrousel;
