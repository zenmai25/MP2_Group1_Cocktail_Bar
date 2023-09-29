//API Cocktail
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const cocktailList = document.getElementById("cocktailList");
const cocktailDetails = document.getElementById("cocktailDetails");


// Function to fetch and display random cocktails
async function fetchAndDisplayRandomCocktails() {
  const cocktails = [];
  while (cocktails.length < 20) {
      try {
          const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
          if (!response.ok) {
              throw new Error("NETWORK RESPONSE ERROR");
          }
          const data = await response.json();
          const cocktail = data.drinks[0];
          cocktails.push(cocktail);
      } catch (error) {
          console.error("FETCH ERROR:", error);
      }
  }
  displayCocktails(cocktails);
}

// Function to display a list of cocktails
function displayCocktails(cocktails) {
    cocktailList.innerHTML = ""; // Clear previous results
    if (cocktails) {
        cocktails.forEach(cocktail => {
            const cocktailItem = document.createElement("div");
            cocktailItem.className = "cocktail-item";
            cocktailItem.innerHTML = `<img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}">
                                      <p>${cocktail.strDrink}</p>`;
            cocktailItem.addEventListener("click", () => showCocktailDetails(cocktail));
            cocktailList.appendChild(cocktailItem);
        });
    } else {
        cocktailList.innerHTML = "<p>No cocktails found.</p>";
    }
}

function showCocktailDetails(cocktail) {
    // Hide the dashboard content
    document.getElementById("cocktailList").style.display = "none";

    // Show the cocktail details container
    const cocktailDetailsContainer = document.getElementById("cocktailDetailsContainer");
    cocktailDetailsContainer.style.display = "block";

    // Populate the cocktail details
    const cocktailDetails = document.getElementById("cocktailDetails");
    cocktailDetails.innerHTML = `
        <h2>${cocktail.strDrink}</h2>
        <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}">
        <h3>Ingredients:</h3>
        <ul>
            ${listIngredients(cocktail)}
        </ul>
    `;
}


// Function to list cocktail ingredients and measures
function listIngredients(cocktail) {
    let ingredientsList = "";
    for (let i = 1; i <= 15; i++) {
        const ingredient = cocktail[`strIngredient${i}`];
        const measure = cocktail[`strMeasure${i}`];
        if (ingredient && ingredient.trim() !== "") {
            ingredientsList += `<li>${measure} ${ingredient}</li>`;
        }
    }
    return ingredientsList;
}

// Event listener for the search button
searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== "") {
        searchCocktails(searchTerm);
    }
});

// Function to search cocktails by name
async function searchCocktails(searchTerm) {
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
        if (!response.ok) {
            throw new Error("NETWORK RESPONSE ERROR");
        }
        const data = await response.json();
        displayCocktails(data.drinks); // Display search results
    } catch (error) {
        console.error("FETCH ERROR:", error);
    }
}

// Initial random cocktails when the page loads
fetchAndDisplayRandomCocktails();



// Api for Catergory
async function fetchCocktailsByCategory(category) {
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
        if (!response.ok) {
            throw new Error("NETWORK RESPONSE ERROR");
        }
        const data = await response.json();
        displayCocktails(data.drinks);
    } catch (error) {
        console.error("FETCH ERROR:", error);
    }
}

function filterByCategory(category) {
    fetchCocktailsByCategory(category);
}


// API for Ordinary Drink
async function fetchOrdinaryCocktails(category) {
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
        if (!response.ok) {
            throw new Error("NETWORK RESPONSE ERROR");
        }
        const data = await response.json();
        displayCocktails(data.drinks);
    } catch (error) {
        console.error("FETCH ERROR:", error);
    }
}

function filterOrdinaryCocktails() {
    fetchOrdinaryCocktails("Ordinary_Drink"); 
}

// Example usage:
filterOrdinaryCocktails(); 

// API for Non-Alcoholic Drink
async function fetchNonAlcoholicCocktails(category) {
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${category}`);
        if (!response.ok) {
            throw new Error("NETWORK RESPONSE ERROR");
        }
        const data = await response.json();
        displayCocktails(data.drinks);
    } catch (error) {
        console.error("FETCH ERROR:", error);
    }
}

function filterNonAlcoholicCocktails() {
    fetchNonAlcoholicCocktails("Non_Alcoholic"); 
}

// Example usage:
filterNonAlcoholicCocktails(); 

// API for Champagne Drink
async function fetchChampangeCocktails(category) {
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${category}`);
        if (!response.ok) {
            throw new Error("NETWORK RESPONSE ERROR");
        }
        const data = await response.json();
        displayCocktails(data.drinks);
    } catch (error) {
        console.error("FETCH ERROR:", error);
    }
}

function filterChampangeCocktails() {
    fetchChampangeCocktails("Champagne_flute"); 
}

// Example usage:
filterChampangeCocktails(); 

// API for Vodka Drink
async function fetchVodakaCocktails(category) {
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${category}`);
        if (!response.ok) {
            throw new Error("NETWORK RESPONSE ERROR");
        }
        const data = await response.json();
        displayCocktails(data.drinks);
    } catch (error) {
        console.error("FETCH ERROR:", error);
    }
}

function filterVodkaCocktails() {
    fetchVodakaCocktails("Vodka"); 
}

// Example usage:
filterVodkaCocktails(); 

// API for Vodka Drink
async function fetchGinCocktails(category) {
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${category}`);
        if (!response.ok) {
            throw new Error("NETWORK RESPONSE ERROR");
        }
        const data = await response.json();
        displayCocktails(data.drinks);
    } catch (error) {
        console.error("FETCH ERROR:", error);
    }
}

function filterGinCocktails() {
    fetchGinCocktails("Gin"); 
}

// Example usage:
filterGinCocktails(); 

