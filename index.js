const express = require('express');
const shortid = require('shortid');
const cors = require('cors');

const blogRoutes = require('./blogRoutes');
const server = express(); 

server.use(express.json());
server.use(cors());

server.use('/api/posts', blogRoutes);

server.get('/', (req, res) => {
    res.status(200).send('The App is working');
})

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
})