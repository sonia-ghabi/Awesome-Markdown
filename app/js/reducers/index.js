import notesStorage from '../lib/notesStorage.js'
import Immutable from 'immutable';
import Note from '../models/Note.js'
import { combineReducers } from 'redux';
import {
  NOTE_CREATE, NOTE_UPDATE, NOTE_DELETE
} from '../actions';

/* State Structure:
{
  notes: Map({
    1: {
      id: 1,
      date: timestamp,
      content: ...,
    }
  })
}
*/

function notes (state = Immutable.Map(), action) {
  switch (action.type) {
    case NOTE_CREATE:
    case NOTE_UPDATE:
      notesStorage.saveNote(action.note);
      return state.set(action.note.uid, action.note);
    case NOTE_DELETE:
      notesStorage.removeNote(action.uid);
      return state.delete(action.uid);
    default:
      return state;
  }
}
