import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TermsPage } from '../terms/terms';

@Component({
  selector: 'page-aboutus',
  templateUrl: 'aboutus.html'
})
export class AboutusPage {

  constructor(public navCtrl: NavController) {

  }
  
	toTerms() {
		console.log('8218 toTerms');
		this.navCtrl.push(TermsPage);
	}

}
