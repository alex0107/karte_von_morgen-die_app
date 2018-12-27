import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, NavParams, Content } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { Storage } from '@ionic/storage';

import {SearchPage} from '../search/search';

@Component({
	selector: 'page-entrylocal',
	templateUrl: 'entrylocal.html',
})
export class EntrylocalPage {
	@ViewChild(Content) content: Content;
	item:any = null;
	page:any;
	tags:any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public launchnavigator: LaunchNavigator, public storage: Storage, private platform: Platform) {
	}

	async ionViewWillEnter() {
			console.log('8218 Will Enter');
			var storeditem = this.storage.get('entrytab');
			if (storeditem !== null) {
				this.storage.set('entrytab', undefined);
				this.item = storeditem;
				console.log('8218 EntryPage');
				console.log('8218 Item: ' + this.item); 
				this.tags = this.item[14].split(',');
				this.tags.splice(this.tags.length-1, 1);
			}
	}

	openNav() {
		console.log('8218 OpenNav');
		this.launchnavigator.navigate([this.item[6], this.item[7]]);//6 & 7
	}

	searchTag(event:any) {
		console.log('8218 Event: ' + event);
		this.storage.set('searchtag', event);
		this.navCtrl.parent.select(0);
	}
}
