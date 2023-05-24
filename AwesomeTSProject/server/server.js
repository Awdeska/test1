const express = require('express');
const mysql = require('mysql');

const app = express();

const port = 3000;
const host = '192.168.1.183';

app.use(express.static('public'));

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'admin',
    password: 'h7a5i2109',
    database: 'brokers',
});

connection.connect((err) => {
    if (err) {
        console.error('Ошибка подключения к базе данных:', err);
    } else {
        console.log('Подключено к базе данных MySQL');
    }
});


app.get('/api/data', (req, res) => {
    const query = 'SELECT * FROM client';

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Ошибка выполнения запроса:', err);
            res.sendStatus(500);
        } else {
            res.json(results);
        }
    });
});

app.post('/api/data', (req, res) => {
    const { id, newData } = req.body;
    const query = 'UPDATE client SET Phone = 123456789 WHERE id = 1';
    const values = [newData, id];

    connection.query(query, values, (err, result) => {
        if (err) {
            console.error('Ошибка выполнения запроса:', err);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
});


app.listen(port, host, () => {
    console.log(`Сервер запущен на порту ${port}`);
});

