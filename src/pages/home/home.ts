import { Component,  ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform, App } from 'ionic-angular';
import leaflet from 'leaflet';
import * as papa from 'papaparse';

import { SplashScreen } from '@ionic-native/splash-screen';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { Storage } from '@ionic/storage';

import { SearchPage } from '../search/search'
import { Diagnostic } from '@ionic-native/diagnostic';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { Network } from '@ionic-native/network';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	@ViewChild('map') mapContainer: ElementRef;
	map: any;
	statlat: any;
	statlong: any;
	deleted: any = 0;
	oldlat: any;
	oldlong: any;
	firsttime: any;
	location: any = false;
	internet: any = false;
	marker: any;

	constructor(public app: App, public navCtrl: NavController, private file: File, private transfer: FileTransfer, private platform: Platform, public storage: Storage, public splashScreen: SplashScreen, public diagnostic: Diagnostic, public locationAccuracy: LocationAccuracy, public network: Network) { }

	ionViewDidEnter() {
		this.platform.ready().then(() => {
			console.log('8218 Home');
			this.setoldloc();
			console.log('8218 Network Type: ' + this.network.type);
			if(this.network.type === 'none') {
				alert('Die App benötigt eine aktive Internetverbindung! Bitte mobile Daten oder WiFi aktivieren!');
				this.ionViewDidEnter();
			} else {
				this.downloadalldata();
				console.log('8218 map: ' + this.map);
				this.loadmap();
			}
		});
	}

	async setoldloc() {
		this.firsttime = await this.storage.get('first');
		this.oldlat = await this.storage.get('lat');
		this.oldlong = await this.storage.get('lng');
	}

	openSearchPage() {
		console.log('8218 OpenSearchPage');
		this.app.getRootNav().setRoot(SearchPage);
	}

	addmarker() {
		let path = null;

		console.log('8218 Addmarker') 

		if (this.platform.is('ios')) {
			path = this.file.dataDirectory + 'data/';
		} else if (this.platform.is('android')) {
			path = this.file.externalDataDirectory + 'data/';
		}

		console.log('8218 Addmarker Path: ' + path);
		this.file.readAsText(path, 'data.csv')
			.then(fileStr => {
				let parsedData = papa.parse(fileStr).data;
				parsedData.splice(0, 1);

				console.log('8218 Addmarker Parse');

				for(let parst of parsedData) {
					if (parst[13] == 'Initiative') 
					{
						this.addmymarkers(parst, 1);
					} 
					else if (parst[13] == 'Unternehmen')
					{
						this.addmymarkers(parst, 0);
					}
					else //Events?
					{
					}
				}
			}).catch((err)=> {
				console.log('8218 Addmarker Err: ' + err);
			});
	}

	addmymarkers(data:any, pic:any) {
		console.log('8218 AddMyMarkers Pic: ' + pic + 'data: ' + data );
		var Icon: any;
		if(pic === 1) {

			Icon = new leaflet.Icon({
				iconUrl: 'data:image/png;base64,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',
				iconSize: [25, 41],
				iconAnchor: [12, 41],
				popupAnchor: [1, -34]
			});
		} else {
			Icon = new leaflet.Icon({
				iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAoCAYAAADt5povAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAG7AAABuwBHnU4NQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAWdEVYdEF1dGhvcgBNYXJrdXMgS29obGhhc2W9p8FDAAAAUnRFWHRDb3B5cmlnaHQAQ0MgQXR0cmlidXRpb24tU2hhcmVBbGlrZSBodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1zYS8zLjAvXoNavAAAA99JREFUWIWdl09oHUUcxz8zsy8eGujFU2yE6slTK0Wpog2iQk+CiAGx5lJKrUnFRmtqBHkmJrQVetA+RQOBFER50oNFoVKxQimKRoUKgorII7YaPKgUieXtzHhY5739M7O7rz/48XbfzPw++/3N/GZ2BXWsvbSVSD2CkA8i2AJiNGmwa1h+xZpzxPo04/t+qQolSltPv30HRMeQ8j6kBPF/d/drbdaNOY/Whxnf9/VgwHZrGDHUQkVPIKVACHpA59ZmocY4Nxi7wkbjIBMT/1QD22/ehGh8gJQ7UCoBOXewtGVhiWsNxlyie+0hHp/qhIHtt27Gis9RaqQHS0Od0jQsBEygVzDdnTw2ueaG9Ee3W8MYziDlSE9JWl0arlTR8w+VXI8g1BlOvbqpCOyKFkJsyw0ogkMgX+qFAMR21PDJbEpXXrudRmMVpSRKQRT5AyuVncd0Ol0afR7HFq3vZOLgaqJQRScQQhYWRfpJ3ZOH0pj3zEoRAiGOJQpPvb4VKX9GKRFUl/9Pyr66oprwfbd7awQ86i2PtMr8vQO6Wqzq31sx4uEIa+8Pwtw85e+N8beF+vfpuyOsHS108A1K15xrd9dpL4PDbRGwxTuguE9m99L8A/i8GOvG6LpAvrKoB74mEXSCIBekrNZ8/cLgjsTYC5Wg8F6ZhVaDL0iE+dCbFh80pNCn1gc29iNJ5+pZrO0Ed34fzKfU59mYa2we/VjSbBqwy6WpzAf1KQxBezHtEuPjOtlLu2IJa7uVcxVKZ9lcJr8xsVgGdzztP/QbxrwfTGnZSVBLqW1zYPpyHwgQ6ybG+FWG7n3XxbnWyHjOYfrAJ5//CWNWvMFDq7KewmX2zvxQBALEsokxG965qSoJP/RfunI+jcgCD0xfJtZvBBdE2fx5+5sWk8+uhYEAQ7yMNVdqpzO082i9jrTz+fBF4N6Zq3T1Ee+iCBW+d2/Vz7H/yN/58P6T3lrBycXzKDlWeE/xvQin38KT2rvI5Oy9CFE4EIsKk6AWzdNoHQ9Ug8l1TMxTPhiA8gIBzn66zu6xG4BdBRWho8wYMHqRZ156LxTWr9DZn3YOrb+rtdskq/J7/mKhLGT55xrA8eZ2lPkSIRr9UakT35m1MULfxfTCalm4cEqdnfvsdx64Zwhrd3nT6jZobRc4vPBOVbjylDrb/MccWn8TrMNYX2IjeqVOqOqUOjs6sw3DV0Aj1xIjxE5eOBr86k1bdUqdfXJxnbG7I6wZy63SeV48/m7dMPVS6sxsmseYL1I7zSp6eHGQEPVT6qx56BaM+RaQSLWD5okfB44xsM1O7WF2as/1DP0Pa/h44KB7qbgAAAAASUVORK5CYII=',
				iconSize: [25, 41],
				iconAnchor: [12, 41],
				popupAnchor: [1, -34]
			});

		}

		//leaflet.circle([data[6], data[7]], {color: 'red', fillColor: '#f03', fillOpacity: 0.1, radius: 150}).addTo(this.map).bindPopup("<b>" + data[4] +  "</b><br>" + data[5]);
		//8,9,10,11
		leaflet.marker([data[6], data[7]], {icon: Icon}).addTo(this.map).bindPopup("<b>" + data[4] +  "</b><br>" + data[5] + "<br><b>" + data[8] + "<br>" + data[9] + " "  + data[10] + "<br>");
	}

	gotoEntry() {
		//Popup Onclick coming soon
		//TODO
		console.log('8218 GotoEntry');
	}

	async loadmap() {
		await this.diagnostic.isLocationEnabled()
			.then((state) => {
				console.log('8218 Location: ' + state);
				if(state == false) {
					alert("Bitte GPS aktivieren!");
					this.diagnostic.switchToLocationSettings();
					this.loadmap();
				} else {
					if(this.platform.is('android')) {
						console.log('8218 Platform: Android, Check GPSLocationEnabled');
						this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)
							.then(() => {
							}).catch((error) => {
								alert('Für eine ordnungsgemäße Funktion bitte bei den GPS-Einstellungen "Hohe Präzision" einstellen!');
								this.diagnostic.switchToLocationSettings();
							});

					}
					console.log('8218 Leaflet Map SetView')
					this.map = leaflet.map("map").setView([50.888, 10], 5.3); //fitWorld() 50.388,6.828&zoom=5.69;

					var redIcon = new leaflet.Icon({
						iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
						iconSize: [25, 41],
						iconAnchor: [12, 41],
						popupAnchor: [1, -34],
					});

					console.log('8218 Loadmap');
					leaflet.titleLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png', {
						attributions: '<a class="osm attr" href=https://wikimediafoundation.org/wiki/Maps_Terms_of_Use> Wikimedia </a>',
						//leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
						//	attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
						maxZoom: 17
					}).addTo(this.map);

					this.map.locate({
						setView: true,
						enableHighAccuracy: true,
						timeout: 50000,
						maximumAge: 0,
						maxZoom: 10
					}).on('locationfound', (e) => {
						let markerGroup = leaflet.featureGroup();
						this.marker  = leaflet.marker([e.latitude, e.longitude], {icon: redIcon});
						this.statlat = e.latitude;
						this.storage.set('lat', e.latitude);
						this.statlong = e.longitude;
						this.storage.set('lng', e.longitude);
						this.marker.bindPopup('Dein Standort').openPopup();
						markerGroup.addLayer(this.marker);
						this.map.addLayer(markerGroup);
						this.downloadData();
					}).on('locationerror', (err) => {
						if(err.message.toString().includes('denied')) {
							alert('Die App benötigt Zugriff auf deinen Standort!!');
							this.diagnostic.switchToSettings();
						} else if(err.message.toString().includes('Illegal')) {
							alert('Die App benötigt Zugriff auf deinen Standort!!');
							this.diagnostic.switchToSettings();
						} else {
							alert("Standort konnte nicht ermittelt werden.");
						}	
						console.log('8218 Loadmap locationError: ' + err.message);
					});
					var customControl =  leaflet.Control.extend({

						options: {
							position: 'topleft'
						},

						onAdd: function (map) {
							var container = leaflet.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');

							container.style.backgroundColor = 'white';     
							container.style.backgroundImage = "url(../../assets/imgs/gps.png)";
							container.style.backgroundSize = "30px 30px";
							container.style.width = '33px';
							container.style.height = '33px';

							container.onclick = function(){
								map.locate({
									setView: true,
									enableHighAccuracy: true,
									timeout: 50000,
									maximumAge: 0,
									maxZoom: 17
								});
							}

							return container;
						}
					});
					this.map.addControl(new customControl());

				}
			}).catch(e => console.error(e));
	}

	async downloadData() {
		let path = null;

		if (this.platform.is('ios')) {
			path = this.file.dataDirectory;
		} else if (this.platform.is('android')) {
			path = this.file.externalDataDirectory;
		}
		

		console.log('8218 Old: ' + this.oldlat + ' ' + this.oldlong);
		console.log('8218 New: ' + this.statlat + ' ' + this.statlong);
		if(((await this.storage.get('day') <= new Date().getDate() || await this.storage.get('month') !== new Date().getMonth()) && this.deleted === 0) || this.oldlat-0.2 >= this.statlat || this.oldlat+0.2 <= this.statlat || this.oldlong-0.2 >= this.statlong || this.oldlong+0.2 <= this.statlong)
		{
			console.log('8218 DeleteDir ' + path);
			await this.file.removeRecursively(path, 'data').then(
				(files) => {
					console.log('8218 Allright, Deleted succes');
					this.deleted = 1;
					this.oldlat = this.statlat;
					this.oldlong = this.statlong;
				}).catch(
					(err) => {
						console.log('8218 DeleteDir Error: ' + JSON.stringify(err));
					});
		}

		if (this.platform.is('ios')) {
			path = this.file.dataDirectory + 'data/';
		} else if (this.platform.is('android')) {
			path = this.file.externalDataDirectory + 'data/';
		}

		console.log('8218 Checkdir');

		this.file.checkDir(path, '').then(response => {
			console.log('8218 ChechDir: Directory exists'+response);
			this.file.checkFile(path, 'data.csv').then(
				(files) => {
					console.log("8218 CheckDir: file found data.csv");
					this.addmarker();
				}
			).catch(
				(err) => {
					console.log("8218 CheckDir: data.csv not found ");
					const transfer = this.transfer.create();
					this.storage.set('day', new Date().getDate() + 3);
					this.storage.set('month', new Date().getMonth());
					this.storage.set('year', new Date().getFullYear());
					let transurl = 'http://api.ofdb.io/v0/export/entries.csv?bbox=' + (this.statlat-0.6) + ',' + (this.statlong-0.6)  +',' + (this.statlat+0.6) + ',' + (this.statlong+0.6);
					transfer.download(transurl, path + 'data.csv')
						.then(entry => {
							let url = entry.toURL();
							console.log('8218 CheckDir: data.csv path ' + url);
							this.downloadalldata();
							this.addmarker();
						});

					this.deleted = 0;
				});
		}).catch(err => {
			if (this.platform.is('ios')) {
				path = this.file.dataDirectory;
			} else if (this.platform.is('android')) {
				path = this.file.externalDataDirectory;
			}

			console.log('8218 downloaddata: Directory doesn\'t exist'+JSON.stringify(err));
			this.file.createDir(path, 'data', false).then(response => {
				console.log('8218 downloaddata: Directory create'+response);
				this.downloadData();
			}).catch(err => {
				console.log('8218 downloadddata: Directory no create'+JSON.stringify(err));
				//TODO Alert User
			});
		});
		this.splashScreen.hide();
	}

	async downloadalldata() {
		let path = null;

		if (this.platform.is('ios')) {
			path = this.file.dataDirectory + 'data/';
		} else if (this.platform.is('android')) {
			path = this.file.externalDataDirectory + 'data/';
		}

		console.log('8218 AllData Download');

		await this.file.checkDir(path, '').then(response => {
			console.log('8218 AllData: Directory exists'+response);
			this.file.checkFile(path, 'alldata.csv').then(
				(files) => {
					console.log("8218 CheckDir: file found alldata.csv");
				}
			).catch(
				(err) => {
					console.log("8218 CheckDir: alldata.csv not found ");
					const transfer = this.transfer.create();
					this.storage.set('day', new Date().getDate() + 3);
					this.storage.set('month', new Date().getMonth());
					this.storage.set('year', new Date().getFullYear());
					let transurlall = 'http://api.ofdb.io/v0/export/entries.csv?bbox=47.497972542230855,0.7996758709088782,54.63407558981465,18.307256321725717';
					transfer.download(transurlall, path + 'alldata.csv')
						.then(entry => {
							let url = entry.toURL();
							console.log('8218 CheckDir: alldata.csv path ' + url);
						});
				});
		}).catch(err => {
			if (this.platform.is('ios')) {
				path = this.file.dataDirectory;
			} else if (this.platform.is('android')) {
				path = this.file.externalDataDirectory;
			}

			console.log('8218 downloaddata: Directory doesn\'t exist'+JSON.stringify(err));
			this.file.createDir(path, 'data', false).then(response => {
				console.log('8218 downloaddata: Directory create'+response);
				this.downloadalldata();
			}).catch(err => {
				console.log('8218 downloadddata: Directory no create'+JSON.stringify(err));
				//TODO Alert User
			});
		});

	}
}
