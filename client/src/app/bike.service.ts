import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BikeService {
  bikes = []
  constructor(private http:Http) { }


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
          callback(res.json())
        }
    })
  }

  addBike(bike, callback){
    return this.http.post('/addbike',bike)
    .subscribe((res)=>{
      console.log(res.json())
      callback(res.json())
    })
  }

  myBikes(callback){
    return this.http.get('/mybikes')
    .subscribe((res)=>{
      console.log(res.json())
      callback(res.json())
    })
  }

  deleteBike(id){
    return this.http.get('/deletebike'+id)
    .subscribe()
  }

  logout(){
    
  }

}
