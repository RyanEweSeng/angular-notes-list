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
  selectedNote!: Note;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.noteService.addNote({ title: 'first', content: 'first' });
    this.noteService.addNote({ title: 'second', content: 'second' });
    this.noteService.addNote({ title: 'third', content: 'third' });
    this.refresh();
  }

  onAddNote() {
    this.selectedNote = { title: '', content: '' };
    console.log('add note')
  }

  onSelectNote(note: Note) {
    this.selectedNote = note;
    console.log('select note')
  }

  refresh() {
    this.data = this.noteService.getNotes();
  }
}
