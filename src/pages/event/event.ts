import { Component,  ViewChild, ElementRef, Injectable } from '@angular/core';
import { App, NavController, Platform, AlertController } from 'ionic-angular';
import leaflet from 'leaflet';
import markercluster from 'leaflet.markercluster';
import * as papa from 'papaparse';

import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';

import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

import { SearchPage } from '../search/search';

@Component({
	selector: 'page-event',
	templateUrl: 'event.html'
})
export class EventPage {
	@ViewChild('mapevent') mapContainer: ElementRef;
	map: any;
	task: any;

	constructor(public app: App, public navCtrl: NavController, private file: File, private transfer: FileTransfer, private platform: Platform, private alertCtrl: AlertController, public storage: Storage)
	{
	}


	ionViewDidEnter() {
		this.platform.ready().then(() => {
			if(!this.map) {
				//this.loadmap();
			}
		});
	}

        openSearchPage() {
                console.log('8218 OpenSearchPage');
       		this.app.getRootNav().setRoot(SearchPage);
	}

	async presentConfirm() {
		let rootpage: any = await this.storage.get('prevpage');
		console.log('8218 EventPage -> ' + rootpage);
		let rp: any;
		if(rootpage == 'HomePage') {
			rp = HomePage;
		}
		let alert = this.alertCtrl.create({
			title: 'Coming Soon',
			message: 'Ob Tagung, Konferenz oder Festival - auf der Karte von morgen sollen auch bald Events eingetragen werden. Wir planen außerdem einen Veranstaltungskalender, der die Ergebnisse anzeigt und exportiert. Helfe mit, damit diese Funktion schon bald verfügbar ist und beteilige Dich an der Spendenaktion auf betterplace.org!',
			buttons: [
				{
					text: 'Schließen',
					role: 'cancel',
					handler: () => {
						this.navCtrl.push(HomePage);
						console.log('8218 EventPage Alert cancelled');
					}
				},
				{
					text: 'Spenden',
					handler: () => {
						window.open("https://www.betterplace.org/de/projects/36213",'_system', 'location=yes');
						console.log('Buy clicked');
					}
				}
			]
		});
		alert.present();
	}


	addmarker() {
		let path = null;

		console.log('8218 Addmarker') 

		if (this.platform.is('ios')) {
			path = this.file.dataDirectory;
		} else if (this.platform.is('android')) {
			path = this.file.externalDataDirectory + 'data/';
		}


		this.file.readAsText(path, 'data.csv')
			.then(fileStr => {
				let parsedData = papa.parse(fileStr).data;
				parsedData.splice(0, 1);

				console.log('8218 Addmarker Parse');

				for(let parst of parsedData) {
					if (parst[13] == 'Initiative') 
					{
					} 
					else if (parst[13] == 'Unternehmen')
					{
					}
					else
					{
						this.addmymarkers(parst);
					}
				}
			}).catch((err)=> {
				console.log('8218 Addmarker Err: ' + err);
			});
	}

	addmymarkers(data:any) {
		var greenIcon = new leaflet.Icon({
			iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
			shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
			iconSize: [25, 41],
			iconAnchor: [12, 41],
			popupAnchor: [1, -34],
			shadowSize: [41, 41]
		});
		leaflet.circle([data[6], data[7]], {color: 'green', fillColor: '#2fff', fillOpacity: 0.1, radius: 150}).addTo(this.map).bindPopup("<b>" + data[4] +  "</b><br>" + data[5]);
		//leaflet.marker([data[6], data[7]], {icon: greenIcon}).addTo(this.map).bindPopup("<b>" + data[4] +  "</b><br>" + data[5]);
	}

	async loadmap() {
		this.map = leaflet.map("mapevent").setView([50.888, 10], 5.3); //fitWorld() 50.388,6.828&zoom=5.69;
		leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 16
		}).addTo(this.map);

		let markerGroup = leaflet.featureGroup();
		let marker: any = leaflet.marker([await this.storage.get('lat'), await this.storage.get('lng')]);
		marker.bindPopup('Dein Standort').openPopup();
		markerGroup.addLayer(marker);
		this.map.addLayer(markerGroup);
		this.addmarker();
		this.map.setView([await this.storage.get('lat'), await this.storage.get('lng')], 9);
	}
	openURL() {
		console.log('8218 EventPage Button clicked')
		window.open("https://www.betterplace.org/de/projects/36213",'_system', 'location=yes');
	}

}
