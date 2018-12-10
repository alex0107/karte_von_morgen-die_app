import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';

import {SearchPage} from '../search/search';

@Component({
	selector: 'page-entry',
	templateUrl: 'entry.html',
})
export class EntryPage {
	item:any;
	page:any;
	tags:any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public launchnavigator: LaunchNavigator) {
		this.item = navParams.get('entry');
		this.page = navParams.get('page');
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

	searchTag(event:any) {
		console.log('8218 Event: ' + event);
		if(this.page == "home") {
			this.navCtrl.setRoot(SearchPage, {searchterm: '#' + event});
		} else {
		this.navCtrl.getPrevious().data.searchterm = '#' + event;
			this.navCtrl.pop();
		}
	}
}
