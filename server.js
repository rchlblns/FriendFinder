const express = require("express");
const app = express();

let htmlRoute  = require("./app/routing/htmlRoutes");
require("./app/routing/htmlRoutes")(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log("Server running");
})
