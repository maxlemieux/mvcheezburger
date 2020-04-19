require('dotenv').config()
const PORT = process.env.PORT || 3000;

/* Express */
const express = require("express");
const app = express();

/* Middleware */
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* Handlebars */
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

/* Routes */
const routes = require("./controllers/burgers_controller.js");
app.use(routes);

/* Start the server */
app.listen(PORT, function() {
  console.log(`App now listening at localhost: ${PORT}`);
});
