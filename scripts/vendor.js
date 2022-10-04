//Const Declarations
const selectBudget = document.getElementById("select-budget");
const selectSeason = document.getElementById("select-season");

const destinationImage = document.getElementById("destination-image");
const destinationName = document.getElementById("destination-name");
const destinationSeason = document.getElementById("destination-season");
const destinationBudget = document.getElementById("destination-budget");
const destinationThings = document.getElementById("destination-things");

const favoriteLabel = document.getElementById("btn-favorite-label");
const btnFavorite = document.getElementById("btn-favorite");
const favoritesText = document.getElementById("favorites-text");

//Add Event Listeners
selectBudget.addEventListener("change", function () {
  getResult(selectBudget.value, selectSeason.value);
});
selectSeason.addEventListener("change", function () {
  getResult(selectBudget.value, selectSeason.value);
});
// btnFavorite.addEventListener("click", function () {
//   addToFavorites();
// });

// Destinations Object
let destinations = [
  {
    name: "Venice",
    image: "pics/Venice.jpg",
    bestSeason: "Fall",
    price: "$$$",
    activities: "Sightseeing, Eating at great restaurants, See museums",
  },
  {
    name: "Japan",
    image: "pics/Japan.jpg",
    bestSeason: "Spring",
    price: "$$$$",
    activities: "Sightseeing, Photography, Shopping, Hiking, Fishing",
  },
  {
    name: "Arizona",
    image: "pics/Arizona.jpg",
    bestSeason: "Summer",
    price: "$",
    activities: "Sightseeing, hiking, biking, mule tours, helicopter tours.",
  },
  {
    name: "Bora Bora",
    image: "pics/Bora Bora.jpg",
    bestSeason: "Spring",
    price: "$$$",
    activities: "Sightseeing, sunbathing, snorkeling, Scuba diving",
  },
  {
    name: "Hawaii",
    image: "pics/Hawaii.jpg",
    bestSeason: "Spring",
    price: "$$",
    activities:
      "Sightseeing, surfing, boarding, sunbathing, snorkeling, Scuba diving",
  },
  {
    name: "Jamaica",
    image: "pics/Jamaica.jpg",
    bestSeason: "Winter",
    price: "$$$",
    activities: "Swimming, parasailing, sunbathing, snorkeling, scuba dtiving",
  },
  {
    name: "Nova Scotia",
    image: "pics/Nova Scotia.jpg",
    bestSeason: "Fall",
    price: "$$$$",
    activities: "Sightseeing, photography, hiking",
  },
  {
    name: "Portugal",
    image: "pics/Portugal.jpg",
    bestSeason: "Spring",
    price: "$$",
    activities: "Sightseeing, visit beaches, experience traditional cuisine",
  },
  {
    name: "Quebec",
    image: "pics/Quebec.jpg",
    bestSeason: "Winter",
    price: "$$",
    activities: "Skiing, snowboarding, skating, hiking",
  },
  {
    name: "Washington",
    image: "pics/Washington.jpg",
    bestSeason: "Summer",
    price: "$$$",
    activities: "Hiking, sightseeing, photography",
  },
];
