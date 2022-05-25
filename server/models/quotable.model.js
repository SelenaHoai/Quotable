// import mongoose to build a model
const mongoose = require('mongoose');

// the schema - the rules that the entries in the db must follow
const QuotableSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: [true, "author name is required"],
        // minlength: [3, "Author name must be at least 3 characters long"]
    },
    topic: {
        type: String,
        required: [true, "Topic category is required"],
    },
    quote: {
        type: String,
        required: [true, "Quote is required"],
    },
    isFavorite: {
        type: Boolean,
        default: true,
    },
}, {timestamps: true});


// the model - this is what we use to make the actual queries to the DB
const Quotable = mongoose.model('Quotable', QuotableSchema);

// export the model
module.exports = Quotable;