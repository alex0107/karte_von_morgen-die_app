import { Component,  ViewChild, ElementRef, Injectable } from '@angular/core';
import { App, NavController, Platform, AlertController } from 'ionic-angular';
import leaflet from 'leaflet';
import * as papa from 'papaparse';

import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';

import { Storage } from '@ionic/storage';

import { SearchPage } from '../search/search';

@Component({
	selector: 'page-unternehmen',
	templateUrl: 'unternehmen.html'
})
export class UnternehmenPage {
	@ViewChild('mapcontact') mapContainer: ElementRef;
	map: any;
	task: any;

	constructor(public app: App, public navCtrl: NavController, private file: File, private transfer: FileTransfer, private platform: Platform, public storage: Storage ) {}


	ionViewDidEnter() {
		this.platform.ready().then(() => {
			console.log('8218 UnternehmenPage Start');
			if(!this.map) {
				console.log('8218 UnternehmenPage ready');
				this.loadmap();
			}
		});
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
						this.addmymarkers(parst);
					}
					else
					{
					}
				}
			}).catch((err)=> {
				console.log('8218 Addmarker Err: ' + err);
			});
	}

	addmymarkers(data:any) {
		var greenIcon = new leaflet.Icon({
			iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAoCAYAAADt5povAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAG7AAABuwBHnU4NQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAWdEVYdEF1dGhvcgBNYXJrdXMgS29obGhhc2W9p8FDAAAAUnRFWHRDb3B5cmlnaHQAQ0MgQXR0cmlidXRpb24tU2hhcmVBbGlrZSBodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1zYS8zLjAvXoNavAAAA99JREFUWIWdl09oHUUcxz8zsy8eGujFU2yE6slTK0Wpog2iQk+CiAGx5lJKrUnFRmtqBHkmJrQVetA+RQOBFER50oNFoVKxQimKRoUKgorII7YaPKgUieXtzHhY5739M7O7rz/48XbfzPw++/3N/GZ2BXWsvbSVSD2CkA8i2AJiNGmwa1h+xZpzxPo04/t+qQolSltPv30HRMeQ8j6kBPF/d/drbdaNOY/Whxnf9/VgwHZrGDHUQkVPIKVACHpA59ZmocY4Nxi7wkbjIBMT/1QD22/ehGh8gJQ7UCoBOXewtGVhiWsNxlyie+0hHp/qhIHtt27Gis9RaqQHS0Od0jQsBEygVzDdnTw2ueaG9Ee3W8MYziDlSE9JWl0arlTR8w+VXI8g1BlOvbqpCOyKFkJsyw0ogkMgX+qFAMR21PDJbEpXXrudRmMVpSRKQRT5AyuVncd0Ol0afR7HFq3vZOLgaqJQRScQQhYWRfpJ3ZOH0pj3zEoRAiGOJQpPvb4VKX9GKRFUl/9Pyr66oprwfbd7awQ86i2PtMr8vQO6Wqzq31sx4uEIa+8Pwtw85e+N8beF+vfpuyOsHS108A1K15xrd9dpL4PDbRGwxTuguE9m99L8A/i8GOvG6LpAvrKoB74mEXSCIBekrNZ8/cLgjsTYC5Wg8F6ZhVaDL0iE+dCbFh80pNCn1gc29iNJ5+pZrO0Ed34fzKfU59mYa2we/VjSbBqwy6WpzAf1KQxBezHtEuPjOtlLu2IJa7uVcxVKZ9lcJr8xsVgGdzztP/QbxrwfTGnZSVBLqW1zYPpyHwgQ6ybG+FWG7n3XxbnWyHjOYfrAJ5//CWNWvMFDq7KewmX2zvxQBALEsokxG965qSoJP/RfunI+jcgCD0xfJtZvBBdE2fx5+5sWk8+uhYEAQ7yMNVdqpzO082i9jrTz+fBF4N6Zq3T1Ee+iCBW+d2/Vz7H/yN/58P6T3lrBycXzKDlWeE/xvQin38KT2rvI5Oy9CFE4EIsKk6AWzdNoHQ9Ug8l1TMxTPhiA8gIBzn66zu6xG4BdBRWho8wYMHqRZ156LxTWr9DZn3YOrb+rtdskq/J7/mKhLGT55xrA8eZ2lPkSIRr9UakT35m1MULfxfTCalm4cEqdnfvsdx64Zwhrd3nT6jZobRc4vPBOVbjylDrb/MccWn8TrMNYX2IjeqVOqOqUOjs6sw3DV0Aj1xIjxE5eOBr86k1bdUqdfXJxnbG7I6wZy63SeV48/m7dMPVS6sxsmseYL1I7zSp6eHGQEPVT6qx56BaM+RaQSLWD5okfB44xsM1O7WF2as/1DP0Pa/h44KB7qbgAAAAASUVORK5CYII=',
			iconSize: [25, 41],
			iconAnchor: [12, 41],
			popupAnchor: [1, -34]
		});
		//leaflet.circle([data[6], data[7]], {color: 'green', fillColor: '#2fff', fillOpacity: 0.1, radius: 150}).addTo(this.map).bindPopup("<b>" + data[4] +  "</b><br>" + data[5]);
		leaflet.marker([data[6], data[7]], {icon: greenIcon}).addTo(this.map).bindPopup("<b>" + data[4] +  "</b><br>" + data[5] + "<br><b>" + data[8] + "<br>" + data[9] + " "  + data[10] + "<br></b>");
	}

	async loadmap() {
		this.map = leaflet.map("mapcontact").setView([50.888, 10], 5.3); //fitWorld() 50.388,6.828&zoom=5.69;
		leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 16
		}).addTo(this.map);

		let markerGroup = leaflet.featureGroup();
		let lat = await this.storage.get('lat');
		let lng = await this.storage.get('lng');
		let marker: any = leaflet.marker([await this.storage.get('lat'), await this.storage.get('lng')]);
		marker.bindPopup('Dein Standort').openPopup();
		markerGroup.addLayer(marker);
		this.map.addLayer(markerGroup);
		this.addmarker();
		this.map.setView([await this.storage.get('lat'), await this.storage.get('lng')], 10);
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
					map.setView([lat, lng], 10);
				}

				return container;
			}
		});
		this.map.addControl(new customControl());
	}

}
