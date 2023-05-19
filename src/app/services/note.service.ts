import { Injectable } from '@angular/core';
import { Note } from '../interfaces/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  constructor() { }

  getNotes(): Note[] {
    return Object.values(localStorage).map(item => JSON.parse(item));
  }
  
  addNote(note: Note) {
    localStorage.setItem(note.title, JSON.stringify(note));
  }

  deleteNote(key: string) {
    localStorage.removeItem(key);
  }

  getNote(key: string) {
    localStorage.getItem(key);
  }
}
