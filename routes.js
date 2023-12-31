const express = require('express');
const router = express.Router();
const todoController = require('../Node Js MVC/Controllers/todoController');
const pageController = require('../Node Js MVC/Controllers/pageController');

router.get('/', pageController.index);
router.get('/about', pageController.about);
router.get('/todo/create', pageController.createTodo);
router.get('/todos', todoController.getTodos);
router.post('/todos', todoController.createTodo);

module.exports = router;
