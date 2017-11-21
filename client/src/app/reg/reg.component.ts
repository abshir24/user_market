import { Component, OnInit } from '@angular/core';
import { User } from 'app/user';
import { BikeService } from 'app/bike.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  user = new User();
  logerror = '';
  regerror = '';
  bike;
  constructor(private _service:BikeService, private _router:Router) {
    this._service.allBikes((data)=>{
      console.log("bikes comp",data)
      if(data.length == 1){
        this.bike=data[0]
      }else{
        const randNum = (Math.floor(Math.random() * data.length) ) + 1;
        this.bike = data[randNum]
      }
    })
  }

  ngOnInit() {
  }

  login(){
    this._service.login(this.user, (data)=>{
      if(typeof(data) == 'string'){
        this.logerror=data
      }else{
        this._router.navigate(['/dashboard']);
      }
      this.user=new User()
    })
  }
  
  register(){
    this._service.register(this.user,(data)=>{
      if(typeof(data) == 'string'){
        this.regerror=data
      }else{
        this._router.navigate(['/dashboard']);
      }
      this.user=new User()
    })
  }

}
