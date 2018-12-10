import { Component,  ViewChild, ElementRef, Injectable } from '@angular/core';
import { App, NavController, Platform, AlertController, NavParams } from 'ionic-angular';
import leaflet from 'leaflet';
import * as $ from 'jquery';

import { SearchPage } from '../search/search';
import { EntryPage } from '../entry/entry';

@Component({
	selector: 'page-entrycard',
	templateUrl: 'entrycard.html'
})
export class EntrycardPage {
	@ViewChild('mapcontact') mapContainer: ElementRef;
	map: any;
	task: any;
	item: any  = [];

	constructor(public app: App, public navCtrl: NavController, private platform: Platform, public navParams: NavParams) 
	{
		this.item = navParams.get('entries');
	}


	ionViewDidEnter() {
		this.platform.ready().then(() => {
			if(!this.map) {
				this.loadmap();
			}
		});
	}

	addmymarkers(data:any) {
		var Icon:any;
		if(data[13] === 'Initiative') {

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
		var marker = leaflet.marker([data[6], data[7]], {icon: Icon}).addTo(this.map);
		var div_popup = leaflet.DomUtil.create('div', 'abcpopup');

		let self = this;

		div_popup.innerHTML = "<b>" + data[4] +  "</b><br>" + data[5] + "<br><b>" + data[8] + "<br>" + data[9] + " "  + data[10] + '<a class="more" style="position: absolute; right: 1em;">mehr...</a>';
		$('a.more', div_popup).on('click', function() {
			self.gotoEntry(data);
		});

		marker.bindPopup(div_popup);
	}

	gotoEntry(event) {
		console.log('8218 GotoEntryPage');
		this.navCtrl.push(EntryPage, {entry: event, page: 'home'});
	}

	async loadmap() {
		this.map = leaflet.map("mapentry", {zoomControl: false}).setView([50.888, 10], 5.3);
		leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 16
		}).addTo(this.map);

		leaflet.control.zoom({
			position:'bottomright'
		}).addTo(this.map);

		for(let it of this.item) {
			this.addmymarkers(it);
		}
	}
}
