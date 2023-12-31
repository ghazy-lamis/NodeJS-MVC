const Todo = require('../todo');

exports.getTodos = (req, res) => {
    Todo.find()
        .then(todos => res.status(200).json(todos))
        .catch(err => res.status(500).json({ error: err.message }));
};

exports.createTodo = (req, res) => {
    const todo = new Todo(req.body);
    todo.save()
        .then(result => res.status(201).json(result))
        .catch(err => res.status(500).json({ error: err.message }));
};
