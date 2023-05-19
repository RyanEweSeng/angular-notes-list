import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Note } from 'src/app/interfaces/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
  @Input() note!: Note;
  @Output() emitSave: EventEmitter<Note> = new EventEmitter();

  originalTitle!: string;
  originalContent!: string;

  title!: string;
  content!: string;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.title = this.note.title;
    this.content = this.note.content;
    this.storeOriginal();
  }

  storeOriginal() {
    this.originalTitle = this.note.title;
    this.originalContent = this.note.content;
  }

  revert() {
    this.title = this.originalTitle;
    this.content = this.originalContent;
  }

  saveNote() {
    console.log(this.note);
    const newNote: Note = {
      title: this.title,
      content: this.content
    }

    if (this.originalTitle !== '' || this.originalContent !== '') this.noteService.deleteNote(this.originalTitle);

    this.originalTitle = this.title;
    this.originalContent = this.content;

    this.noteService.addNote(newNote);
    this.emitSave.emit(newNote);
  }
}
