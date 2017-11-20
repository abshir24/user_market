import { Component, OnInit } from '@angular/core';
import { BikeService } from 'app/bike.service';
import { Bike } from 'app/bike';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  bike = new Bike() 
  bikes = []
  constructor(private _service:BikeService) { 
    this._service.myBikes((data)=>{
      console.log("constructor component data ", data)
      this.bikes = data
    })
  }

  ngOnInit(){
  }

  addBike(){
    this._service.addBike(this.bike, (data)=>{
      this.bikes = data
    })
    this.bike=new Bike()
  }

  remove(id){
    this._service.deleteBike(id,(data)=>{
      this.bikes=data
    })
  }

}
