import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Connection } from '../../helper/connection';

@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
  styleUrls: ['/notes.scss'],
})
export class NotesPage {
	private notes;

	constructor(public navCtrl: NavController) {
		this.getNotes();
	}

	private getNotes() {
		const cb = json => {
			this.notes = json;
		}
		Connection.getNotes(cb);
	}
}
