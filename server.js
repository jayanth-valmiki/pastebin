const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;

let pastes = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Submit paste
app.post('/paste', (req, res) => {
    const pasteText = req.body.paste;
    if (pasteText) {
        pastes.push(pasteText);
    }
    res.redirect('/');
});

// View pastes
app.get('/pastes', (req, res) => {
    res.send(pastes);
});

app.listen(port, () => {
    console.log(`Pastebin app listening at http://localhost:${port}`);
});

