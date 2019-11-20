const mongoose = require('mongoose');
//const flash = require('express-flash');

var AuthorSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "A name is required."],
        minlength: [3, "Author's name must be at least 3 characters long."]
    }
    // quote: {
    //     type: String, 
    //     required: [true, "Last name is required."],
    //     minlength: [3, "Author's quote must be at least 3 characters long."]
    // }
}, {timestamps: true});

var Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;