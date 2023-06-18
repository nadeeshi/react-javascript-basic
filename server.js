const express = require('express');

const app = express();

app.use(express.json());

let currentUser = {
    id: '123',
    name: 'Shan Kumar',
    age: 48,
    hairColor: 'brown',
    hobbies: ['bicycling', 'reading', 'swimming']
};

let users = [{
    id: '123',
    name: 'Shan Kumar',
    age: 48,
    hairColor: 'brown',
    hobbies: ['bicycling', 'reading', 'swimming']
}, { 
    id: '124',
    name: 'Nadee Sansari',
    age: 28,
    hairColor: 'black',
    hobbies: ['dancing', 'reading', 'movie watching']
}];

let products = [{
    productId: '1234',
    name: 'Piano',
    price: '$450',
    description: 'Used Piano, with great condition',
    rating: 7.8,
  }, {
    productId: '1235',
    name: 'Iphone 14',
    price: '$200',
    description: 'Used Iphone, with great condition',
    rating: 5.8,
  }, {
    productId: '12341',
    name: 'TV',
    price: '$150',
    description: 'Used TV, with great condition',
    rating: 3.8,
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

app.get('/products/:id', (req, res) => {
    const { id } = req.params;

    res.json(products.find(product => product.productId === id));
});

app.post('/products/:id', (req, res) => {
    const { id } = req.params;
    const { product:updateProduct } = req.body;

    products = products.map(product => product.productId === id ? updateProduct: null );
    res.json(products.find(product => product.productId === id));
});

app.get('/products', (req, res) => {
    res.json(products);
});

app.listen(8080, () => {
    console.log('Server is listening on port 8080');
});