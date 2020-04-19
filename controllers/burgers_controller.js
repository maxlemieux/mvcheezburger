const express = require("express");
const router = express.Router();

/* Import model */
const burger = require("../models/burger.js");

/* All Burgers */
router.get("/", (req, res) => {
  burger.all(burgers => {
    const allBurgers = {
      burgers
    };
    res.render("index", allBurgers);
  });
});

/* New Burger */
router.post("/api/burgers", (req, res) => {
  const { burger_name, devoured } = req.body;
  const newBurgerObj = {
    burger_name, 
    devoured
  };
  burger.create(newBurgerObj, result => {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

/* Update burger status */
router.put("/api/burgers/:id", (req, res) => {
  const conditionObj = {
    id: req.params.id
  };
  const objColVals = {
    devoured: req.body.devoured
  };
  burger.update(objColVals, conditionObj, result => {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

module.exports = router;
