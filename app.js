const path = require("path");

const express = require("express");

const fs = require('fs');

const app = express();

//app.use('scripts', express.static(__dirname + '/scripts'))

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }))

app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/recommend', (req, res) => {
    res.render('recommend')
})

app.get('/confirm', (req, res) => {
    res.render('confirm')
})

app.get('/about', (req, res) => {
    res.render('about')
})
/*
app.get('/restaurants', (req, res) => {
    res.render('restaurants')
})
*/
app.get('/recommend', (req, res) => {
    res.render('recommend')
})

app.get('/confirm', (req, res) => {
    res.render('confirm')
})

app.get('/restaurants', (req, res) => {

    const filePath = path.join(__dirname, 'data', 'restaurant.json')

    const fileData = fs.readFileSync(filePath, 'utf8')

    const restaurants = JSON.parse(fileData)

    res.render('restaurants', {restaurants : restaurants.length, storedRes : restaurants})
})

app.post('/recommend', (req, res) => {
    const restaurant = req.body;
    const restaurantFilePath = path.join(__dirname, 'data', 'restaurant.json');
    const storeRestaurant = fs.readFileSync(restaurantFilePath, 'utf8');

    const restaurants = JSON.parse(storeRestaurant);

    restaurants.push(restaurant);
    fs.writeFileSync(restaurantFilePath, JSON.stringify(restaurants));
    res.redirect('/confirm')
})

app.listen(3001);