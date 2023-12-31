const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const todoRoutes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://Lamis:123Lamis@cluster0.9v8owk9.mongodb.net/Todo_node', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Database connection failed', err));
  

app.use(express.json());
app.use(express.static('views'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(todoRoutes);

app.listen(1234, () => console.log('Server running on port 1234'));
