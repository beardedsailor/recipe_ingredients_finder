fetch(
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer?q=How%20much%20vitamin%20c%20is%20in%202%20apples%253F",
  {
    method: "GET",
    headers: {
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": "40a0c9b2c8mshf0e87e0a6d455fbp1220dejsn1e736c22633d",
    },
  }
)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
