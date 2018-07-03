import { Component } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';

import { Connection } from '../../helper/connection';

import { NotePage } from '../note/note';

@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
  styleUrls: ['/notes.scss'],
})
export class NotesPage {
	private notes;

	constructor(public navCtrl: NavController, public nav: Nav) {
		this.getNotes();
	}

	private getNotes() {
		const cb = json => {
			this.notes = json;
		}
		Connection.getNotes(cb);
	}

	private openNote(id) {
		this.nav.setRoot(NotePage, {id: id});
	}
}
