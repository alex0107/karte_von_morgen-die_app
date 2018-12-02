import { Component,  ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform, LoadingController } from 'ionic-angular';
import leaflet from 'leaflet';
import * as papa from 'papaparse';
import { File } from '@ionic-native/file';
import { Storage } from '@ionic/storage';

import { EntryPage } from '../entry/entry';
import { EntrycardPage } from '../entrycard/entrycard';

@Component({
	selector: 'page-search',
	templateUrl: 'search.html'
})
export class SearchPage {

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

	constructor(public navCtrl: NavController, private file: File, private platform: Platform, public storage: Storage, public loading: LoadingController)
	{
	}

	async setoldloc() {
		this.oldlat = await this.storage.get('lat');
		this.oldlong = await this.storage.get('lng');
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
			if(this.searchTerm !== undefined){
				if (this.platform.is('ios')) {
					path = this.file.dataDirectory + 'data/';
				} else if (this.platform.is('android')) {
					path = this.file.externalDataDirectory + 'data/';
				}

				this.file.readAsText(path, 'data.csv') //29.11.18 Rücksprache Helmut lokale Einträge (50 Stück begrenzt / nur lokale)
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


						this.filterdata = this.parsedData.filter((item) => {
							if(item[4] !== undefined){
								if(tag === 1) {
									return item[14].toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
								} else {
									if(item[14].toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1) {
										item[30] = this.distance(this.oldlat, this.oldlong, item[6], item[7], "K").toFixed(2);
										return item[14].toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
									} else if(item[4].toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1) {
										item[30] = this.distance(this.oldlat, this.oldlong, item[6], item[7], "K").toFixed(2);
										this.entfernung.push((this.distance(this.oldlat, this.oldlong, item[6], item[7], "K")).toFixed(2));
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

	showitem(item: any) {
		this.navCtrl.push(EntryPage, {entry: item});
	}

	ShowCard() {
		console.log('8218 ShowCard: ' + this.filterdata);
		this.navCtrl.push(EntrycardPage, {entries: this.filterdata});
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
