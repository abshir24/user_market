import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BikeService } from 'app/bike.service';
import { Bike } from 'app/bike';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  bike = new Bike()
  id;
  constructor(private _router:Router,
    private _route:ActivatedRoute,
    private _service:BikeService
  ) { 
    this._route.paramMap.subscribe( params => {
      console.log("component id", params.get('id'));
      this.id = params.get('id')
    })
  }

  ngOnInit() {
  }

  update(){
    this._service.update(this.bike,this.id)
  }

}
