import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Connection } from '../../helper/connection';

/**
 * Generated class for the NotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-note',
	templateUrl: 'note.html',
	styleUrls: ['/note.scss'],
})
export class NotePage {

	private note;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.note = {
			'title': '',
			'content': '',
			'created_at': '',
			'label': ''
		}

		let id = this.navParams.get('id');

		Connection.getNote(id, json => {
			console.log(json)
			this.note = json;
		});
	}

}
