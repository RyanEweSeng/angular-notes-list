import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from 'src/app/interfaces/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent {
  @Input() note!: Note;
  @Output() emitSave: EventEmitter<Note> = new EventEmitter();
  @Output() emitRevert: EventEmitter<Note> = new EventEmitter();

  constructor(private noteService: NoteService) { }

  revert() {
    this.emitRevert.emit(this.note);
  }

  saveNote() {
    const newNote: Note = {
      title: this.note.title,
      content: this.note.content
    }
    this.emitSave.emit(newNote);
  }
}
