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

app.get('/about', (req, res) => {
    res.send({
        message: 'This is about page',
    });
});

app.get('/blog/:title', (req, res) => {
    console.log(req.params);
    const { title } = req.params;
    res.send({
        message: `This is blog ${title} page`,
    });
});

app.get('/blog/:category/:title/:author', (req, res) => {
    console.log(req.params);
    const { category, title, author } = req.params;
    res.send({
        message: `This is blog, category: ${category} | title: ${title} page | author: ${author}`,
    });
});

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) res.send({message: `Keyword not found`,})
    res.send({
        message: `Search keyword: ${q}`,
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