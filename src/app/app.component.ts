import { Component, ViewChild } from '@angular/core';
import { LoadingController, App, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
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

	items: any =[];
	parsedData: any =[];
	loader:any;
	filterdata:any =[];
	searchTerm:any; 
	show: number = 0;	
	loaded: number = 0;
	entfernung:any =[];
	oldlat:any;
	oldlong:any;
	oldsearchterm:any;
	clickeditem:any;
	tags:any;

	pages: Array<{title: string, component: any}>;

	constructor( public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public storage: Storage, public app: App, private file: File, public loading: LoadingController ) {
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

	async setoldloc() {
		this.oldlat = await this.storage.get('lat');
		this.oldlong = await this.storage.get('lng');
	}

	searchtag(tag:any) {
		this.searchTerm = "#" + tag;
		this.clickeditem = undefined;
		this.setFilteredItems();
	}

	setFilteredItems() {
		this.setoldloc();
		this.loader = this.loading.create({
			content: 'Durchsuche...',
		});

		this.loader.present().then(() => {
			let path = null;
			console.log('8218 SearchTerm: ' + this.searchTerm);
			if(this.searchTerm !== undefined){
				if (this.platform.is('ios')) {
					path = this.file.dataDirectory + 'data/';
				} else if (this.platform.is('android')) {
					path = this.file.externalDataDirectory + 'data/';
				}

				this.file.readAsText(path, 'data.csv') 
					.then(fileStr => {
						console.log('8218 AllData Search Start Parsing...')
						this.parsedData = papa.parse(fileStr).data;
						this.parsedData.splice(0, 1);

						console.log('8218 AllData Search ready');
						console.log('8218 AllData Filtering...');

						let tag = 0;

						this.storage.set('searchterm', this.searchTerm);

						if(this.searchTerm.includes('#')){
							this.searchTerm = this.searchTerm.replace('#', '');
							tag = 1;
							console.log('8218 SearchTerm: ' + this.searchTerm);
						}

						this.filterdata = this.parsedData.filter((item) => {
							if(item[4] !== undefined){
								if(tag === 1) {
									if(item[14].toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1) {
										item[30] = this.distance(this.oldlat, this.oldlong, item[6], item[7], "K").toFixed(2);
										return item[14].toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
									}
								} else {
									if(item[10].toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1) {
										item[30] = this.distance(this.oldlat, this.oldlong, item[6], item[7], "K").toFixed(2); //Ortschaft durchsuchen
										return item[10].toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
									} else if(item[14].toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1) {
										item[30] = this.distance(this.oldlat, this.oldlong, item[6], item[7], "K").toFixed(2); //Tag durchsuchen
										return item[14].toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
									} else if(item[4].toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1) {
										item[30] = this.distance(this.oldlat, this.oldlong, item[6], item[7], "K").toFixed(2);
										this.entfernung.push((this.distance(this.oldlat, this.oldlong, item[6], item[7], "K")).toFixed(2)); //Titel durchsuchen
										return item[4].toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
									}
								}
							} else {
								console.log('8218 UNDEFINED');
							}
						});

						this.filterdata.sort((data1, data2) => {
							if (data1[30] < data2[30]) return -1;
							if (data1[30] > data2[30]) return 1;
							return 0;
						});

						if (tag === 1) {
							this.searchTerm = '#' + this.searchTerm;
						}
						console.log('8218 AllData Ready!');
						this.loader.dismiss();
						this.show = 1;


					}).catch((err)=> {
						console.log('8218 Addmarker Err: ' + JSON.stringify(err));
						this.loader.dismiss();
					});

			}

			this.loaded = 1;
		});
	}

	distance(lat1:number, lon1:number, lat2:number, lon2:number, unit:any) {
		if ((lat1 == lat2) && (lon1 == lon2)) {
			return 0;
		}
		else {
			var radlat1 = Math.PI * lat1/180;
			var radlat2 = Math.PI * lat2/180;
			var theta = lon1-lon2;
			var radtheta = Math.PI * theta/180;
			var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
			if (dist > 1) {
				dist = 1;
			}
			dist = Math.acos(dist);
			dist = dist * 180/Math.PI;
			dist = dist * 60 * 1.1515;
			if (unit=="K") { dist = dist * 1.609344 }
			if (unit=="N") { dist = dist * 0.8684 }
			return dist;
		}
	}

	async entryfromhome() {
		var entry = await this.storage.get('entryhome');
		if (entry!== null) {
			this.storage.set('entryhome', undefined);
			this.clickeditem = entry;
			this.tags = entry[14].split(',');
			this.tags.splice(this.tags.length-1, 1);
		}
	}

	goback() {
		console.log('8218 Back was pressed');
		this.clickeditem = undefined;
	}

	showitem(item:any) {
		this.clickeditem = item;
                this.tags = item[14].split(',');
		this.tags.splice(this.tags.length-1, 1);
		this.storage.set('entrysidebar', item);
	}

	openSearchPage() {
		console.log('8218 OpenSearchPage');
		this.nav.setRoot(SearchPage);
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
			setInterval(() => this.entryfromhome(), 250);
		});
	}

	openPage(page) {
		this.nav.setRoot(page.component);
	}


}
