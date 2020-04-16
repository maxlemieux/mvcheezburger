const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  const newBurgerObj = {
    burger_name: req.body.burger_name, 
    devoured: req.body.devoured
  };
  burger.create(newBurgerObj, function(result) {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  const conditionObj = {
    id: req.params.id
  };
  const objColVals = {
    devoured: req.body.devoured
  };
  burger.update(objColVals, conditionObj, function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

module.exports = router;
