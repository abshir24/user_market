import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class BikeService {
  bikes = []
  user;
  constructor(private http:Http,private _router:Router) { }


  register(user,callback){
    console.log(user)
    return this.http.post('/register',user)
    .subscribe((res)=>{
        if(!res.json()){
          callback("Email already exists try a new one")
        }else{
          callback(res.json())
        }
    })
  }

  login(user, callback){
    return this.http.post('/login',user)
    .subscribe((res)=>{
        if(!res.json()){
          callback("Wrong email password combo")
        }else{
          console.log("successful login")
          this.user = res.json()
          callback(res.json())
        }
    })
  }

  addBike(bike, callback){
    return this.http.post('/addbike',bike)
    .subscribe((res)=>{
      console.log("data from back-end", res)
      callback(res.json())
    })
  
  }

  myBikes(callback){
    return this.http.get('/mybikes')
    .subscribe((res)=>{
      console.log("respsone my bikes service", res.json())
      callback(res.json())
    })
  
  }

  update(bike,id){
    return this.http.post('/updatebike/'+id, bike)
    .subscribe((res)=>{
      console.log("res from update",res.json())
      this._router.navigate(['/listings']);
    })
  }

  deleteBike(id,callback){
    return this.http.get('/deletebike/'+id)
    .subscribe((res)=>{
      console.log("res from delete bike",res.json())
      callback(res.json())
    })
  }

  allBikes(callback){
    return this.http.get('/allbikes')
    .subscribe((res)=>{
      console.log("all bikes",res.json())
      callback(res.json())
    })
  }

  retrieveUser(id,callback){
    return this.http.get('/user/'+id)
    .subscribe((res)=>{
      console.log("user", res.json())
      callback(res.json())
    })
  }

  logout(){
    
  }

}
