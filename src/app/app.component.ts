import { Component, OnInit } from '@angular/core';
import { Note } from './interfaces/note';
import { NoteService } from './services/note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-assessment-practice';
  data!: Note[];
  saved: boolean = false;

  selectedNote: Note = { title: '', content: '' };
  originalNote: Note = this.selectedNote;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.refresh();
  }

  onAddNote() {
    this.selectedNote = { title: '', content: '' };
    this.originalNote = {...this.selectedNote};
  }

  onSelectNote(note: Note) {
    this.selectedNote = {...note};
    this.originalNote = {...note};
  }

  onSave(newNote: Note) {
    if (this.originalNote.title !== '' || this.originalNote.content !== '') this.noteService.deleteNote(this.originalNote.title);

    this.noteService.addNote(newNote);

    this.originalNote = newNote;
    this.selectedNote = newNote;
    this.saved = true;
    this.refresh();
  }

  onRevert(note: Note) {
    this.selectedNote = {...this.originalNote};
  }

  refresh() {
    this.data = this.noteService.getNotes();
  }
}
