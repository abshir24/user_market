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
          res.json(user)
        }else{
          res.json(false)
        }
      }
    })
  },

  addbike:(req,res)=>{
    console.log("add bike", req.session.user)
    User.findOne({_id:req.session.user},function(err,foundUser){
      var bike = new Bike(req.body)
      bike._user = foundUser._id
      bike.logged = false

      bike.save(function(err,bike){
        foundUser.bikes.push(bike)
        foundUser.save(function(err,user){
          if(err){
            console.log("bike did not save to user class")
          } else{
            Bike.find({_user:user._id}, function(err,bikes){
              if(err){
                console.log("could not find bikes")
              }else{
                res.json(bikes)
              }
            })
          }
        })
      })
      
    })
  },
  mybikes:(req,res)=>{
    Bike.find({_user:req.session.user},(err,bikes)=>{
      if(err){
        console.log("my bikes error")
      }else{
        res.json(bikes)
      }
    })
  },
  update:(req,res)=>{
    Bike.findOne({_id:req.params.id},(err,bike)=>{
      bike.price = req.body.price
      bike.location = req.body.location
      bike.description = req.body.description
      bike.title = req.body.title
      bike.save((err,bike)=>{
        if(err){
          console.log("error updating bikes")
        }else{
          console.log("updated bike",bike)
          Bike.find({_user:req.session.user},(err,bikes)=>{
            if(err){
              console.log("could not retrieve bikes")
            }else{
              res.json(bikes)
            }
          })
        }
      })
    })
  },
  delete:(req,res)=>{
    console.log("delete",req.params.id)
    Bike.remove({_id: req.params.id}, function(err){
      if(err){
        console.log("error removing bikes")
      }else{
        Bike.find({_user:req.session.user},(err,bikes)=>{
          if(err){
            console.log("could not retrieve all bikes")
          }else{
            res.json(bikes)
          }
        })
      }
    })
  },
  allbikes:(req,res)=>{
    console.log("allbikes")

    Bike.find({},(err,bikes)=>{
      if(err){
        console.log("err retrieving all bikes")
      }else{
        for(var i = 0;i<bikes.length;i++){
          if(bikes[i]._user == req.session.user){
            console.log("inside")
            bikes[i].logged = true
          }
        }
        res.json(bikes)
      }
    })
  },
  user:(req,res)=>{
    User.findOne({_id:req.params.id},(err,bike)=>{
      if(err){
        console.log("error finding user")
      }else{
        res.json(bike)
      }
    })
  },
  logout: function(req,res){
    console.log("hitting logout controller")
    req.session.destroy(function(err){
        if(err){
            console.log(err)
            res.json(err)
        }else{
          res.json(true)
        }
    })
}

}
