const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log(`We got request`);
//     res.send({ message: `Hello Express`})
// });

app.get('/', (req, res) => {
    res.send({
        message: 'This is home page',
    });
});

app.get('/cats', (req, res) => {
    res.send({
        message: 'This is cats page',
    });
});

app.post('/cats', (req, res) => {
    res.send({
        message: 'This is cats page with post method',
    });
});

app.get('*', (req, res) => {
    res.send({
        message: 'Page not found',
    });
});

app.listen(8080, () => {
    console.log(`Server is running on http://localhost:8080`);
});