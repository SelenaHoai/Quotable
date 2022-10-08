// import the controller to use the instantiated model
const QuotableController = require("../controllers/quotable.controller")


module.exports = (app) => {
    app.get("/api/quotes", QuotableController.findAll);
    app.get("/api/", QuotableController.findRandomQuote);
    // app.get("/api/quotes", QuotableController.findAllRandomQuote);
    app.get("/api/quotes/:id", QuotableController.findOne);
    app.get("/api/quotes/topics/:topic", QuotableController.findAllByTopic);
    // app.get("/api/quotes/authors/:author", QuotableController.findAllByAuthor);
    // app.get("/api/quotes/:author/:topic", QuotableController.findSpecific);
    app.post("/api/quotes/new", QuotableController.create);
    app.put("/api/quotes/update/:id", QuotableController.update);
    app.delete("/api/quotes/delete/:id",QuotableController.delete);
}