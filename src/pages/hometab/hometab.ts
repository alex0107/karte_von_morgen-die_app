import { Component } from '@angular/core';
import { NavParams, App, IonicPage, NavController } from 'ionic-angular';

import { SearchlocalPage } from '../searchlocal/searchlocal';
import { EntrylocalPage } from '../entrylocal/entrylocal';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-hometab',
  templateUrl: 'hometab.html'
})
export class HometabPage {

	sucheRoot = SearchlocalPage;
	eintragRoot = EntrylocalPage;
	zurKarteRoot = HomePage;

	tabindex: number = 2;

	constructor(public navCtrl: NavController, public navParams: NavParams) 
	{
		this.tabindex = navParams.data.tabIndex || 2;
	}

}
