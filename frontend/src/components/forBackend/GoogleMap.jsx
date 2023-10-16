// En attente de l'ajouts sur le serveur back-end



// import { useEffect, useState } from "react";

// const apiKey = import.meta.env.VITE_REACT_APP_API_KEY_GOOGLE_MAP_REVIEWS;
// const query = "Kinésiologie animalière 25";
// const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${query}&inputtype=textquery&key=${apiKey}`;

// function loadGoogleMapsScript(apiKey) {
//   return new Promise((resolve, reject) => {
//     const script = document.createElement("script");
//     script.async = true;
//     script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
//     script.onload = resolve;
//     script.onerror = reject;
//     document.head.appendChild(script);
//   });
// }

// function GoogleMap() {
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchPlaceDetails() {
//       await loadGoogleMapsScript(apiKey);

//       fetch(url)
//         .then((response) => response.json())
//         .then((data) => {
//           if (data.candidates && data.candidates.length > 0) {
//             const placeId = data.candidates[0].place_id;
//             console.log(`Le place_id de l'entreprise est : ${placeId}`);

//             const request = {
//               placeId: placeId,
//             };

//             const service = new window.google.maps.places.PlacesService(
//               document.createElement("div")
//             );

//             service.getDetails(request, (place, status) => {
//               if (status === window.google.maps.places.PlacesServiceStatus.OK) {
//                 setReviews(place.reviews);
//                 setLoading(false);
//               } else {
//                 setLoading(false);
//                 console.error(
//                   "Erreur lors de la récupération des détails de l'entreprise"
//                 );
//               }
//             });
//           } else {
//             setLoading(false);
//             console.error("Aucun résultat trouvé pour la recherche.");
//           }
//         })
//         .catch((error) => {
//           setLoading(false);
//           console.error("Erreur lors de la recherche :", error);
//         });
//     }

//     fetchPlaceDetails();
//   }, []);

//   return (
//     <div>
//       {loading && <p>Chargement en cours...</p>}
//       {!loading && reviews.length === 0 && <p>Aucun avis trouvé.</p>}
//       {!loading && reviews.length > 0 && (
//         <div>
//           <h2>Avis de l'entreprise :</h2>
//           {reviews.map((review, index) => (
//             <div key={index}>
//               <p>Auteur : {review.author_name}</p>
//               <p>Commentaire : {review.text}</p>
//               <p>Évaluation : {review.rating}/5</p>
//               <hr />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default GoogleMap;
