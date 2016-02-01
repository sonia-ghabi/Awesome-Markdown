import notesStorage from '../lib/notesStorage.js'
import Note from '../models/Note.js'

export const NOTE_CREATE = 'NOTE_CREATE';
export const NOTE_UPDATE = 'NOTE_UPDATE';
export const NOTE_DELETE = 'NOTE_DELETE';

export function getNotes () {
  return dispatch => {
    notesStorage.getNotes()
      .then(rawNotes => {
        for (let rawNote of Object.values(rawNotes)) {
          let note = Note.fromData(rawNote);
          dispatch(createNote(note));
        }
      });
  }
}

export function updateNote (note) {
  return dispatch => {
    dispatch({
      type: NOTE_UPDATE,
      note
    });
  }
}

export function createNote (note) {
  return dispatch => {
    dispatch({
      type: NOTE_CREATE,
      note
    });
  }
}

export function removeNote (uid) {
  return dispatch => {
    dispatch({
      type: NOTE_DELETE,
      uid
    });
  }
}
