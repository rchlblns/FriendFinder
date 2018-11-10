const express = require("express");
const app = express();

let htmlRoute  = require("./app/routing/htmlRoutes");
require("./app/routing/htmlRoutes")(app);

let apiRoute = require("./app/routing/apiRoutes");
require("./app/routing/apiRoutes")(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log("Server running");
})
