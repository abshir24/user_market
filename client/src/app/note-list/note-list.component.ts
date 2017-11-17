import { Component, OnInit } from '@angular/core';
import { NoteService } from 'app/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  notes = []
  
  constructor(private _service:NoteService){
      this._service.retrieveAll((data)=>{
        this.notes = data
      })
      this._service.notesObservable.subscribe((data)=>{
        console.log("component list", data)
        this.notes = data
      })
   }

  ngOnInit() {
  }


}
