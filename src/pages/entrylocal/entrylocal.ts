import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { Storage } from '@ionic/storage';

import {SearchPage} from '../search/search';

@Component({
	selector: 'page-entrylocal',
	templateUrl: 'entrylocal.html',
})
export class EntrylocalPage {
	item:any;
	page:any;
	tags:any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public launchnavigator: LaunchNavigator, private storage: Storage) {
		this.item = navParams.get('entry');
		this.page = navParams.get('page');
	}

	ionViewDidLoad() {
		console.log('8218 EntryPage');
		this.tags = this.item[14].split(',');
		this.tags.splice(this.tags.length-1, 1);
	}

	ionViewWillLeave() {
		console.log('8218 Will Leave');
		this.navCtrl.pop();
	}

	openNav() {
		console.log('8218 OpenNav');
		this.launchnavigator.navigate([this.item[6], this.item[7]]);//6 & 7
	}

	searchTag(event:any) {
		console.log('8218 Event: ' + event);
		this.storage.set('searchtag', event);
		if(this.page == "home") {
			this.navCtrl.parent.select(0);
			//
		} else {
		this.navCtrl.getPrevious().data.searchterm = '#' + event;
			this.navCtrl.pop();
		}
	}
}
