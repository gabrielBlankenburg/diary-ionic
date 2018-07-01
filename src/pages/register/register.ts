import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

import { Connection } from '../../helper/connection';

import { NotesPage } from '../notes/notes';

import { ToastController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-register',
	templateUrl: 'register.html',
	styleUrls: ['/register.scss'],
})
export class RegisterPage {
	private fields;

	constructor(public navCtrl: NavController, public navParams: NavParams, public nav: Nav, private toastCtrl: ToastController) {
		this.fields = {
			'name': '',
			'email': '',
			'password': '',
		}
	}

	private onSubmit(evt:Event) {
		evt.stopPropagation();

		const onSuccess = json => {
			this.nav.setRoot(NotesPage);

			let toast = this.toastCtrl.create({
				message: 'Logged in',
				duration: 3000,
				position: 'bottom'
			});

			toast.present();
		}
		
		Connection.register(this.fields.name, this.fields.email, this.fields.password, onSuccess);
	}
}
