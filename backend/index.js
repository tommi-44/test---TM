const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/hello', (request, response) => {
    return response.send('Hello world');
});
app.get('/index', (request, response) => {
    return response.sendFile(path.join(__dirname,'public/index.html'));
});
app.get('/login', (request, response) => {
    return response.sendFile(path.join(__dirname,'public/login.html'));
});
app.post('/getkontakt', (request, response) => {
    return response.send('GET metoda -> Read');
});
app.post('/addkontakt', (request, response) => {
    const data = request.body;
    console.log(data.kontakt);
    console.log(data.ime);
    return response.send('POST metoda -> Add '+data.kontakt+" "+data.ime);
});
app.put('/updatekontakt', (request, response) => {
    const data = request.body;
    console.log(data.kontakt);
    return response.send('PUT metoda -> Change '+data.kontakt);
});
app.delete('/deletekontakt', (request, response) => {
    const data = request.body;
    console.log('Delete '+data.kontakt);
    return response.send('Delete '+data.kontakt);
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});