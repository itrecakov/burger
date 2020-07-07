// Initialize Node.js package
var express = require("express");

// Set up routing
var router = express.Router();

// Import burger model
var burger = require("../models/burgers.js");

// Default route to display all burgers
router.get("/", function (request, response) {
    burger.select(function (data) {
        response.render("index", { burgers: data });
    });
});

// Route to add a new burger to burger db
router.post("/api/burgers", function (request, response) {
    burger.insert(request.body.burgerName, function (data) {
        response.json({ id: data.insertId });
    });
});

// Route to update the status of a burger in the db
router.put("/api/burgers/:id", function (request, response) {
    burger.update(request.body.devoured, request.params.id, function (data) {
        if (data.affectedRows === 0) {
            return response.status(404).end();
        } else {
            response.status(200).end();
        }
    });
});

// Export router
module.exports = router;