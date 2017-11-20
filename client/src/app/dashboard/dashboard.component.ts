import { Component, OnInit } from '@angular/core';
import { BikeService } from 'app/bike.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  bikes = []
  user;
  constructor(private _service:BikeService) { 
    this._service.allBikes((data)=>{
      console.log("constructor component data ", data)
      this.bikes = data
    })
  }

  ngOnInit() {
  }

  contact(id){
    this._service.retrieveUser(id,(data)=>{
      this.user=data
    })

    alert("Name: " + this.user.firstname + " Email: " + this.user.email)
  }

  remove(id){
    this._service.deleteBike(id,(data)=>{
      this.bikes=data
    })
  }

}
