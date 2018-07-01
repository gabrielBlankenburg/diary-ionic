import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Platform } from 'ionic-angular';

import { HTTP } from '@ionic-native/http';

import { Connection } from '../../helper/connection';

import { ToastController } from 'ionic-angular';

@Component({
	selector: 'new-note',
	templateUrl: 'newNote.html'
})
export class NewNotePage {

	private fields;

	private colors;

	constructor(public navCtrl: NavController, public navParams: NavParams, private http: HTTP, private platform: Platform, private toastCtrl: ToastController) {
		this.colors = [
			{
				'name': 'red',
				'value': '#d32f2f',
			},
			{
				'name': 'green',
				'value': '#aed581',
			},
			{
				'name': 'blue',
				'value': '#2196f3',
			},
			{
				'name': 'grey',
				'value': '#d3d3d3',
			},
		];

		this.fields = {
			'title': '',
			'label': this.colors[0].value,
			'content': '',
		};
	}

	private onSubmit(evt:Event) {
		evt.stopPropagation();
		
		const onSuccess = json => {
			let toast = this.toastCtrl.create({
				message: json.response,
				duration: 3000,
				position: 'bottom'
			});

			toast.present();

			this.fields.title = '';
			this.fields.label = '';
			this.fields.content = '';
		};

		Connection.postNote(this.fields.title, 
							this.fields.label, 
							this.fields.content, onSuccess);
	}
}
