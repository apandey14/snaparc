var mongoose = require('mongoose');

//Genre Schema

var bookSchema = mongoose.Schema({
    title:{
            type:String,
            required: true
    },
    genre:{
        type:String,
            required: true
    },
    description:{
        type:String           
    },
    author:{
          type:String,
            required: true
        },
     publisher:{
          type:String            
        }, 
pages:{
          type:String            
        }, 
image_url:{
          type:String            
        }, 
   buy_url:{
          type:String            
        }, 

    create_date:{
        type: Date,
        default: Date.now
    }
});

var Book = module.exports = mongoose.model('Book', bookSchema);

//Get books

module.exports.getBooks = function(callback, limit)
{
     Book.find(callback).limit(limit);
}

// get book by id
module.exports.getBookById = function(id, callback)
{
     Book.findById(id, callback);
}

//Add books

module.exports.addBooks = function(book, callback)
{
     Book.create(book, callback);
}

// Update books

module.exports.updateBook = function(id, book, options, callback)
{
    var query = {_id: id};
    var update = {
        title: book.title,
        genre: book.genre,
        description: book.description,
        author: book.author
    }
     Book.findOneAndUpdate(query, update, options, callback);
}

//Delete books
module.exports.removeBook = function(id, callback)
{
    var query = {_id: id};
     Book.remove(query, callback);
}