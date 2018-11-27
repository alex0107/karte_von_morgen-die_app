import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CardPage } from '../pages/card/card';
import { HomePage } from '../pages/home/home';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { TermsPage } from '../pages/terms/terms';
import { SearchPage } from '../pages/search/search';
import { IntroPage } from '../pages/intro/intro';

import { Storage } from '@ionic/storage';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;
	rootPage:any;

	pages: Array<{title: string, component: any}>;

	constructor( public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public storage: Storage ) {
		if (this.platform.is('android')) {
			this.statusBar.backgroundColorByHexString("#33000000");
		}
		this.initializeApp();
		this.pages = [
			{ title: 'zur Karte', component: HomePage },
			{ title: 'Suche', component: SearchPage },
			{ title: 'Über uns', component: AboutusPage }
		];

	}

	openInfoPage() {
		this.nav.setRoot(TermsPage);
		console.log('8218 OpenInfoPage');
	}

	getstorage() {
		this.storage.get('introShown').then((result) => {

			console.log('8218 IntroShown ' + result);

			if(result) {
				console.log('8218 Setting HomePage...');
				this.rootPage = HomePage;
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
		// Reset the content nav to have just this page
		// we wouldn't want the back button to show in this scenario
		this.nav.setRoot(page.component);
	}


}
