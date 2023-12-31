const path = require('path');

exports.index = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
};

exports.about = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'about.html'));
};

exports.createTodo = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'create.html'));
};
