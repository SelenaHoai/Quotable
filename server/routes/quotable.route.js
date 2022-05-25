// import the controller to use the instantiated model
const QuotableController = require("../controllers/quotable.controller")


module.exports = (app) => {
    app.get("/api/quotes", QuotableController.findAll);
    app.get("/api/quotes/:id", QuotableController.findOne);
    app.post("/api/quotes/new", QuotableController.create);
    app.put("/api/quotes/update/:id", QuotableController.update);
    app.delete("/api/quotes/delete/:id",QuotableController.delete);
}