//Const Declarations
const selectBudget = document.getElementById("select-budget");
const selectSeason = document.getElementById("select-season");

const destinationImage = document.getElementById("destination-image");
const destinationName = document.getElementById("destination-name");
const destinationSeason = document.getElementById("destination-season");
const destinationBudget = document.getElementById("destination-budget");
const destinationThings = document.getElementById("destination-things");

const btnFavorite = document.getElementById("btn-favorite");
const favoritesText = document.getElementById("favorites-text");

//Add Event Listeners
selectBudget.addEventListener("change", function () {});
selectSeason.addEventListener("change", function () {});
btnFavorite.addEventListener("click", function () {
  addToFavorites();
});

// Destinations Object
let destinations = [
  {
    name: "Venice, Italy",
    image: "Venice.jpg",
    bestSeason: "Fall",
    price: "$$$",
    activities: "Sightseeing, Eating at great restaurants, See museums",
  },
  {
    name: "Japan",
    image: "Japan.jpg",
    bestSeason: "Spring",
    price: "$$$$",
    activities: "Sightseeing, Photography, Shopping, Hiking, Fishing",
  },
  {
    name: "Arizona",
    image: "Arizona.jpg",
    bestSeason: "Summer",
    price: "$",
    activities: "Sightseeing, hiking, biking, mule tours, helicopter tours.",
  },
  {
    name: "Bora Bora",
    image: "Bora Bora.jpg",
    bestSeason: "Spring",
    price: "$$$",
    activities: "Sightseeing, sunbathing, snorkeling, Scuba diving",
  },
  {
    name: "Hawaii",
    image: "Hawaii.jpg",
    bestSeason: "Spring",
    price: "$$",
    activities:
      "Sightseeing, surfing, boarding, sunbathing, snorkeling, Scuba diving",
  },
  {
    name: "Jamaica",
    image: "Jamaica.jpg",
    bestSeason: "Winter",
    price: "$$$",
    activities: "Swimming, parasailing, sunbathing, snorkeling, scuba dtiving",
  },
  {
    name: "Nova Scotia",
    image: "Nova Scotia.jpg",
    bestSeason: "Fall",
    price: "$$$$",
    activities: "Sightseeing, photography, hiking",
  },
  { name: "Portugal", image: "", bestSeason: "", price: "", activities: "" },
  { name: "", image: "", bestSeason: "", price: "", activities: "" },
  { name: "", image: "", bestSeason: "", price: "", activities: "" },
];
