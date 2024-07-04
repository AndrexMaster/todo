// index.js
const express = require('express');
const app = express();
const port = 3001; // Порт, на котором будет работать сервер

// Пример маршрута API
app.get('/api/hello', (req, res) => {
    res.send({ message: 'Привет от сервера!' });
});

// Слушаем заданный порт
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
