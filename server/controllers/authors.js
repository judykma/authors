var Author = require('../models/author.js')

module.exports = {
    index: (req, res) => {
        console.log("SHOWING ALL")
        Author.find({})
            .then(authors => res.json({data:authors}))
            .catch(err =>{ 
                console.log("Error showing all!", err), 
                res.json(err)
            })
    },
    show_one: (req, res) => {
        console.log("SHOWING ONE")
        Author.findOne({_id: req.params.id})
            .then(author => {
                console.log("This is CL the author object:", author);
                res.json(author);
            })
            .catch(err => {
                console.log("Error showing one!", err),
                res.json(err)
            });
    },
    create: (req, res) => {
        console.log("CREATING")
        author = new Author();
        author.name = req.body.name;
        // author.quote = req.body.quote;
        author.save()
            .then(newAuthor => {
                console.log('New DB entry: ', newAuthor), 
                res.json(newAuthor)
            })
            .catch(err => {
                console.log("Error creating one!", err);
                res.json(err);
            });
    },
    update: (req, res) => {
        console.log("UPDATING")
        Author.findOne({_id: req.params.id})
            .then(updatedAuthor => {
                updatedAuthor.name = req.body.name;
                // updatedAuthor.quote = req.body.quote,
                return updatedAuthor.save();
            })
                .then(updatedAuthor =>{
                    res.json(updatedAuthor)
                })
                .catch(err => {
                    console.log("Error updating one"),
                    res.json(err)
                })
            .catch(err => {
                console.log("Error finding one to update"),
                res.json(err)
            })
    },
    destroy: (req, res) => {
        console.log("DELETING")
        Author.deleteOne({_id: req.params.id})
            .then(deletedAuthor => {
                res.json({data: deletedAuthor})
                console.log(deletedAuthor[name] + " has been removed.")
            })
            .catch(err => {
                console.log("Error deleting one"),
                res.json(err)
            })
    },
};
