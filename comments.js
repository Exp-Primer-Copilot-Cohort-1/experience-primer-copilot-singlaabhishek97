// Create web server// 1. Create a web server
// 2. Create a route for GET /comments
// 3. Create a route for POST /comments
// 4. Create a route for GET /comments/:id
// 5. Create a route for PUT /comments/:id
// 6. Create a route for DELETE /comments/:id

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 3000;

var comments = [
    { id: 1, body: 'comment 1' },
    { id: 2, body: 'comment 2' },
    { id: 3, body: 'comment 3' }
];

app.use(bodyParser.json());

app.get('/comments', function(req, res) {
    res.json(comments);
});

app.post('/comments', function(req, res) {
    var comment = req.body;
    comments.push(comment);
    res.json(comment);
});

app.get('/comments/:id', function(req, res) {
    var id = req.params.id;
    var comment = comments.find(function(comment) {
        return comment.id === Number(id);
    });
    res.json(comment);
});

app.put('/comments/:id', function(req, res) {
    var id = req.params.id;
    var comment = comments.find(function(comment) {
        return comment.id === Number(id);
    });
    comment.body = req.body.body;
    res.json(comment);
});

app.delete('/comments/:id', function(req, res) {
    var id = req.params.id;
    comments = comments.filter(function(comment) {
        return comment.id !== Number(id);
    });
    res.json(comments);
});

app.listen(port, function() {
    console.log('Server listening on port ' + port);
});