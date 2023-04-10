const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.set('view engine', 'ejs');
// Update the location of the folder for res,render to use (default is './views')
app.set('views', path.join(__dirname, 'src/templates/views'));

// Add logging middleware
app.use((req,res, next) => {
    console.log(req.path);
    next();
})

app.get('/', (req, res) => {
    console.log('Hello');
    // render register.ejs and pass in object as parameter
    res.render('register', {username: 'jlaur'});
});

// Import the function from the routes module
const initRoutes = require('./src/routes');
// Execute the function with the app as an arugment
initRoutes(app);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});


