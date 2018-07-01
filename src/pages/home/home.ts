import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
})
export class HomePage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.navCtrl.swipeBackEnabled = false;
	}

	public login() {
		this.navCtrl.push(LoginPage);
	}

	public register() {
		this.navCtrl.push(RegisterPage);
	}

}
