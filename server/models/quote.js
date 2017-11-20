// require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create the schema
var UserSchema = new mongoose.Schema({
  firstname:String,
  lastname:String,
  email:String,
  password:String,
  bikes: [{type: Schema.Types.ObjectId, ref: 'Bike'}]
},{timestamps:true})
// register the schema as a model
var User = mongoose.model('User', UserSchema);



// create the schema
var BikeSchema = new mongoose.Schema({
  title:String,
  price:Number,
  location:String,
  description:String,
  logged:Boolean,
  _user: {type: Schema.Types.ObjectId, ref: 'User'}
},{timestamps:true})
// register the schema as a model
var Bike = mongoose.model('Bike', BikeSchema);
