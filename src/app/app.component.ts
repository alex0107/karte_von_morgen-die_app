import { Component, ViewChild } from '@angular/core';
import { LoadingController, App, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { HometabPage } from '../pages/hometab/hometab';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { TermsPage } from '../pages/terms/terms';
import { SearchPage } from '../pages/search/search';
import { IntroPage } from '../pages/intro/intro';

import { Storage } from '@ionic/storage';
import * as papa from 'papaparse';
import { File } from '@ionic-native/file';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;
	rootPage:any;

	pages: Array<{title: string, component: any}>;

	constructor( public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public storage: Storage, public app: App, private file: File, public loading: LoadingController ) {
		if (this.platform.is('android')) {
			this.statusBar.backgroundColorByHexString("#33000000");
		}
		this.initializeApp();
		this.pages = [
			{ title: 'zur Karte', component: HometabPage },
			{ title: 'Globale Suche', component: SearchPage },
			{ title: 'Über uns', component: AboutusPage }
		];

	}

	openInfoPage() {
		this.nav.setRoot(TermsPage);
		console.log('8218 OpenInfoPage');
	}

	getstorage() {
		this.storage.set('searchtermforhome', undefined);
		this.storage.get('introShown').then((result) => {

			console.log('8218 IntroShown ' + result);
			if(result) {
				console.log('8218 Setting HomePage...');
				this.rootPage = HometabPage;
			} else {
				console.log('8218 Setting IntroPage...');
				this.rootPage = IntroPage;
				this.storage.set('introShown', true);
			}
		});
	}
	initializeApp() {
		this.platform.ready().then(() => {
			this.getstorage();
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	openPage(page) {
		this.nav.setRoot(page.component);
	}


}
