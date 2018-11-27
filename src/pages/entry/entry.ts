import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';

/**
 * Generated class for the EntryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
	selector: 'page-entry',
	templateUrl: 'entry.html',
})
export class EntryPage {
	item:any;
	tags:any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public launchnavigator: LaunchNavigator) {
		this.item = navParams.get('entry');
	}

	ionViewDidLoad() {
		console.log('8218 EntryPage');
		this.tags = this.item[14].split(',');
		this.tags.splice(this.tags.length-1, 1);
	}

	openNav() {
		console.log('8218 OpenNav');
		this.launchnavigator.navigate([this.item[6], this.item[7]]);//6 & 7
	}
}
