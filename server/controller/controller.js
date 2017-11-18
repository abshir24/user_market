var mongoose = require('mongoose');
var User = mongoose.model('User');
var Bike = mongoose.model('Bike')
module.exports = {
  register: (req,res) => {
    console.log(req.body.email)
    User.findOne({email:req.body.email},(err,user)=>{
      if(!user){
        user = new User(req.body)
        user.save((err,user)=>{
          if(err){
            console.log("user didn't save")
          }else{
            req.session.user = user._id
            res.json(user)
          }
        })
      }else{
        res.json(false)
      }
    })
  },
  login:(req,res)=>{
    User.findOne({email:req.body.emaill},(err,user)=>{
      if(!user){
        res.json(false)
      }else{
        if(req.body.passwordl == user.password){
          req.session.user = user._id
          res.json(true)
        }else{
          res.json(false)
        }
      }
    })
  },

  addbike:(req,res)=>{
      User.findOne({_id: req.session.user}, function(err, user){
        var bike = new Bike(req.body);
        bike._user = user._id;
        bike.save(function(err,bike){
            user.bikes.push(bike);
            user.save(function(err){
                  if(err) {
                      console.log('Error');
                  } else {
                      Bike.find({_user:req.session.user},(err,bikes)=>{
                        res.json(bikes)
                      })
                  }
              });
        });
    });
  },
  mybikes:(req,res)=>{
    Bike.find({_user:req.session.user},(err,bikes)=>{
      if(err){
        console.log("something went wrong")
      }else{
        res.json(bikes)
      }
    })
  }
}
