import { Component,  ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform, App, LoadingController, AlertController, MenuController } from 'ionic-angular';
import leaflet from 'leaflet';
import * as papa from 'papaparse';
import * as $ from 'jquery';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { SplashScreen } from '@ionic-native/splash-screen';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { Storage } from '@ionic/storage';

import { SearchPage } from '../search/search'
import { Diagnostic } from '@ionic-native/diagnostic';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';
import { Network } from '@ionic-native/network';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';

import { EntrylocalPage } from '../entrylocal/entrylocal';
import { HometabPage } from '../hometab/hometab';
import { AboutusPage } from '../aboutus/aboutus';

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
	oldloclat: any;
	oldloclong: any;
	location: any = false;
	internet: any = false;
	marker: any;
	locationmode: any;
	loader: any;
	popup: any = 0;
	entry: any = null;
	markers: any;
	searchloc: any = 0;
	ready: number = 0;
	entryopen: any = 0;
	globalentry: any;
	searchterm: any;

	constructor(public app: App, public navCtrl: NavController, private file: File, private transfer: FileTransfer, private platform: Platform, public storage: Storage, public splashScreen: SplashScreen, public diagnostic: Diagnostic, public locationAccuracy: LocationAccuracy, public network: Network, public elementRef: ElementRef, public backgroundGeolocation: BackgroundGeolocation, public loading: LoadingController, public alertCtrl: AlertController, public nativeGeocoder: NativeGeocoder, public menuCtrl: MenuController, public httpClient: HttpClient) 
	{
	}

	async ionViewDidEnter() {
		const inputs: any = document.getElementById("input").getElementsByTagName("INPUT");
		inputs[0].disabled=true;
		if(this.map !== undefined) {
			this.map.invalidateSize(true);
		}
		this.platform.ready().then(() => {
			if (this.entryopen === 1) {
				this.entryopen = 0;
			} else {
				console.log('8218 Home');
				this.setoldloc();
				this.downloadalldata();
				if (this.platform.is('ios')) {
					//*** Dummy-Funktion wegen Appstoreconnect AppStore (Backgroundmode und "Immer verwenden") ***//
					const config: BackgroundGeolocationConfig = {
						notificationTitle: "KVM", // Android
						notificationText: "Karte von morgen benutzt deinen Standort!", // Android
						desiredAccuracy: 10,
						stationaryRadius: 20,
						distanceFilter: 30,
						stopOnTerminate: true,
					};

					this.backgroundGeolocation.configure(config)
						.subscribe((location: BackgroundGeolocationResponse) => {

							console.log(location);

							this.backgroundGeolocation.finish(); // FOR IOS ONLY

						});
					this.backgroundGeolocation.start();
				}
				console.log('8218 map: ' + this.map);
				if(this.map === undefined) {
					console.log('8218 Setting View');
					this.map = leaflet.map("map", {zoomControl: false}).setView([50.888, 10], 5.3);
					/*leaflet.control.zoom({
						position:'bottomright'
					}).addTo(this.map);*/
					console.log('8218 Setting Card...');
					leaflet.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png', {
						attributions: '<a class="osm attr" href=https://wikimediafoundation.org/wiki/Maps_Terms_of_Use> Wikimedia </a>',
						maxZoom: 17
					}).addTo(this.map);
					this.markers = leaflet.layerGroup().addTo(this.map);
				}
				this.storage.get('searchtermforhome').then((term) => {
					console.log('8218 8218 ' + term)
					this.searchterm = term;
				});
				this.checkstorage();
			}
		});
	}

	swipe(event) {
		console.log('8218 Event: ' + event);
	}

	zoomin() {
		this.map.zoomIn();
	}

	zoomout() {
		this.map.zoomOut();
	}

	async checkstorage() {
		console.log('8218 CheckStorage....Storage');
		var storeentry = await this.storage.get('entryhome');
		var globaldata = await this.storage.get('globaldata');
		console.log('8218 GlobData: ' + JSON.parse(globaldata));
		if (storeentry !== null) {
			this.entry = storeentry;
			this.storage.set('entryhome', undefined);
		}
		if (this.entry !== null) {
			this.popup = 1;
			if (this.entry[13] == 'Initiative')
			{
				await this.addmymarkers(this.entry, 1, 1);
			}
			else if (this.entry[13] == 'Unternehmen')
			{
				await this.addmymarkers(this.entry, 0, 1);
			}
			else //Events?
			{
			}
			this.map.setView([parseFloat(this.entry[6]), parseFloat(this.entry[7])], 15);
			this.map.invalidateSize(true);
			this.entry = null;
		} else if (globaldata == 1) {
			this.map.invalidateSize(true);
			var path = "";
			if (this.platform.is('ios')) {
				path = this.file.dataDirectory + 'data';
			} else if (this.platform.is('android')) {
				path = this.file.externalDataDirectory + 'data/';
			}

			this.file.readAsText(path, 'tempdata')
				.then(fileStr => {
					this.map.remove();
					this.map = leaflet.map("map", {zoomControl: false}).setView([50.888, 10], 5.3);
					leaflet.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png', {
						attributions: '<a class="osm attr" href=https://wikimediafoundation.org/wiki/Maps_Terms_of_Use> Wikimedia </a>',
						maxZoom: 17
					}).addTo(this.map);

					this.markers = leaflet.layerGroup().addTo(this.map);

					for(let globdata of JSON.parse(fileStr)) {
						if (globdata[13] == 'Initiative')
						{
							this.addmymarkers(globdata, 1, 0);
						}
						else if (globdata[13] == 'Unternehmen')
						{
							this.addmymarkers(globdata, 0, 0);
						}
						else //Events?
						{
						}
					}

				
				});



		} else {
			console.log('8218 CheckStorage....Loadmap');
			this.loadmap(10);
		}
	}

	async setoldloc() {
		this.oldlat = await this.storage.get('lat');
		this.oldlong = await this.storage.get('lng');
		console.log('8218 ' + this.oldloclong + " " + this.oldloclat);
	}

	openSearchPage() {
		console.log('8218 OpenSearchPage');
		this.navCtrl.parent.select(0);
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
				/*
				for(let parst of parsedData) {
					parsedData[30] = this.distance(this.oldlat, this.oldlong, parst[6], parst[7], "K");
				}

				parsedData.sort((data1, data2) => {
					if (data1[30] < data2[30]) return -1;
					if (data1[30] > data2[30]) return 1;
					return 0;
				});*/

				let k = 0;
				console.log('8218 Addmarker Parse');
				for(let parst of parsedData) {
					if(k < 200) {
						if (parst[13] == 'Initiative') 
						{
							this.addmymarkers(parst, 1, 0);
							k++;
						} 
						else if (parst[13] == 'Unternehmen')
						{
							this.addmymarkers(parst, 0, 0);
							k++;
						}
						else //Events?
						{
						}
					}
				}

				console.log('8218 Addmarker Ready');
			}).catch((err)=> {
				console.log('8218 Addmarker Err: ' + err);
			});
		

	}

	addmymarkers(data:any, pic:any, openpopup:any) {
		if(data[16] >= 0 ) {
			var Icon: any;
			if(pic === 1) {

				Icon = new leaflet.Icon({
					iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAoCAYAAADt5povAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAG7AAABuwBHnU4NQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAWdEVYdEF1dGhvcgBNYXJrdXMgS29obGhhc2W9p8FDAAAAY3RFWHRDb3B5cmlnaHQAQ0MgQXR0cmlidXRpb24tTm9uQ29tbWVyY2lhbC1TaGFyZUFsaWtlIGh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LW5jLXNhLzMuMC/eBBrlAAAFJUlEQVRYhZ1XbYhWRRR+zsxdV9mFLUwis8D61S8NqQypRSIwwkyyhcgklqKIvty+BP+8rRnZDxFqjRIMBQmKopaCln5sZVbKVrBBUBGxmFuCtu6uq7XvnHP6ce/Mnbnvu18NDHM/5pznPOfrziXMYxw+3rGSbMs9ILodRlcAuKp4dRJCf7DqZ4br72+7afz3uXTRbC/fPrH0BmOwxxhaTwYgymc8VAEVQBRQ0UF19NyDa898tyDAvsFl7Uvapc8SHjCWyBiADGCIgAhU1QMqRApgUWHBoaw1e2LbqtNTcwIe+nrplWzxkbVYYyzBGMCvgaGXKgAjMDADwgpmGlZ2dz207tzIjIBvfnXp1Zk139gMy40lWFuCGQsQ5deJOyOGwgCzhpUZo2Za13Z3/n3SywTxvsFl7ZaonwyWEwHBjQWYMd4AwGaAtQj3wQOmlCMCDGE5Z+g/PHB5WwNgS+b6YGgVEUCGCgEqlFBQbC3lABkheMHkMn6NdRBh9YUl9dcTl77xxSXXW2uGrCVjM8BmuaJ8JZgMBRBCLAEft8iNLo9hk1XV8Y2Prh8fMgBARHvJJ2GY3lLAUOzeiKUtPVBhVc6cFSnZPQBArw10rGxZbH+zGShhllERq2It2NoMIXGYAYnZuJytc/4+faeOrzXGmnvTbE0rJbIyWJ0zo7REItHwuNokYDdnINxWfRzvVM2faFQGIhpqsEEU5X5U30M2ZPB9USsb4ntfb6oQofweZdKEeiyMSiyJ9CjoukwVK5qxUFWoUq7UACSAUC6mUZb6DlPKVPQEvQpVXJaVfqOISeQ+VZAQhApXRx73XSYw9WwFFQaB5b9GFSNxi4rXuEdK6JEKSabfp2H1ca4ar4oRo4KjyUOJG3LZIyXul66YjNCsS+Miplq5VjlqVPBxaMAhMWKwtDF7hswKcf66NCrENI5tsULMJ2bs+NinKhgRTS0smaF0ncunBwgMRUu3V2IaZfHJKybHBkytBlHRg1XLJMROE3bxjOMYgL2RotXYHujqAhsAYGQHRFAPzGJWUXMOiiOmcRw58ogmoHBctweB4vO0fcOZP1XkvZJVZGUEGsevabZGCVSCAsLybs/Gs6cCIACgrjURrUvsmvAFTxmGmbCME6hMNBVlkPR6mAD41MaJX0VwKK65OD4hdq5kFTLVpV7hqJRY6ODTd0z+3AAIAOpsTRgXk0TgUiG7tA5TxprEOk9A/UenaVeMkQD2bDx7igX7RQAWTRW6NH7NMlUqrnVMfc/cXR6gGgABgDl7URijwh60kqHRrMaQ0+Q57S6m7JoCvrDpzKRzsqNZ/IT9V1wTxmmW5vuV9dkdXWPjVf1NT96qoFc/7Bg0Bp3+fBOfuNPN8ecoLwUFHXt+07lbiBo/wQ0MAYAI6tg8yQ4uSXkXx6yxp0qeSM45eqwZ2IyAALBzy9gws+5JM7axDiW6zg9Q+srOLWPDM+mdERAA6pjoZaYfPYsQOxfdp3H8yV2Y2D2bzll/1wCgdqRttSF7gggtoEYBf1hShROim2v3jQ/Nps/OBfj5B/W/Oje3LlLVW5F8TKv/hrS7dv/Ekbn0zepSP0anJnrF6fdcqUVfh+IwjNaJl+aja16Abz2CurJ2C2td/Im6rEOnde6udWF6PrrmdKkfX/bXT6+7c1Gmis7YpVDs2v3w1Dvz1TMvhn60jp7fJYxvozocWtRx/uWF6JgzS6tj+/7F11i1PwBqRO2avY9P/rJQHQsePfvatvbsa9v6f2T/A3sKgoTavqdJAAAAAElFTkSuQmCC',
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
			
			var marker = leaflet.marker([data[6], data[7]], {icon: Icon}).addTo(this.markers);
			var div_popup = leaflet.DomUtil.create('div', 'abcpopup');
			let self = this;
			div_popup.innerHTML = '<b class="title" >' + data[4] +  '<font size="5" style="padding-left: 5px;">></font></b>';

			$('b.title', div_popup).on('click', function() {
				self.gotoEntry(data);
			});
			var popup = leaflet.popup({closeButton: false}).setContent(div_popup);
			if (openpopup === 1) {
				marker.bindPopup(popup).openPopup();
			} else {
				marker.bindPopup(popup);
			}
		}
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

	openInfoPage() {
		console.log('8218 OpenInfoPage');
		this.navCtrl.push(AboutusPage);
	}

	gotoEntry(event) {
		console.log('8218 GotoEntryPage');
		this.navCtrl.push(EntrylocalPage, {entry: event, page: 'home'});
		this.popup = 1;
		this.entryopen = 1;
	}

	locationbutton() {
		let path = null;

		if (this.platform.is('ios')) {
			path = this.file.dataDirectory + 'data/';
		} else if (this.platform.is('android')) {
			path = this.file.externalDataDirectory + 'data/';
		}

		this.file.removeFile(path, 'tempdata').then( data => {
			console.log('8218 Removed Tempdata');
		});

		this.storage.set('globaldata', undefined);
		console.log('8218 Locate-Button was pressed');
		this.storage.set('entryhome', undefined);
		this.popup = 0;
		this.searchloc = 1;
		this.map.remove();
		this.map = leaflet.map("map", {zoomControl: false}).setView([50.888, 10], 5.3);
		leaflet.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png', {
			attributions: '<a class="osm attr" href=https://wikimediafoundation.org/wiki/Maps_Terms_of_Use> Wikimedia </a>',
			maxZoom: 17
		}).addTo(this.map);

		this.markers = leaflet.layerGroup().addTo(this.map);
		this.loadmap(17);
	}

	async loadmap(zoommax:any) {
		let path = null;

		if (this.platform.is('ios')) {
			path = this.file.dataDirectory + 'data/';
		} else if (this.platform.is('android')) {
			path = this.file.externalDataDirectory + 'data/';
		}

		this.file.removeFile(path, 'tempdata').then( data => {
			console.log('8218 Removed Tempdata');
		});

		this.storage.set('globaldata', undefined);

		this.oldloclat = await this.storage.get('oldlat');
                this.oldloclong = await this.storage.get('oldlong');

		console.log('8218 Function Loadmap...' + this.oldloclat + ' ' + this.oldloclong  + ' '  + this.searchloc);
		if(this.oldloclat !== null && this.oldloclong !== null && this.searchloc === 0) {
			if (this.platform.is('ios')) {
				this.backgroundGeolocation.stop();
				this.backgroundGeolocation.finish();
			}
			var redIcon = new leaflet.Icon({
				iconUrl: '../../assets/imgs/marker_location.png',
				iconSize: [25, 41],
				iconAnchor: [12, 41],
				popupAnchor: [1, -34],
			});
			let markerGroup = leaflet.featureGroup();
			this.statlat = this.oldloclat;
			this.statlong = this.oldloclong;
			console.log('8218 OldLoc: ' + this.oldlat + ' ' + this.oldlong);
			this.marker  = leaflet.marker([this.statlat, this.statlong], {icon: redIcon});
			var popsta = leaflet.popup({closeButton: false}).setContent('Dein letzter Standort');
			this.marker.bindPopup(popsta);
			markerGroup.addLayer(this.marker);
			this.map.addLayer(markerGroup);
			console.log('8218 Added last Position');
			this.map.setView([this.statlat, this.statlong], 10);
			this.downloadData();
		} else {
			console.log('8218 Go on!');
			await this.diagnostic.isLocationEnabled()
				.then((state) => {
					console.log('8218 Location: ' + state);
					if(this.popup === 0) {
						this.loader = this.loading.create({
							content: 'Ermittle Standort...',
						});
					}
					this.loader.present().then(() => {
						if(this.popup === 1) {
							this.loader.dismiss();
						}
						if (this.platform.is('ios')) {
							this.backgroundGeolocation.stop();
							this.backgroundGeolocation.finish();
						}

						var redIcon = new leaflet.Icon({
							iconUrl: '../../assets/imgs/marker_location.png',
							iconSize: [25, 41],
							iconAnchor: [12, 41],
							popupAnchor: [1, -34],
						});

						console.log('8218 Loadmap');
						console.log('8218 Popup: ' + this.popup);


						if(state === true) {
							if(this.popup == 0) {
								console.log('8218 Popup 0');

								this.map.locate({
									setView: true,
									enableHighAccuracy: true,
									timeout: 99999, //Auch für GPS-Only
									maximumAge: 20,
									maxZoom: zoommax
								}).on('locationfound', (e) => {
									console.log('8218 Marker: ' + this.marker);
									if(this.marker !== undefined) {
										this.map.removeLayer(this.marker);
									}
									let markerGroup = leaflet.featureGroup();
									this.marker  = leaflet.marker([e.latitude, e.longitude], {icon: redIcon});
									this.storage.set('oldlat', e.latitude);
									this.storage.set('oldlong', e.longitude);
									this.statlat = e.latitude;
									this.oldloclat = e.latitude;
									this.oldloclong = e.longitude;
									this.statlong = e.longitude;
									var popsta = leaflet.popup({closeButton: false}).setContent('Dein Standort');
									this.marker.bindPopup(popsta);
									markerGroup.addLayer(this.marker);
									this.map.addLayer(markerGroup);
									this.downloadData();
									this.loader.dismiss();
									this.ready = 1;
								}).on('locationerror', (err) => {
									this.loader.dismiss();
									if(err.message.toString().includes('denied')) {
										alert('Die App benötigt Zugriff auf deinen Standort!!');
										this.diagnostic.switchToSettings();
									} else if(err.message.toString().includes('Illegal')) {
										alert('Die App benötigt Zugriff auf deinen Standort!!');
										this.diagnostic.switchToSettings();
									} else {
										this.locationinput();
									}	
									console.log('8218 Loadmap locationError: ' + err.message);
								});

								if(this.entry !== null) {
									console.log('8218 Entry CheckStorage: ' + this.entry);
									this.checkstorage();
								}	
							} else {
								this.loader.dismiss();
								console.log('8218 Entry: ' + this.entry);
								if(this.entry !== null) {
									console.log('8218 Entry CheckStorage: ' + this.entry);
									this.checkstorage();
								}
							}
						} else {
							if(this.popup === 0) {
								this.locationinput();
							} else {
								this.loader.dismiss();
								if(this.entry !== null) {
									console.log('8218 Entry CheckStorage: ' + this.entry);
									this.checkstorage();
								}
							}
						}
					});
				}).catch(e => console.error(e));
		}
	}

	locationinput() {
		console.log('8218 Locationinput... ' + this.loader);
		if (this.loader !== undefined) {
			this.loader.present().then(() => {
				this.loader.dismiss();
			});
		}

		let options: NativeGeocoderOptions = {
			useLocale: true,
			maxResults: 5
		};
		if(this.network.type === 'none') {
			alert('Diese Funktion ist nur mit einer aktiven Internetverbindung verfügbar! Bitte Wlan oder mobile Daten aktivieren!');
		} else {

			let alert = this.alertCtrl.create({
				title: 'Standort eingeben',
				message: 'Bitte einen Ort eingeben.',
				inputs: [
					{
						name: 'location',
						placeholder: 'Ort'
					}
				],
				buttons: [
					{
						text: 'Abbrechen',
						role: 'cancel',
						handler: data => {
							//Nothing to do
						}
					},
					{
						text: 'Suchen!',
						handler: data => {
							console.log('8218 Data: ' + data.location);
							this.nativeGeocoder.forwardGeocode(data.location, options)
								.then((coordinates: NativeGeocoderForwardResult[]) => {
									console.log('8218 The coordinates are latitude=' + coordinates[0].latitude + ' and longitude=' + coordinates[0].longitude);
									this.map.remove();
									this.map = leaflet.map("map", {zoomControl: false}).setView([50.888, 10], 5.3);
									leaflet.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png', {
										attributions: '<a class="osm attr" href=https://wikimediafoundation.org/wiki/Maps_Terms_of_Use> Wikimedia </a>',
										maxZoom: 17
									}).addTo(this.map);

									this.markers = leaflet.layerGroup().addTo(this.map);

									var redIcon = new leaflet.Icon({
										iconUrl: '../../assets/imgs/marker_location.png',
										iconSize: [25, 41],
										iconAnchor: [12, 41],
										popupAnchor: [1, -34],
									});
									if(this.marker !== undefined) {
										this.map.removeLayer(this.marker);
									}
									let markerGroup = leaflet.featureGroup();
									this.marker  = leaflet.marker( [coordinates[0].latitude, coordinates[0].longitude] , {icon: redIcon});
									this.statlat = parseFloat(coordinates[0].latitude).toFixed(6);
									this.statlong = parseFloat(coordinates[0].longitude).toFixed(6);
									this.storage.set('oldlat', coordinates[0].latitude);
                                                                        this.storage.set('oldlong', coordinates[0].longitude);
									this.marker.bindPopup('Eingegebener Standort').openPopup();
									markerGroup.addLayer(this.marker);
									this.map.addLayer(markerGroup);
									this.map.setView([coordinates[0].latitude, coordinates[0].longitude], 14); 
									this.downloadData();
									this.loader.dismiss();
									this.loader = 1;
								}).catch((error: any) => {
									console.log(error);
								});
						}
					}
				]
			});
			alert.present();
		}
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
		if(((await this.storage.get('day') <= new Date().getDate() || await this.storage.get('month') !== new Date().getMonth()) && this.deleted === 0) || this.oldlat-0.1 >= this.statlat || this.oldlat+0.1 <= this.statlat || this.oldlong-0.1 >= this.statlong || this.oldlong+0.1 <= this.statlong)
		{
			if(this.network.type === 'none') {
				alert('Die App muss neue Einträge herunterladen, bitte Wlan oder mobile Daten bei nächster Gelegenheit aktivieren!');
				this.storage.set('day', new Date().getDate() + 1);
				this.storage.set('month', new Date().getMonth());
				this.storage.set('year', new Date().getFullYear());
				this.deleted = 1;
				this.downloadData();
			} else {
				console.log('8218 DeleteDir ' + path);
				await this.file.removeRecursively(path, 'data').then(
					(files) => {
						console.log('8218 Allright, Deleted succes');
						this.deleted = 1;
						this.oldlat = this.statlat;
						this.oldlong = this.statlong;
						this.downloadData();
					}).catch(
						(err) => {
							console.log('8218 DeleteDir Error: ' + JSON.stringify(err));
						});
			}
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
					if(this.network.type === 'none') {
						alert('Die App benötigt eine aktive Internetverbindung zum Download der Einträge! Bitte mobile Daten oder WiFi aktivieren!');
						this.map.remove();
						this.ionViewDidEnter();
					} else {
						const transfer = this.transfer.create();
						this.storage.set('day', new Date().getDate() + 3);
						this.storage.set('month', new Date().getMonth());
						this.storage.set('year', new Date().getFullYear());
						this.storage.set('lat', this.statlat);
						this.storage.set('lng', this.statlong);
						let minlat:number = this.statlat - 0.2;
						let minlng:number = this.statlong - 0.2;
						let maxlat:number = parseFloat(this.statlat) + 0.2;
						let maxlng:number = parseFloat(this.statlong) + 0.2;
					
						let transurl = 'https://api.ofdb.io/v0/export/entries.csv?bbox=' + minlat + ',' + minlng  +',' + maxlat + ',' + maxlng;
						transfer.download(transurl, path + 'data.csv')
							.then(entry => {
								let url = entry.toURL();
								console.log('8218 CheckDir: data.csv path ' + url);
								this.downloadalldata();
								this.addmarker();
							}).catch((err) => {
								console.log('8218 Error Checkdir: ' + JSON.stringify(err));	
							});
						this.deleted = 0;
					}
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
					if(this.network.type === 'none') {
						alert('Die App benötigt eine aktive Internetverbindung zum Download der Einträge! Bitte mobile Daten oder WiFi aktivieren!');
                                		this.downloadalldata();
					} else {
						const transfer = this.transfer.create();
						this.storage.set('day', new Date().getDate() + 3);
						this.storage.set('month', new Date().getMonth());
						this.storage.set('year', new Date().getFullYear());
						
						let transurlall = 'https://api.ofdb.io/v0/export/entries.csv?bbox=47.497972542230855,0.7996758709088782,54.63407558981465,18.307256321725717';
						transfer.download(transurlall, path + 'alldata.csv')
							.then(entry => {
								let url = entry.toURL();
								console.log('8218 CheckDir: alldata.json path ' + url);
							});
					}
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
