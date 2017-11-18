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
      this.bikes = data
    })
  }

  ngOnInit(){
  }

  addBike(){
    this._service.addBike(this.bike, (data)=>{
      this.bikes = data
    })
  }

  update(){

  }

}
