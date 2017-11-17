import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class NoteService {
  notesObservable = new BehaviorSubject([]);
  notes = []
  
  constructor(private http:Http) { }

  addNote(note){
    console.log("service",note)
    return this.http.post('/create',note)
    .subscribe((response)=>{
      console.log("response",response.json());
      this.notesObservable.next(response.json())
    })
  }
  
  retrieveAll(callback){
    return this.http.get('/all')
    .subscribe((response)=>{
      console.log("All Data",response.json());
      callback(response.json())
    })
  }

  


}
