import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from 'src/app/interfaces/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent {
  @Input() notes!: Note[];
  @Output() emitDel: EventEmitter<Note> = new EventEmitter();
  @Output() emitDisplay: EventEmitter<Note> = new EventEmitter();

  constructor(private noteService: NoteService) { }

  displayNote(selectedNote: Note) {
    this.emitDisplay.emit(selectedNote);
  }

  deleteNote(title: string) {
    this.noteService.deleteNote(title);
    this.emitDel.emit();
  }
}
