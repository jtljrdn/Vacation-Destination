let favorites = [];
let destinationChoice = "";
let count = 0;

// Takes the two input boxes and parses the array for destinations that match the selected filters
function getResult(budget, season) {
  for (let i = 0; i < destinations.length; i++) {
    let destBudget = destinations[i].price;
    let destSeason = destinations[i].bestSeason;
    if (budget == destBudget && season == destSeason) {
      printResult(destinations[i]);
      console.log(`Budget and season matches ${destinations[i].name}`);
    }
  }
}
// Displays result on webpage
function printResult(destination) {
  destinationImage.src = destination.image;
  destinationName.innerHTML = `Your ideal vacation spot is: ${destination.name}`;
  destinationSeason.innerHTML = `The ideal season to visit ${destination.name} is ${destination.bestSeason}`;
  destinationBudget.innerHTML = `${destination.name} is well within your budget of ${destination.price}`;
  destinationThings.innerHTML = `In ${destination.name}, you can go ${destination.activities}`;
  btnFavorite.style.display = "inline";
  favoriteLabel.style.display = "inline";
  destinationChoiceName = destination.name;
  destinationChoice = destination
}

function addToFavorites() {
    favorites.push(destinationChoice.name)
    console.log(favorites)
    let uniqueFavorites = [... new Set(favorites)]
    console.log(uniqueFavorites)
    fillFavoritesList(uniqueFavorites)
    favoritesTitle.style.display = 'flex'
}

function fillFavoritesList(uniqueFavorites){ // Modified from Grocery List App
    uniqueFavorites.forEach(function(item) {
      let li = document.createElement("li");
      li.innerHTML = `<li> ${item}     ${destinationChoice.price} </li>`
      favoritesList.appendChild(li);
    });
    }