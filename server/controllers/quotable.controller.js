// --- CONTROLLER -- is all CRUD
// making queries to the DB
const Quotable = require("../models/quotable.model");


module.exports = {

    // READ ALL
    findAll: (req, res) => {
        Quotable.find({})
        .then( (quotes) => {
            return res.json(quotes)
        })
        .catch(err => res.json({message: 'Something went wrong', error:err}));  
    },

    // CREATE
    create: (req, res) => {
        Quotable.create(req.body)
        .then( newQuote => {
            console.log('DB Success created a new quote');
            return res.json(newQuote)
        })
        .catch(err => res.status(400).json(err));
    },

    // READ ONE
    findOne: (req, res) => {
        Quotable.findById(req.params.id)
        .then(oneSingleQuote => res.json(oneSingleQuote))
        .catch(err => res.json({ message: 'Error finding a quote', error: err }));
    },

    // UPDATE
    update: (req, res) => {
        Quotable.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true
        })
        .then(updatedQuote => res.json(updatedQuote))
        .catch(err => res.status(400).json(err))
    },

    // DELETE
    delete: (req, res) => {
        Quotable.findByIdAndDelete(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json({ message: 'Error unable to delete a quote', error: err }));
    }

}