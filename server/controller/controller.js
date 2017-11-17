var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');
module.exports = {
  create: function(req, res){
    var quote = new Quote(req.body);
    quote.save(function(err,quote) {
      if(err){
        console.log("something went wrong");
      } else{
        Quote.find({}, function(err,quotes){
          if(err){
            console.log("Error retrieving all quotes")
            res.json(false)
          }else{
            res.json(quotes)
          }
        })
      }
    })
  },
  allNotes: (req,res) =>{
    Quote.find({}, function(err,quotes){
      console.log("Nice",quotes)
      if(err){
        console.log("Error retrieving all quotes")
        res.json(false)
      }else{
        res.json(quotes)
      }
    })
  }
}
