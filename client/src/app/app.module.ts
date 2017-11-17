import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteService } from 'app/note.service';
import { NoteCreateComponent } from 'app/note-create/note-create.component';
import { NoteListComponent } from 'app/note-list/note-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteCreateComponent,
    NoteListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
