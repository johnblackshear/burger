var express = require("express");

var routes = require("./controllers/burgers_controllers");

var PORT = process.env.PORT || 8080;

var app = express();

var methodOverride = require('method-override');

var exphbs = require("express-handlebars");

app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'));

app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use('/',routes);

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  