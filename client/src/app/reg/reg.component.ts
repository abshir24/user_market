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
  constructor(private _service:BikeService, private _router:Router) { }

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
