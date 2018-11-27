import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-terms',
  templateUrl: 'terms.html'
})
export class TermsPage {

  public version: string = '0.1';

  constructor(public navCtrl: NavController, private platform: Platform) { }

	ionViewDidEnter() {
	}

}
