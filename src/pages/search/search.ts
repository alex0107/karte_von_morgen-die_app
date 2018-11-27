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

	constructor(public navCtrl: NavController, private file: File, private platform: Platform, public storage: Storage, public loading: LoadingController)
	{
	}


	ionViewDidEnter() {
		this.platform.ready().then(() => {
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

						this.filterdata = this.parsedData.filter((item) => {
							if(item[4] !== undefined){
								if(tag === 1) {
									return item[14].toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
								} else {
									return item[4].toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
								}
							} else {
								console.log('8218 UNDEFINED');
							}
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
