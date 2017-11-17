import { Component, OnInit } from '@angular/core';
import { NoteService } from 'app/note.service';
import { BehaviorSubject } from 'rxjs';
import { Http } from '@angular/http';
import { Note } from 'app/note';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {
  productsObservable = new BehaviorSubject(null);
  notes = []
  newNote = new Note()

  constructor(private _service:NoteService) { }

  ngOnInit() {
  }

  addNote(){
    this._service.addNote(this.newNote)
    this.newNote = new Note()
  }
  
}
