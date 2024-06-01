
const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
// const ExpressError = require('./utils/ExpressError');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.get('/', (req, res) => {
    res.render('home')
});

const port = process.env.PORT || 8080;
server.listen(port, () => {
    console.log(`Serving on port ${port}`);
})
