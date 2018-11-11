const path = require("path");

module.exports = function(app) {
    //route to the homepage
    app.get("/", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    //route to the survey page
    app.get("/survey", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
};

