const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;


app.use(bodyParser.json());


const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/testdb';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));


app.get('/', (req, res) => {
    res.send('This is just my Node.js with a MongoDB database app');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
