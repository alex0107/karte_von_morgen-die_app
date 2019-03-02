import { Component,  ViewChild, ElementRef } from '@angular/core';
import { NavController, App, Platform, LoadingController, NavParams } from 'ionic-angular';
import leaflet from 'leaflet';
import * as papa from 'papaparse';
import { File } from '@ionic-native/file';
import { Storage } from '@ionic/storage';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';

import { HomePage } from '../home/home';
import { EntrylocalPage } from '../entrylocal/entrylocal';
import { HometabPage } from '../hometab/hometab';
import { AboutusPage } from '../aboutus/aboutus';

@Component({
	selector: 'page-searchlocal',
	templateUrl: 'searchlocal.html'
})
export class SearchlocalPage {
	@ViewChild('search') search : any;

	items: any =[];
	parsedData: any =[];
	loader:any;
	filterdata:any =[];
	globaldata:any =[];
	searchTerm:any;
	show: number = 0;	
	loaded: number = 0;
	entfernung:any =[];
	oldlat:any;
	oldlong:any;
	oldsearchterm:any;
	city:any =[];

	constructor(public navCtrl: NavController, private file: File, private platform: Platform, public storage: Storage, public loading: LoadingController, public navParams: NavParams, public app: App, public nativeGeocoder: NativeGeocoder)
	{
	}

	async setoldloc() {
		this.oldlat = await this.storage.get('lat');
		this.oldlong = await this.storage.get('lng');
	}

	async ionViewWillEnter() {
		this.oldsearchterm = await this.storage.get('searchterm');
		var searchtag = await this.storage.get('searchtag');

		this.search.setFocus();
		
		if(searchtag !== null) {
			this.searchTerm = searchtag;
		}

		console.log('8218 Old: ' + this.oldsearchterm + ' New: ' + this.searchTerm);

		this.storage.set('searchtermforhome', this.searchTerm);
		
		if(this.searchTerm !== undefined) {
			if(this.searchTerm !== this.oldsearchterm) {
				this.setFilteredItems();
				this.storage.set('searchtag', undefined);
			}
		}
	}

	openInfoPage() {
		console.log('8218 OpenInfoPage');
		this.navCtrl.push(AboutusPage);
	}

	setlocation(ort: any) {
		this.storage.set('lat', ort[1]);
		this.storage.set('lng', ort[2]);
	}

	ionViewDidEnter() {
		this.platform.ready().then(() => {
			this.setoldloc();

		});
	}

	setFilteredItems() {
		this.loader = this.loading.create({
			content: 'Durchsuche...',
		});

		this.loader.present().then(() => {
			let path = null;
			console.log('8218 SearchTerm: ' + this.searchTerm);
			this.globaldata = null;
			if((this.searchTerm !== undefined) && (this.searchTerm !== null) && (this.searchTerm !== '')){
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
						this.storage.set('searchtermforhome', this.searchTerm);

						if(this.searchTerm.includes('#')){
							this.searchTerm = this.searchTerm.replace('#', '');
							tag = 1;
							console.log('8218 SearchTerm: ' + this.searchTerm);
						}

						this.filterdata = this.parsedData.filter((item) => {
							if(item[4] !== undefined && item[14] !== undefined && item[10] !== undefined){
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

						this.file.removeFile(path, 'tempdata').then( data => {
							console.log('8218 Removed Tempdata');
						});

						this.file.writeFile(path,'tempdata' , this.filterdata).then((success) => {
							console.log("8218 File Writed Successfully", success);
						}).catch((err) => {
							console.log("8218 Error Occured While Writing File", err.message);
						});

						this.storage.set('globaldata', 1);

						if (tag === 1) {
							this.searchTerm = '#' + this.searchTerm;
						}
						console.log('8218 AllData Ready!');
						this.loader.dismiss();
						this.show = 1;
						this.getcity();
						//this.globaldat();

					}).catch((err)=> {
						console.log('8218 Addmarker Err: ' + err.message);
						this.loader.dismiss();
						this.globaldat();
					});

		} else {
				console.log('8218 SearchTerm: Undefined');
				this.loader.dismiss();
			}

			this.loaded = 1;
		});
	}

	getcity() {
		let options: NativeGeocoderOptions = {
			useLocale: true,
			maxResults: 5
		};
		this.nativeGeocoder.forwardGeocode(this.searchTerm, options)
			.then((coordinates: NativeGeocoderForwardResult[]) => {
				console.log('8218 The coordinates are ' + JSON.stringify(coordinates[0]) + ' latitude=' + coordinates[0].latitude + ' and longitude=' + coordinates[0].longitude);
				this.city[0] = this.searchTerm;
				this.city[1] = coordinates[0].latitude;
				this.city[2] = coordinates[0].longitude;
				console.log('8218 Term: ' + this.city[0]);
			});
	}

	globaldat() {
		this.loader = this.loading.create({
			content: 'Durchsuche...globale Einträge',
		});
		this.loader.present().then(() => {
			let path = null;
			if (this.platform.is('ios')) {
				path = this.file.dataDirectory + 'data/';
			} else if (this.platform.is('android')) {
				path = this.file.externalDataDirectory + 'data/';
			}

			this.file.readAsText(path, 'alldata.csv') 
				.then(fileStr => {
					console.log('8218 AllData Search Start Parsing...')
					this.parsedData = papa.parse(fileStr).data;
					this.parsedData.splice(0, 1);

					console.log('8218 AllData Search ready');
					console.log('8218 AllData Filtering...');

					let tag = 0;

					if(this.searchTerm.includes('#')){
						this.searchTerm = this.searchTerm.replace('#', '');
						tag = 1;
						console.log('8218 SearchTerm: ' + this.searchTerm);
					}

					this.globaldata = this.parsedData.filter((item) => {
						if(item[4] !== undefined && item[14] !== undefined && item[10] !== undefined){
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

					this.globaldata.sort((data1, data2) => {
						//console.log('8218 Data1: ' + data1[30] + ' Data2: ' + data2[30]);
						if (data1[30] <= data2[30]) {
							return -1;
						} else if (data1[30] >= data2[30]) {
							return 1;
						} else {			
							return 0;
						}
					});

					this.file.removeFile(path, 'tempdata').then( data => {
						console.log('8218 Removed Tempdata');
					});

					this.file.writeFile(path,'tempdata' , JSON.stringify(this.globaldata)).then((success) => {  
						console.log("8218 File Writed Successfully", success);  
					}).catch((err) => {  
						console.log("8218 Error Occured While Writing File" +  JSON.stringify(err));  
					});

					this.storage.set('globaldata', 1);

					if (tag === 1) {
						this.searchTerm = '#' + this.searchTerm;
					}
					console.log('8218 AllData Ready!');
					this.show = 1;
					this.loader.dismiss();


				}).catch((err)=> {
					console.log('8218 Addmarker Err: ' + JSON.stringify(err));
					this.loader.dismiss();
				});
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

	showitem(item: any) {
		console.log('8218 Open Entry-Page');
		this.storage.set('entryhome', item);
		this.navCtrl.push(EntrylocalPage, {entry: item});
	}

	parsedata() {
		let path = null;

		console.log('8218 Addmarker') 

		if (this.platform.is('ios')) {
			path = this.file.dataDirectory + 'data/';
		} else if (this.platform.is('android')) {
			path = this.file.externalDataDirectory + 'data/';
		}

		this.file.readAsText(path, 'alldata.csv')
			.then(fileStr => {
				console.log('8218 AllData Search Start Parsing...')
				let parsedData = papa.parse(fileStr).data;
				parsedData.splice(0, 1);

				console.log('8218 AllData Search Push to Array');
				for(let parst of parsedData) {
					this.items.push(parst);
				}
				console.log('8218 Filtering Items...');
				this.items = this.items.filter(function( element ) {
					return element !== undefined;
				});
				//this.filterdata = this.items;
				console.log('8218 AllData Search ready');

			}).catch((err)=> {
				console.log('8218 Addmarker Err: ' + err);
				this.loader.dismiss();
			});


	}
}
