const router = require("express").Router();
var db = require("../../models");

// "/api/books" routes
router.get("/api/books", (req, res) => {
    db.Book
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
})

router.post("/api/books", (req, res) => {
    db.Book
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
})

// "/api/books/:id" routes
router.get("/api/books/:id", (req, res) => {
    db.Book
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
})

router.put("/api/books/:id", (req, res) => {
    db.Book
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
})

router.delete("/api/books/:id", (req, res) => {
    db.Book
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
})

module.exports = router;