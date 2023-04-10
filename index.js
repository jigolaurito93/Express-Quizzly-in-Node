const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log('Hello');
    // render register.ejs and pass in object as parameter
    res.render('register', {username: 'jlaur'});
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});


