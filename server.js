
const express = require('express');
// we'll use morgan to log the HTTP layer
const morgan = require('morgan');
// we'll use body-parser's json() method to
// parse JSON data sent in requests to this app
const bodyParser = require('body-parser');

// we import the ShoppingList model, which we'll
// interact with in our GET endpoint
const {ShoppingList} = require('./models');
const {getRecipes} = require('./models');

const jsonParser = bodyParser.json();
const app = express();

// log the http layer
app.use(morgan('common'));

// we're going to add some items to ShoppingList
// so there's some data to look at. Note that
// normally you wouldn't do this. Usually your
// server will simply expose the state of the
// underlying database.
Recipes.create('Chocolate Milk', 'cocoa', 'milk', 'sugar');
Recipes.create('Weed Brownies', 'weed', 'butter', 'brownie mix');
Recipes.create('Spaghetti', 'noodles', 'marinara sauce', 'meatballs');

// when the root of this route is called with GET, return
// all current ShoppingList items by calling `ShoppingList.get()`
app.get('/recipes', (req, res) => {
  res.json(getRecipes.get());
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
