var express = require("express");

var routes = require("./controllers/burgers_controllers.js");

var PORT = process.env.PORT || 8080;

var app = express();

var exphbs = require("express-handlebars");

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  