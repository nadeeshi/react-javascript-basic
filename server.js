const express = require('express');

const app = express();

app.use(express.json());

let currentUser = {
    name: 'Shan Kumar',
    age: 48,
    hairColor: 'brown',
    hobbies: ['bicycling', 'reading', 'swimming']
};

let users = [{
    name: 'Shan Kumar',
    age: 48,
    hairColor: 'brown',
    hobbies: ['bicycling', 'reading', 'swimming']
}, { 
    name: 'Nadee Sansari',
    age: 28,
    hairColor: 'black',
    hobbies: ['dancing', 'reading', 'movie watching']
}];

app.get('/current-user', (req, res) => {
    res.json(currentUser);
});

app.get('/users/:id', (req, res) => {
    const { id } = req.params;

    res.json(users.find(user => user.id === id));
});

app.post('/users/:id', (req, res) => {
    const { id } = req.params;
    const { user:updateUser } = req.body;

    users = users.map(user => user.id === id ? updateUser: null );
    res.json(users.find(user => user.id === id));
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.listen(8080, () => {
    console.log('Server is listening on port 8080');
});