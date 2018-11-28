import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('8218 IntroPage');
  }
	  goToHome(){
		      this.navCtrl.setRoot(HomePage);
		    }


}
