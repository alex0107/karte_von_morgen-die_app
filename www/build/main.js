webpackJsonp([0],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_papaparse__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_papaparse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_papaparse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__search_search__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_diagnostic__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_location_accuracy__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_background_geolocation__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_network__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_native_geocoder__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__entry_entry__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
















var HomePage = /** @class */ (function () {
    function HomePage(app, navCtrl, file, transfer, platform, storage, splashScreen, diagnostic, locationAccuracy, network, elementRef, backgroundGeolocation, loading, alertCtrl, nativeGeocoder) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.file = file;
        this.transfer = transfer;
        this.platform = platform;
        this.storage = storage;
        this.splashScreen = splashScreen;
        this.diagnostic = diagnostic;
        this.locationAccuracy = locationAccuracy;
        this.network = network;
        this.elementRef = elementRef;
        this.backgroundGeolocation = backgroundGeolocation;
        this.loading = loading;
        this.alertCtrl = alertCtrl;
        this.nativeGeocoder = nativeGeocoder;
        this.deleted = 0;
        this.location = false;
        this.internet = false;
        this.popup = 0;
    }
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.platform.ready().then(function () {
            console.log('8218 Home');
            _this.setoldloc();
            if (_this.network.type === 'none') {
                alert('Die App benötigt eine aktive Internetverbindung! Bitte mobile Daten oder WiFi aktivieren!');
                _this.ionViewDidEnter();
            }
            else {
                _this.downloadalldata();
                //*** Dummy-Funktion wegen Appstoreconnect AppStore (Backgroundmode und "Immer verwenden") ***//
                var config = {
                    desiredAccuracy: 10,
                    stationaryRadius: 20,
                    distanceFilter: 30,
                    stopOnTerminate: false,
                };
                _this.backgroundGeolocation.configure(config)
                    .subscribe(function (location) {
                    console.log(location);
                    _this.backgroundGeolocation.finish(); // FOR IOS ONLY
                });
                _this.backgroundGeolocation.start();
                console.log('8218 map: ' + _this.map);
                _this.loadmap(10);
            }
        });
    };
    HomePage.prototype.setoldloc = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.get('first')];
                    case 1:
                        _a.firsttime = _d.sent();
                        _b = this;
                        return [4 /*yield*/, this.storage.get('lat')];
                    case 2:
                        _b.oldlat = _d.sent();
                        _c = this;
                        return [4 /*yield*/, this.storage.get('lng')];
                    case 3:
                        _c.oldlong = _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.openSearchPage = function () {
        console.log('8218 OpenSearchPage');
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_9__search_search__["a" /* SearchPage */]);
    };
    HomePage.prototype.addmarker = function () {
        var _this = this;
        var path = null;
        console.log('8218 Addmarker');
        if (this.platform.is('ios')) {
            path = this.file.dataDirectory + 'data/';
        }
        else if (this.platform.is('android')) {
            path = this.file.externalDataDirectory + 'data/';
        }
        console.log('8218 Addmarker Path: ' + path);
        this.file.readAsText(path, 'data.csv')
            .then(function (fileStr) {
            var parsedData = __WEBPACK_IMPORTED_MODULE_3_papaparse__["parse"](fileStr).data;
            parsedData.splice(0, 1);
            console.log('8218 Addmarker Parse');
            for (var _i = 0, parsedData_1 = parsedData; _i < parsedData_1.length; _i++) {
                var parst = parsedData_1[_i];
                if (parst[13] == 'Initiative') {
                    _this.addmymarkers(parst, 1);
                }
                else if (parst[13] == 'Unternehmen') {
                    _this.addmymarkers(parst, 0);
                }
                else {
                }
            }
            console.log('8218 Addmarker Ready');
        }).catch(function (err) {
            console.log('8218 Addmarker Err: ' + err);
        });
    };
    HomePage.prototype.addmymarkers = function (data, pic) {
        if (data[16] >= 0) {
            var Icon;
            if (pic === 1) {
                Icon = new __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.Icon({
                    iconUrl: 'data:image/png;base64,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',
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34]
                });
            }
            else {
                Icon = new __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.Icon({
                    iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAoCAYAAADt5povAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAG7AAABuwBHnU4NQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAWdEVYdEF1dGhvcgBNYXJrdXMgS29obGhhc2W9p8FDAAAAUnRFWHRDb3B5cmlnaHQAQ0MgQXR0cmlidXRpb24tU2hhcmVBbGlrZSBodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1zYS8zLjAvXoNavAAAA99JREFUWIWdl09oHUUcxz8zsy8eGujFU2yE6slTK0Wpog2iQk+CiAGx5lJKrUnFRmtqBHkmJrQVetA+RQOBFER50oNFoVKxQimKRoUKgorII7YaPKgUieXtzHhY5739M7O7rz/48XbfzPw++/3N/GZ2BXWsvbSVSD2CkA8i2AJiNGmwa1h+xZpzxPo04/t+qQolSltPv30HRMeQ8j6kBPF/d/drbdaNOY/Whxnf9/VgwHZrGDHUQkVPIKVACHpA59ZmocY4Nxi7wkbjIBMT/1QD22/ehGh8gJQ7UCoBOXewtGVhiWsNxlyie+0hHp/qhIHtt27Gis9RaqQHS0Od0jQsBEygVzDdnTw2ueaG9Ee3W8MYziDlSE9JWl0arlTR8w+VXI8g1BlOvbqpCOyKFkJsyw0ogkMgX+qFAMR21PDJbEpXXrudRmMVpSRKQRT5AyuVncd0Ol0afR7HFq3vZOLgaqJQRScQQhYWRfpJ3ZOH0pj3zEoRAiGOJQpPvb4VKX9GKRFUl/9Pyr66oprwfbd7awQ86i2PtMr8vQO6Wqzq31sx4uEIa+8Pwtw85e+N8beF+vfpuyOsHS108A1K15xrd9dpL4PDbRGwxTuguE9m99L8A/i8GOvG6LpAvrKoB74mEXSCIBekrNZ8/cLgjsTYC5Wg8F6ZhVaDL0iE+dCbFh80pNCn1gc29iNJ5+pZrO0Ed34fzKfU59mYa2we/VjSbBqwy6WpzAf1KQxBezHtEuPjOtlLu2IJa7uVcxVKZ9lcJr8xsVgGdzztP/QbxrwfTGnZSVBLqW1zYPpyHwgQ6ybG+FWG7n3XxbnWyHjOYfrAJ5//CWNWvMFDq7KewmX2zvxQBALEsokxG965qSoJP/RfunI+jcgCD0xfJtZvBBdE2fx5+5sWk8+uhYEAQ7yMNVdqpzO082i9jrTz+fBF4N6Zq3T1Ee+iCBW+d2/Vz7H/yN/58P6T3lrBycXzKDlWeE/xvQin38KT2rvI5Oy9CFE4EIsKk6AWzdNoHQ9Ug8l1TMxTPhiA8gIBzn66zu6xG4BdBRWho8wYMHqRZ156LxTWr9DZn3YOrb+rtdskq/J7/mKhLGT55xrA8eZ2lPkSIRr9UakT35m1MULfxfTCalm4cEqdnfvsdx64Zwhrd3nT6jZobRc4vPBOVbjylDrb/MccWn8TrMNYX2IjeqVOqOqUOjs6sw3DV0Aj1xIjxE5eOBr86k1bdUqdfXJxnbG7I6wZy63SeV48/m7dMPVS6sxsmseYL1I7zSp6eHGQEPVT6qx56BaM+RaQSLWD5okfB44xsM1O7WF2as/1DP0Pa/h44KB7qbgAAAAASUVORK5CYII=',
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34]
                });
            }
            var marker = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.marker([data[6], data[7]], { icon: Icon }).addTo(this.map);
            var div_popup = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.DomUtil.create('div', 'abcpopup');
            var self_1 = this;
            div_popup.innerHTML = "<b>" + data[4] + "</b><br>" + data[5] + "<br><b>" + data[8] + "<br>" + data[9] + " " + data[10] + '<a class="more" style="position: absolute; right: 1em;">mehr...</a>';
            __WEBPACK_IMPORTED_MODULE_4_jquery__('a.more', div_popup).on('click', function () {
                self_1.gotoEntry(data);
            });
            marker.bindPopup(div_popup);
        }
    };
    HomePage.prototype.gotoEntry = function (event) {
        console.log('8218 GotoEntryPage');
        this.popup = 1;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__entry_entry__["a" /* EntryPage */], { entry: event, page: 'home' });
    };
    HomePage.prototype.locationbutton = function () {
        console.log('8218 Locate-Button was pressed');
        this.loadmap(17);
    };
    HomePage.prototype.loadmap = function (zoommax) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.diagnostic.isLocationEnabled()
                            .then(function (state) {
                            if (_this.popup == 0) {
                                console.log('8218 Location: ' + state);
                                _this.loader = _this.loading.create({
                                    content: 'Ermittle Standort...',
                                });
                            }
                            _this.loader.present().then(function () {
                                _this.backgroundGeolocation.stop();
                                if (_this.map === undefined) {
                                    _this.map = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.map("map", { zoomControl: false }).setView([50.888, 10], 5.3); //fitWorld() 50.388,6.828&zoom=5.69;
                                    __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.control.zoom({
                                        position: 'bottomright'
                                    }).addTo(_this.map);
                                }
                                var redIcon = new __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.Icon({
                                    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
                                    iconSize: [25, 41],
                                    iconAnchor: [12, 41],
                                    popupAnchor: [1, -34],
                                });
                                console.log('8218 Loadmap');
                                var token = 'pk.eyJ1IjoiYWxleHJlaW5lciIsImEiOiJjanBpb202N2ExOW4xM3hydWZoazk1YnU0In0.feMUrVZ3gEsFsFz6OUZsVw';
                                __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.tileLayer('http://a.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=' + token, {
                                    attributions: '<a class="osm attr" href=https://wikimediafoundation.org/wiki/Maps_Terms_of_Use> Wikimedia </a>',
                                    maxZoom: 17
                                }).addTo(_this.map);
                                /*					leaflet.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png', {
                                    attributions: '<a class="osm attr" href=https://wikimediafoundation.org/wiki/Maps_Terms_of_Use> Wikimedia </a>',
                                    maxZoom: 17
                                }).addTo(this.map);*/
                                if (state === true) {
                                    if (_this.popup == 0) {
                                        console.log('8218 Popup 0');
                                        _this.map.locate({
                                            setView: true,
                                            enableHighAccuracy: true,
                                            timeout: 99999,
                                            maximumAge: 20,
                                            maxZoom: zoommax
                                        }).on('locationfound', function (e) {
                                            console.log('8218 Marker: ' + _this.marker);
                                            if (_this.marker !== undefined) {
                                                _this.map.removeLayer(_this.marker);
                                            }
                                            var markerGroup = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.featureGroup();
                                            _this.marker = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.marker([e.latitude, e.longitude], { icon: redIcon });
                                            _this.statlat = e.latitude;
                                            _this.statlong = e.longitude;
                                            _this.marker.bindPopup('Dein Standort').openPopup();
                                            markerGroup.addLayer(_this.marker);
                                            _this.map.addLayer(markerGroup);
                                            _this.downloadData();
                                            _this.loader.dismiss();
                                        }).on('locationerror', function (err) {
                                            _this.loader.dismiss();
                                            if (err.message.toString().includes('denied')) {
                                                alert('Die App benötigt Zugriff auf deinen Standort!!');
                                                _this.diagnostic.switchToSettings();
                                            }
                                            else if (err.message.toString().includes('Illegal')) {
                                                alert('Die App benötigt Zugriff auf deinen Standort!!');
                                                _this.diagnostic.switchToSettings();
                                            }
                                            else {
                                                _this.locationinput();
                                            }
                                            console.log('8218 Loadmap locationError: ' + err.message);
                                        });
                                    }
                                    else {
                                        _this.popup = 0;
                                    }
                                }
                                else {
                                    _this.locationinput();
                                }
                            });
                        }).catch(function (e) { return console.error(e); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.locationinput = function () {
        var _this = this;
        this.loader.dismiss();
        var options = {
            useLocale: true,
            maxResults: 5
        };
        var alert = this.alertCtrl.create({
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
                    handler: function (data) {
                        //Nothing to do
                    }
                },
                {
                    text: 'Suchen!',
                    handler: function (data) {
                        console.log('8218 Data: ' + data.location);
                        _this.nativeGeocoder.forwardGeocode(data.location, options)
                            .then(function (coordinates) {
                            console.log('8218 The coordinates are latitude=' + coordinates[0].latitude + ' and longitude=' + coordinates[0].longitude);
                            var redIcon = new __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.Icon({
                                iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
                                iconSize: [25, 41],
                                iconAnchor: [12, 41],
                                popupAnchor: [1, -34],
                            });
                            if (_this.marker !== undefined) {
                                _this.map.removeLayer(_this.marker);
                            }
                            var markerGroup = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.featureGroup();
                            _this.marker = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.marker([coordinates[0].latitude, coordinates[0].longitude], { icon: redIcon });
                            _this.statlat = parseFloat(coordinates[0].latitude).toFixed(6);
                            _this.statlong = parseFloat(coordinates[0].longitude).toFixed(6);
                            _this.marker.bindPopup('Eingegebener Standort').openPopup();
                            markerGroup.addLayer(_this.marker);
                            _this.map.addLayer(markerGroup);
                            _this.map.setView([coordinates[0].latitude, coordinates[0].longitude], 14);
                            _this.downloadData();
                            _this.loader.dismiss();
                        }).catch(function (error) {
                            console.log(error);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.downloadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var path, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        path = null;
                        if (this.platform.is('ios')) {
                            path = this.file.dataDirectory;
                        }
                        else if (this.platform.is('android')) {
                            path = this.file.externalDataDirectory;
                        }
                        console.log('8218 Old: ' + this.oldlat + ' ' + this.oldlong);
                        console.log('8218 New: ' + this.statlat + ' ' + this.statlong);
                        return [4 /*yield*/, this.storage.get('day')];
                    case 1:
                        _a = (_b.sent()) <= new Date().getDate();
                        if (_a) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.storage.get('month')];
                    case 2:
                        _a = (_b.sent()) !== new Date().getMonth();
                        _b.label = 3;
                    case 3:
                        if (!(((_a) && this.deleted === 0) || this.oldlat - 0.2 >= this.statlat || this.oldlat + 0.2 <= this.statlat || this.oldlong - 0.2 >= this.statlong || this.oldlong + 0.2 <= this.statlong)) return [3 /*break*/, 5];
                        console.log('8218 DeleteDir ' + path);
                        return [4 /*yield*/, this.file.removeRecursively(path, 'data').then(function (files) {
                                console.log('8218 Allright, Deleted succes');
                                _this.deleted = 1;
                                _this.oldlat = _this.statlat;
                                _this.oldlong = _this.statlong;
                                _this.downloadData();
                            }).catch(function (err) {
                                console.log('8218 DeleteDir Error: ' + JSON.stringify(err));
                            })];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5:
                        if (this.platform.is('ios')) {
                            path = this.file.dataDirectory + 'data/';
                        }
                        else if (this.platform.is('android')) {
                            path = this.file.externalDataDirectory + 'data/';
                        }
                        console.log('8218 Checkdir');
                        this.file.checkDir(path, '').then(function (response) {
                            console.log('8218 ChechDir: Directory exists' + response);
                            _this.file.checkFile(path, 'data.csv').then(function (files) {
                                console.log("8218 CheckDir: file found data.csv");
                                _this.addmarker();
                            }).catch(function (err) {
                                console.log("8218 CheckDir: data.csv not found ");
                                if (_this.network.type === 'none') {
                                    alert('Die App benötigt eine aktive Internetverbindung! Bitte mobile Daten oder WiFi aktivieren!');
                                    _this.downloadData();
                                }
                                else {
                                    var transfer = _this.transfer.create();
                                    _this.storage.set('day', new Date().getDate() + 3);
                                    _this.storage.set('month', new Date().getMonth());
                                    _this.storage.set('year', new Date().getFullYear());
                                    _this.storage.set('lat', _this.statlat);
                                    _this.storage.set('lng', _this.statlong);
                                    var minlat = _this.statlat - 0.6;
                                    var minlng = _this.statlong - 0.6;
                                    var maxlat = parseFloat(_this.statlat) + 0.6;
                                    var maxlng = parseFloat(_this.statlong) + 0.6;
                                    var transurl = 'http://api.ofdb.io/v0/export/entries.csv?bbox=' + minlat + ',' + minlng + ',' + maxlat + ',' + maxlng;
                                    transfer.download(transurl, path + 'data.csv')
                                        .then(function (entry) {
                                        var url = entry.toURL();
                                        console.log('8218 CheckDir: data.csv path ' + url);
                                        _this.downloadalldata();
                                        _this.addmarker();
                                    }).catch(function (err) {
                                        console.log('8218 Error Checkdir: ' + JSON.stringify(err));
                                    });
                                    _this.deleted = 0;
                                }
                            });
                        }).catch(function (err) {
                            if (_this.platform.is('ios')) {
                                path = _this.file.dataDirectory;
                            }
                            else if (_this.platform.is('android')) {
                                path = _this.file.externalDataDirectory;
                            }
                            console.log('8218 downloaddata: Directory doesn\'t exist' + JSON.stringify(err));
                            _this.file.createDir(path, 'data', false).then(function (response) {
                                console.log('8218 downloaddata: Directory create' + response);
                                _this.downloadData();
                            }).catch(function (err) {
                                console.log('8218 downloadddata: Directory no create' + JSON.stringify(err));
                                //TODO Alert User
                            });
                        });
                        this.splashScreen.hide();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.downloadalldata = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var path;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = null;
                        if (this.platform.is('ios')) {
                            path = this.file.dataDirectory + 'data/';
                        }
                        else if (this.platform.is('android')) {
                            path = this.file.externalDataDirectory + 'data/';
                        }
                        console.log('8218 AllData Download');
                        return [4 /*yield*/, this.file.checkDir(path, '').then(function (response) {
                                console.log('8218 AllData: Directory exists' + response);
                                _this.file.checkFile(path, 'alldata.csv').then(function (files) {
                                    console.log("8218 CheckDir: file found alldata.csv");
                                }).catch(function (err) {
                                    console.log("8218 CheckDir: alldata.csv not found ");
                                    if (_this.network.type === 'none') {
                                        alert('Die App benötigt eine aktive Internetverbindung! Bitte mobile Daten oder WiFi aktivieren!');
                                        _this.downloadalldata();
                                    }
                                    else {
                                        var transfer = _this.transfer.create();
                                        _this.storage.set('day', new Date().getDate() + 3);
                                        _this.storage.set('month', new Date().getMonth());
                                        _this.storage.set('year', new Date().getFullYear());
                                        var transurlall = 'http://api.ofdb.io/v0/export/entries.csv?bbox=47.497972542230855,0.7996758709088782,54.63407558981465,18.307256321725717';
                                        transfer.download(transurlall, path + 'alldata.csv')
                                            .then(function (entry) {
                                            var url = entry.toURL();
                                            console.log('8218 CheckDir: alldata.csv path ' + url);
                                        });
                                    }
                                });
                            }).catch(function (err) {
                                if (_this.platform.is('ios')) {
                                    path = _this.file.dataDirectory;
                                }
                                else if (_this.platform.is('android')) {
                                    path = _this.file.externalDataDirectory;
                                }
                                console.log('8218 downloaddata: Directory doesn\'t exist' + JSON.stringify(err));
                                _this.file.createDir(path, 'data', false).then(function (response) {
                                    console.log('8218 downloaddata: Directory create' + response);
                                    _this.downloadalldata();
                                }).catch(function (err) {
                                    console.log('8218 downloadddata: Directory no create' + JSON.stringify(err));
                                    //TODO Alert User
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapContainer", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/alex/Desktop/Apps/Fairtrade_Tabs/src/pages/home/home.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Karte</ion-title>\n		<ion-buttons end>\n			<button icon-only ion-button (click)="openSearchPage()">\n				<ion-icon name="ios-search"></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-buttons class="leaflet-bottom leaflet-right" style="margin-bottom: 130px; margin-right: 9px;">\n		<button (click)=\'locationinput()\' ion-button icon-only style="width:33px; height=33px; border-color: rgba(0,0,0,0.2); border-width: 1.4px; border-style: solid;" color="light"><ion-icon name="ios-search"></ion-icon></button>\n	</ion-buttons>\n	<ion-buttons class="leaflet-bottom leaflet-right" style="margin-bottom: 90px; margin-right: 9px;">\n		<button (click)=\'locationbutton()\' ion-button icon-only style="width:33px; height=33px; border-color: rgba(0,0,0,0.2); border-width: 1.4px; border-style: solid;" color="light"><img src="../../assets/imgs/location.svg" no-repeat width="15px"></button>\n	</ion-buttons>\n	<div id="map" style="width:100%; height:100%;"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/alex/Desktop/Apps/Fairtrade_Tabs/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_diagnostic__["a" /* Diagnostic */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_location_accuracy__["a" /* LocationAccuracy */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 125:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 125;

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 166;

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntrycardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entry_entry__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var EntrycardPage = /** @class */ (function () {
    function EntrycardPage(app, navCtrl, platform, navParams) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.item = [];
        this.item = navParams.get('entries');
    }
    EntrycardPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.platform.ready().then(function () {
            if (!_this.map) {
                _this.loadmap();
            }
        });
    };
    EntrycardPage.prototype.addmymarkers = function (data) {
        var Icon;
        if (data[13] === 'Initiative') {
            Icon = new __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.Icon({
                iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAoCAYAAADt5povAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAG7AAABuwBHnU4NQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAWdEVYdEF1dGhvcgBNYXJrdXMgS29obGhhc2W9p8FDAAAAY3RFWHRDb3B5cmlnaHQAQ0MgQXR0cmlidXRpb24tTm9uQ29tbWVyY2lhbC1TaGFyZUFsaWtlIGh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LW5jLXNhLzMuMC/eBBrlAAAFJUlEQVRYhZ1XbYhWRRR+zsxdV9mFLUwis8D61S8NqQypRSIwwkyyhcgklqKIvty+BP+8rRnZDxFqjRIMBQmKopaCln5sZVbKVrBBUBGxmFuCtu6uq7XvnHP6ce/Mnbnvu18NDHM/5pznPOfrziXMYxw+3rGSbMs9ILodRlcAuKp4dRJCf7DqZ4br72+7afz3uXTRbC/fPrH0BmOwxxhaTwYgymc8VAEVQBRQ0UF19NyDa898tyDAvsFl7Uvapc8SHjCWyBiADGCIgAhU1QMqRApgUWHBoaw1e2LbqtNTcwIe+nrplWzxkbVYYyzBGMCvgaGXKgAjMDADwgpmGlZ2dz207tzIjIBvfnXp1Zk139gMy40lWFuCGQsQ5deJOyOGwgCzhpUZo2Za13Z3/n3SywTxvsFl7ZaonwyWEwHBjQWYMd4AwGaAtQj3wQOmlCMCDGE5Z+g/PHB5WwNgS+b6YGgVEUCGCgEqlFBQbC3lABkheMHkMn6NdRBh9YUl9dcTl77xxSXXW2uGrCVjM8BmuaJ8JZgMBRBCLAEft8iNLo9hk1XV8Y2Prh8fMgBARHvJJ2GY3lLAUOzeiKUtPVBhVc6cFSnZPQBArw10rGxZbH+zGShhllERq2It2NoMIXGYAYnZuJytc/4+faeOrzXGmnvTbE0rJbIyWJ0zo7REItHwuNokYDdnINxWfRzvVM2faFQGIhpqsEEU5X5U30M2ZPB9USsb4ntfb6oQofweZdKEeiyMSiyJ9CjoukwVK5qxUFWoUq7UACSAUC6mUZb6DlPKVPQEvQpVXJaVfqOISeQ+VZAQhApXRx73XSYw9WwFFQaB5b9GFSNxi4rXuEdK6JEKSabfp2H1ca4ar4oRo4KjyUOJG3LZIyXul66YjNCsS+Miplq5VjlqVPBxaMAhMWKwtDF7hswKcf66NCrENI5tsULMJ2bs+NinKhgRTS0smaF0ncunBwgMRUu3V2IaZfHJKybHBkytBlHRg1XLJMROE3bxjOMYgL2RotXYHujqAhsAYGQHRFAPzGJWUXMOiiOmcRw58ogmoHBctweB4vO0fcOZP1XkvZJVZGUEGsevabZGCVSCAsLybs/Gs6cCIACgrjURrUvsmvAFTxmGmbCME6hMNBVlkPR6mAD41MaJX0VwKK65OD4hdq5kFTLVpV7hqJRY6ODTd0z+3AAIAOpsTRgXk0TgUiG7tA5TxprEOk9A/UenaVeMkQD2bDx7igX7RQAWTRW6NH7NMlUqrnVMfc/cXR6gGgABgDl7URijwh60kqHRrMaQ0+Q57S6m7JoCvrDpzKRzsqNZ/IT9V1wTxmmW5vuV9dkdXWPjVf1NT96qoFc/7Bg0Bp3+fBOfuNPN8ecoLwUFHXt+07lbiBo/wQ0MAYAI6tg8yQ4uSXkXx6yxp0qeSM45eqwZ2IyAALBzy9gws+5JM7axDiW6zg9Q+srOLWPDM+mdERAA6pjoZaYfPYsQOxfdp3H8yV2Y2D2bzll/1wCgdqRttSF7gggtoEYBf1hShROim2v3jQ/Nps/OBfj5B/W/Oje3LlLVW5F8TKv/hrS7dv/Ekbn0zepSP0anJnrF6fdcqUVfh+IwjNaJl+aja16Abz2CurJ2C2td/Im6rEOnde6udWF6PrrmdKkfX/bXT6+7c1Gmis7YpVDs2v3w1Dvz1TMvhn60jp7fJYxvozocWtRx/uWF6JgzS6tj+/7F11i1PwBqRO2avY9P/rJQHQsePfvatvbsa9v6f2T/A3sKgoTavqdJAAAAAElFTkSuQmCC',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34]
            });
        }
        else {
            Icon = new __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.Icon({
                iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAoCAYAAADt5povAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAG7AAABuwBHnU4NQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAWdEVYdEF1dGhvcgBNYXJrdXMgS29obGhhc2W9p8FDAAAAUnRFWHRDb3B5cmlnaHQAQ0MgQXR0cmlidXRpb24tU2hhcmVBbGlrZSBodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1zYS8zLjAvXoNavAAAA99JREFUWIWdl09oHUUcxz8zsy8eGujFU2yE6slTK0Wpog2iQk+CiAGx5lJKrUnFRmtqBHkmJrQVetA+RQOBFER50oNFoVKxQimKRoUKgorII7YaPKgUieXtzHhY5739M7O7rz/48XbfzPw++/3N/GZ2BXWsvbSVSD2CkA8i2AJiNGmwa1h+xZpzxPo04/t+qQolSltPv30HRMeQ8j6kBPF/d/drbdaNOY/Whxnf9/VgwHZrGDHUQkVPIKVACHpA59ZmocY4Nxi7wkbjIBMT/1QD22/ehGh8gJQ7UCoBOXewtGVhiWsNxlyie+0hHp/qhIHtt27Gis9RaqQHS0Od0jQsBEygVzDdnTw2ueaG9Ee3W8MYziDlSE9JWl0arlTR8w+VXI8g1BlOvbqpCOyKFkJsyw0ogkMgX+qFAMR21PDJbEpXXrudRmMVpSRKQRT5AyuVncd0Ol0afR7HFq3vZOLgaqJQRScQQhYWRfpJ3ZOH0pj3zEoRAiGOJQpPvb4VKX9GKRFUl/9Pyr66oprwfbd7awQ86i2PtMr8vQO6Wqzq31sx4uEIa+8Pwtw85e+N8beF+vfpuyOsHS108A1K15xrd9dpL4PDbRGwxTuguE9m99L8A/i8GOvG6LpAvrKoB74mEXSCIBekrNZ8/cLgjsTYC5Wg8F6ZhVaDL0iE+dCbFh80pNCn1gc29iNJ5+pZrO0Ed34fzKfU59mYa2we/VjSbBqwy6WpzAf1KQxBezHtEuPjOtlLu2IJa7uVcxVKZ9lcJr8xsVgGdzztP/QbxrwfTGnZSVBLqW1zYPpyHwgQ6ybG+FWG7n3XxbnWyHjOYfrAJ5//CWNWvMFDq7KewmX2zvxQBALEsokxG965qSoJP/RfunI+jcgCD0xfJtZvBBdE2fx5+5sWk8+uhYEAQ7yMNVdqpzO082i9jrTz+fBF4N6Zq3T1Ee+iCBW+d2/Vz7H/yN/58P6T3lrBycXzKDlWeE/xvQin38KT2rvI5Oy9CFE4EIsKk6AWzdNoHQ9Ug8l1TMxTPhiA8gIBzn66zu6xG4BdBRWho8wYMHqRZ156LxTWr9DZn3YOrb+rtdskq/J7/mKhLGT55xrA8eZ2lPkSIRr9UakT35m1MULfxfTCalm4cEqdnfvsdx64Zwhrd3nT6jZobRc4vPBOVbjylDrb/MccWn8TrMNYX2IjeqVOqOqUOjs6sw3DV0Aj1xIjxE5eOBr86k1bdUqdfXJxnbG7I6wZy63SeV48/m7dMPVS6sxsmseYL1I7zSp6eHGQEPVT6qx56BaM+RaQSLWD5okfB44xsM1O7WF2as/1DP0Pa/h44KB7qbgAAAAASUVORK5CYII=',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34]
            });
        }
        var marker = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.marker([data[6], data[7]], { icon: Icon }).addTo(this.map);
        var div_popup = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.DomUtil.create('div', 'abcpopup');
        var self = this;
        div_popup.innerHTML = "<b>" + data[4] + "</b><br>" + data[5] + "<br><b>" + data[8] + "<br>" + data[9] + " " + data[10] + '<a class="more" style="position: absolute; right: 1em;">mehr...</a>';
        __WEBPACK_IMPORTED_MODULE_3_jquery__('a.more', div_popup).on('click', function () {
            self.gotoEntry(data);
        });
        marker.bindPopup(div_popup);
    };
    EntrycardPage.prototype.gotoEntry = function (event) {
        console.log('8218 GotoEntryPage');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__entry_entry__["a" /* EntryPage */], { entry: event, page: 'home' });
    };
    EntrycardPage.prototype.loadmap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, it;
            return __generator(this, function (_b) {
                this.map = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.map("mapentry", { zoomControl: false }).setView([50.888, 10], 5.3);
                __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
                    maxZoom: 16
                }).addTo(this.map);
                __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.control.zoom({
                    position: 'bottomright'
                }).addTo(this.map);
                for (_i = 0, _a = this.item; _i < _a.length; _i++) {
                    it = _a[_i];
                    this.addmymarkers(it);
                }
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mapcontact'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], EntrycardPage.prototype, "mapContainer", void 0);
    EntrycardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-entrycard',template:/*ion-inline-start:"/Users/alex/Desktop/Apps/Fairtrade_Tabs/src/pages/entrycard/entrycard.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Sucheregebnisse</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div id="mapentry" style="width:100%; height:100%;"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/alex/Desktop/Apps/Fairtrade_Tabs/src/pages/entrycard/entrycard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], EntrycardPage);
    return EntrycardPage;
}());

//# sourceMappingURL=entrycard.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutusPage = /** @class */ (function () {
    function AboutusPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aboutus',template:/*ion-inline-start:"/Users/alex/Desktop/Apps/Fairtrade_Tabs/src/pages/aboutus/aboutus.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Über uns</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div text-center>\n		<h1>Das Projekt</h1>\n		<p><!-- react-text: 269 -->Neuigkeiten und aktuelles auf<!-- /react-text --><!-- react-text: 270 --> <!-- /react-text --><a target="_blank" href="https://www.facebook.com/vonmorgen">Facebook</a><br><!-- react-text: 273 -->Fortschrittsberichte auf<!-- /react-text --><!-- react-text: 274 --> <!-- /react-text --><a target="_blank" href="https://www.betterplace.org/de/projects/36213/newsroom">unserem Blog auf Betterplace</a></p>\n		<br>\n		<p>Unsere interaktive Karte zeigt dir Orte in deiner Umgebung, an denen man sich schon heute für eine Welt von morgen einsetzt.</p>\n		<p><!-- react-text: 279 -->Du hast eine Initiative, für die du Mitstreiter*innen suchst?<!-- /react-text --><br><!-- react-text: 281 -->Du kennst ein Unternehmen, das nachhaltig wirtschaftet?<!-- /react-text --><br><!-- react-text: 283 -->Auf unserer Website kannst du andere darauf aufmerksam machen – und dich so für einen von Menschen gestalteten Ort einsetzen, der dir persönlich am Herzen liegt.<!-- /react-text --></p>\n		<p>Wir sind auf der Suche nach vielfältigen Ideen, Initiativen und Unternehmen, die den aktuellen sozialen, ökologischen und ökonomischen Umbrüchen alternativ entgegen wirken. Diese möchten wir vernetzten und ihnen möchten wir einen gemeinsamen Online-Auftritt und damit eine erhöhte Aufmerksamkeit ermöglichen.</p>\n		<p>Nach dem Wiki-Prinzip können alle Nutzer*innen, Initiativen und Unternehmen sich und andere auf der Karte eintragen und so ihre Mitmenschen erreichen. Doch von morgen ist mehr als eine Onlineplattform: Regionalpilot*innen sichern vor Ort die Qualität der Karteneinträge und haben neben einer redaktionellen Funktion die Aufgabe durch Bildungsveranstaltungen und Aktionen den regionalen Austausch zwischen Bürger*innen, Initiativen und Unternehmen zu stärken.</p>\n		<p>von morgen fragt nach Werten, die unsere Gesellschaft fundieren und bewegen. Wir zeigen Menschen, die Guten tun, wo es Gutes gibt.</p>\n		<img class="landing-img" src="../../assets/imgs/aboutus.jpg">\n		<br>\n		<br>\n		<h3>Hintergründe und Visionen</h3>\n		<a target="_blank" href="http://bildungsagenten.org/kartevonmorgen/">Was will die Karte von morgen?</a>\n		<br>\n		<a target="_blank" href="http://bildungsagenten.org/kartevonmorgen/2/">Was sind die Positivfaktoren?</a>\n		<br>\n		<a target="_blank" href="http://bildungsagenten.org/kartevonmorgen/3/">Was sind Regionalpilot*innen bzw. Themenpilot*innen?</a>\n		<br>\n		<a target="_blank" href="http://bildungsagenten.org/kartevonmorgen/3/#Widget_zum_Einbetten">Wie kann ich die Karte auf meiner Homepage einbetten?</a>\n		<br>\n		<a target="_blank" href="http://bildungsagenten.org/kartevonmorgen/4/">Wie kann ich mitmachen oder die Karte von morgen unterstützen?</a>\n		<br>\n		<p><br><i class="fa fa-facebook"></i><!-- react-text: 304 --> <!-- /react-text --><a target="_blank" href="https://www.facebook.com/vonmorgen">facebook.com/vonmorgen</a><br><i class="fa fa-envelope-o"></i><!-- react-text: 308 --> <!-- /react-text --><a target="_blank" href="mailto:info@kartevonmorgen.org">info@kartevonmorgen.org</a><br></p>\n		<br>\n		<br>\n		<h3>Wir lieben Open Source!</h3>\n		<p>Wir wollen mit gutem Beispiel vorangehen und entwickeln daher die Software transparent und offen. Den Quellcode des Gemeinschaftsprojekts findest du unter:</p>\n		<p><i class="fa fa-github"></i><!-- react-text: 317 --> <!-- /react-text --><a target="_blank" href="https://github.com/flosse/kartevonmorgen">github.com/flosse/kartevonmorgen</a></p>\n		<img class="landing-img" src="../../assets/imgs/aboutus1.jpg">\n		<br>\n		<br>\n		<h3>Workshops und Aktionen von morgen</h3>\n		<p><!-- react-text: 324 -->Gemeinsam mit unserem Partner, dem gemeinnützigen Verein Ideen³ e.V. und der "Ideenwerkstatt Bildungsagenten", bieten wir Workshops zu verschiedenen Themen an, um die sozial-ökologische Transformation zu unterstützen.<!-- /react-text --><br><a target="_blank" href="http://bildungsagenten.org">www.bildungsagenten.org</a></p>\n		<img class="landing-img" src="../../assets/imgs/aboutus2.jpg">\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/alex/Desktop/Apps/Fairtrade_Tabs/src/pages/aboutus/aboutus.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], AboutusPage);
    return AboutusPage;
}());

//# sourceMappingURL=aboutus.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermsPage = /** @class */ (function () {
    function TermsPage(navCtrl, platform) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.version = '0.2';
    }
    TermsPage.prototype.ionViewDidEnter = function () {
    };
    TermsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terms',template:/*ion-inline-start:"/Users/alex/Desktop/Apps/Fairtrade_Tabs/src/pages/terms/terms.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Informationen</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<p>Version {{version}}</p>\n	<p>Entwicklung im Auftrag der "Karte von morgen"</p>\n	<h2>Impressum</h2>\n	<p>Angaben gemäß § 5 TMG</p>\n	<p>Alexander Reiner <br> \n	Neuhofweg 4<br> \n	71729 Erdmannhausen <br> \n	</p>\n	<p><strong>Kontakt:</strong> <br>\n	Telefon: 015221355757<br>\n	E-Mail: <a href=\'mailto:alex@ithomies.de\'>alex@ithomies.de</a>\n	<br><br>\n\n	<h2>Privacy Policy</h2> <p> Alexander Reiner built the Karte von morgen app as a Free app. This SERVICE is provided by\n	Alexander Reiner at no cost and is intended for use as is.\n	</p> <p>This page is used to inform visitors regarding my policies with the collection, use, and disclosure\n	of Personal Information if anyone decided to use my Service.\n	</p> <p>If you choose to use my Service, then you agree to the collection and use of information in\n	relation to this policy. The Personal Information that I collect is used for providing and improving\n	the Service. I will not use or share your information with anyone except as described\n	in this Privacy Policy.\n	</p> <p>The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is\n	accessible at Karte von morgen unless otherwise defined in this Privacy Policy.\n	</p> <p><strong>Information Collection and Use</strong></p> <p>For a better experience, while using our Service, I may require you to provide us with certain\n	personally identifiable information, including but not limited to GPS. The information that I request will be retained on your device and is not collected by me in any way.\n	</p> <p>The app does use third party services that may collect information used to identify you.</p> <div><p>Link to privacy policy of third party service providers used by the app</p> <ul><!----><!----><!----><!----><!----><!----><!----><!----></ul></div> <p><strong>Log Data</strong></p> <p> I want to inform you that whenever you use my Service, in a case of\n	an error in the app I collect data and information (through third party products) on your phone\n	called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address,\n	device name, operating system version, the configuration of the app when utilizing my Service,\n	the time and date of your use of the Service, and other statistics.\n	</p> <p><strong>Cookies</strong></p> <p>Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers.\n	These are sent to your browser from the websites that you visit and are stored on your device\'s internal\n	memory.\n	</p> <p>This Service does not use these “cookies” explicitly. However, the app may use third party code and\n	libraries that use “cookies” to collect information and improve their services. You have the option to\n	either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose\n	to refuse our cookies, you may not be able to use some portions of this Service.\n	</p> <p><strong>Service Providers</strong></p> <p> I may employ third-party companies and individuals due to the following reasons:</p> <ul><li>To facilitate our Service;</li> <li>To provide the Service on our behalf;</li> <li>To perform Service-related services; or</li> <li>To assist us in analyzing how our Service is used.</li></ul> <p> I want to inform users of this Service that these third parties have access to\n	your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However,\n	they are obligated not to disclose or use the information for any other purpose.\n	</p> <p><strong>Security</strong></p> <p> I value your trust in providing us your Personal Information, thus we are striving\n	to use commercially acceptable means of protecting it. But remember that no method of transmission over\n	the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee\n	its absolute security.\n	</p> <p><strong>Links to Other Sites</strong></p> <p>This Service may contain links to other sites. If you click on a third-party link, you will be directed\n	to that site. Note that these external sites are not operated by me. Therefore, I strongly\n	advise you to review the Privacy Policy of these websites. I have no control over\n	and assume no responsibility for the content, privacy policies, or practices of any third-party sites\n	or services.\n	</p> <p><strong>Children’s Privacy</strong></p> <p>These Services do not address anyone under the age of 13. I do not knowingly collect\n	personally identifiable information from children under 13. In the case I discover that a child\n	under 13 has provided me with personal information, I immediately delete this from\n	our servers. If you are a parent or guardian and you are aware that your child has provided us with personal\n	information, please contact me so that I will be able to do necessary actions.\n	</p> <p><strong>Changes to This Privacy Policy</strong></p> <p> I may update our Privacy Policy from time to time. Thus, you are advised to review\n	this page periodically for any changes. I will notify you of any changes by posting\n	the new Privacy Policy on this page. These changes are effective immediately after they are posted on\n	this page.\n	</p> <p><strong>Contact Us</strong></p> <p>If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact\n	me.\n	</p> <p>This privacy policy page was created at <a href="https://privacypolicytemplate.net" target="_blank">privacypolicytemplate.net</a>\n	and modified/generated by <a href="https://app-privacy-policy-generator.firebaseapp.com/" target="_blank">App\n		Privacy Policy Generator</a></p>\n\n	<ion-list>\n	</ion-list>\n</ion-content>\n\n<!--<ion-content>\n  <div id="mapevent" style="width:100%; height:100%;"></div>\n</ion-content>-->\n'/*ion-inline-end:"/Users/alex/Desktop/Apps/Fairtrade_Tabs/src/pages/terms/terms.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], TermsPage);
    return TermsPage;
}());

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IntroPage = /** @class */ (function () {
    function IntroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IntroPage.prototype.ionViewDidLoad = function () {
        console.log('8218 IntroPage');
    };
    IntroPage.prototype.goToHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"/Users/alex/Desktop/Apps/Fairtrade_Tabs/src/pages/intro/intro.html"*/'<ion-slides pager="true">\n\n	<ion-slide>\n		<ion-row>\n			<ion-col>\n				<span>Die Einträge der Karte rund um deinen Standort</span>\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				<img src="../../assets/imgs/slide1.jpg" />\n			</ion-col>\n		</ion-row>\n	</ion-slide>\n\n	<ion-slide>\n		<ion-row>\n			<ion-col>\n				<span>Das Menü ist über die 3 Streifen erreichbar</span>\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				<img src="../../assets/imgs/slide2.jpg" />\n			</ion-col>\n		</ion-row>\n	</ion-slide>\n\n	<ion-slide>\n		<ion-row>\n			<ion-col>\n				<span>Einfach alle Einträge durchsuchen und... </span>\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				<img src="../../assets/imgs/slide3.jpg" />\n			</ion-col>\n		</ion-row>\n	</ion-slide>\n\n	<ion-slide>\n		<ion-row>\n			<ion-col>\n				<span>...anschauen!</span>\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				<img src="../../assets/imgs/slide4.jpg" />\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				<button ion-button round outline (click)="goToHome()">Karte von morgen starten</button>\n			</ion-col>\n		</ion-row>\n	</ion-slide>\n</ion-slides>\n'/*ion-inline-end:"/Users/alex/Desktop/Apps/Fairtrade_Tabs/src/pages/intro/intro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(252);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_background_geolocation__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_geocoder__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_aboutus_aboutus__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_search_search__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_terms_terms__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_entry_entry__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_intro_intro__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_entrycard_entrycard__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_transfer__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_http__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_diagnostic__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_location_accuracy__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_network__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_storage__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_launch_navigator__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_aboutus_aboutus__["a" /* AboutusPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_entry_entry__["a" /* EntryPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_entrycard_entrycard__["a" /* EntrycardPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_21__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_aboutus_aboutus__["a" /* AboutusPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_entry_entry__["a" /* EntryPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_entrycard_entrycard__["a" /* EntrycardPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_geocoder__["a" /* NativeGeocoder */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_aboutus_aboutus__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_terms_terms__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_search_search__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_intro_intro__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, storage) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        if (this.platform.is('android')) {
            this.statusBar.backgroundColorByHexString("#33000000");
        }
        this.initializeApp();
        this.pages = [
            { title: 'zur Karte', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Suche', component: __WEBPACK_IMPORTED_MODULE_7__pages_search_search__["a" /* SearchPage */] },
            { title: 'Über uns', component: __WEBPACK_IMPORTED_MODULE_5__pages_aboutus_aboutus__["a" /* AboutusPage */] }
        ];
    }
    MyApp.prototype.openInfoPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_terms_terms__["a" /* TermsPage */]);
        console.log('8218 OpenInfoPage');
    };
    MyApp.prototype.getstorage = function () {
        var _this = this;
        this.storage.get('introShown').then(function (result) {
            console.log('8218 IntroShown ' + result);
            if (result) {
                console.log('8218 Setting HomePage...');
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
            }
            else {
                console.log('8218 Setting IntroPage...');
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_intro_intro__["a" /* IntroPage */];
                _this.storage.set('introShown', true);
            }
        });
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.getstorage();
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/alex/Desktop/Apps/Fairtrade_Tabs/src/app/app.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n	      Menü\n      </ion-title>\n      <ion-buttons end>\n	      <button icon-only ion-button menuClose (click)="openInfoPage()">\n		      <ion-icon name="ios-information-circle-outline"></ion-icon>\n	      </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n\n\n<ion-content>\n  <ion-item>\n   <img src="assets/imgs/kvm_besch.png">\n  </ion-item>\n\n<!--   <ion-row>\n    <ion-col>\n      <button ion-button icon-start clear small>\n        <ion-icon name="thumbs-up"></ion-icon>\n        <div>12 Likes</div>\n      </button>\n    </ion-col> \n    <ion-col>\n      <button ion-button icon-start clear small>\n        <ion-icon name="text"></ion-icon>\n        <div>4 Comments</div>\n      </button>\n    </ion-col>\n    <ion-col center text-center>\n      <ion-note>\n        11h ago\n      </ion-note>\n    </ion-col>\n  </ion-row>-->\n\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/alex/Desktop/Apps/Fairtrade_Tabs/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 306:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 308:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_papaparse__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_papaparse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_papaparse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entry_entry__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entrycard_entrycard__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, file, platform, storage, loading, navParams) {
        this.navCtrl = navCtrl;
        this.file = file;
        this.platform = platform;
        this.storage = storage;
        this.loading = loading;
        this.navParams = navParams;
        this.items = [];
        this.parsedData = [];
        this.filterdata = [];
        this.show = 0;
        this.loaded = 0;
        this.entfernung = [];
    }
    SearchPage.prototype.setoldloc = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.get('lat')];
                    case 1:
                        _a.oldlat = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.storage.get('lng')];
                    case 2:
                        _b.oldlong = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.get('searchterm')];
                    case 1:
                        _a.oldsearchterm = _b.sent();
                        this.searchTerm = this.navParams.get('searchterm');
                        console.log('8218 Old: ' + this.oldsearchterm + ' New: ' + this.searchTerm);
                        if (this.searchTerm !== undefined) {
                            if (this.searchTerm !== this.oldsearchterm) {
                                this.setFilteredItems();
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.setoldloc();
        });
    };
    SearchPage.prototype.setFilteredItems = function () {
        var _this = this;
        this.loader = this.loading.create({
            content: 'Durchsuche...',
        });
        this.loader.present().then(function () {
            var path = null;
            console.log('8218 SearchTerm: ' + _this.searchTerm);
            if (_this.searchTerm !== undefined) {
                if (_this.platform.is('ios')) {
                    path = _this.file.dataDirectory + 'data/';
                }
                else if (_this.platform.is('android')) {
                    path = _this.file.externalDataDirectory + 'data/';
                }
                _this.file.readAsText(path, 'alldata.csv') //29.11.18 Rücksprache Helmut lokale Einträge (50 Stück begrenzt / nur lokale)
                    .then(function (fileStr) {
                    console.log('8218 AllData Search Start Parsing...');
                    _this.parsedData = __WEBPACK_IMPORTED_MODULE_2_papaparse__["parse"](fileStr).data;
                    _this.parsedData.splice(0, 1);
                    console.log('8218 AllData Search ready');
                    console.log('8218 AllData Filtering...');
                    var tag = 0;
                    _this.storage.set('searchterm', _this.searchTerm);
                    if (_this.searchTerm.includes('#')) {
                        _this.searchTerm = _this.searchTerm.replace('#', '');
                        tag = 1;
                        console.log('8218 SearchTerm: ' + _this.searchTerm);
                    }
                    _this.filterdata = _this.parsedData.filter(function (item) {
                        if (item[4] !== undefined) {
                            if (tag === 1) {
                                if (item[14].toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1) {
                                    item[30] = _this.distance(_this.oldlat, _this.oldlong, item[6], item[7], "K").toFixed(2);
                                    return item[14].toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1;
                                }
                            }
                            else {
                                if (item[10].toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1) {
                                    item[30] = _this.distance(_this.oldlat, _this.oldlong, item[6], item[7], "K").toFixed(2); //Ortschaft durchsuchen
                                    return item[10].toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1;
                                }
                                else if (item[14].toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1) {
                                    item[30] = _this.distance(_this.oldlat, _this.oldlong, item[6], item[7], "K").toFixed(2); //Tag durchsuchen
                                    return item[14].toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1;
                                }
                                else if (item[4].toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1) {
                                    item[30] = _this.distance(_this.oldlat, _this.oldlong, item[6], item[7], "K").toFixed(2);
                                    _this.entfernung.push((_this.distance(_this.oldlat, _this.oldlong, item[6], item[7], "K")).toFixed(2)); //Titel durchsuchen
                                    return item[4].toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1;
                                }
                            }
                        }
                        else {
                            console.log('8218 UNDEFINED');
                        }
                    });
                    _this.filterdata.sort(function (data1, data2) {
                        if (data1[30] < data2[30])
                            return -1;
                        if (data1[30] > data2[30])
                            return 1;
                        return 0;
                    });
                    if (tag === 1) {
                        _this.searchTerm = '#' + _this.searchTerm;
                    }
                    console.log('8218 AllData Ready!');
                    _this.loader.dismiss();
                    _this.show = 1;
                }).catch(function (err) {
                    console.log('8218 Addmarker Err: ' + JSON.stringify(err));
                    _this.loader.dismiss();
                });
            }
            _this.loaded = 1;
        });
    };
    SearchPage.prototype.distance = function (lat1, lon1, lat2, lon2, unit) {
        if ((lat1 == lat2) && (lon1 == lon2)) {
            return 0;
        }
        else {
            var radlat1 = Math.PI * lat1 / 180;
            var radlat2 = Math.PI * lat2 / 180;
            var theta = lon1 - lon2;
            var radtheta = Math.PI * theta / 180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180 / Math.PI;
            dist = dist * 60 * 1.1515;
            if (unit == "K") {
                dist = dist * 1.609344;
            }
            if (unit == "N") {
                dist = dist * 0.8684;
            }
            return dist;
        }
    };
    SearchPage.prototype.showitem = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__entry_entry__["a" /* EntryPage */], { entry: item });
    };
    SearchPage.prototype.ShowCard = function () {
        console.log('8218 ShowCard');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__entrycard_entrycard__["a" /* EntrycardPage */], { entries: this.filterdata });
    };
    SearchPage.prototype.parsedata = function () {
        var _this = this;
        var path = null;
        console.log('8218 Addmarker');
        if (this.platform.is('ios')) {
            path = this.file.dataDirectory + 'data/';
        }
        else if (this.platform.is('android')) {
            path = this.file.externalDataDirectory + 'data/';
        }
        this.file.readAsText(path, 'alldata.csv')
            .then(function (fileStr) {
            console.log('8218 AllData Search Start Parsing...');
            var parsedData = __WEBPACK_IMPORTED_MODULE_2_papaparse__["parse"](fileStr).data;
            parsedData.splice(0, 1);
            console.log('8218 AllData Search Push to Array');
            for (var _i = 0, parsedData_1 = parsedData; _i < parsedData_1.length; _i++) {
                var parst = parsedData_1[_i];
                _this.items.push(parst);
            }
            console.log('8218 Filtering Items...');
            _this.items = _this.items.filter(function (element) {
                return element !== undefined;
            });
            //this.filterdata = this.items;
            console.log('8218 AllData Search ready');
        }).catch(function (err) {
            console.log('8218 Addmarker Err: ' + err);
            _this.loader.dismiss();
        });
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/alex/Desktop/Apps/Fairtrade_Tabs/src/pages/search/search.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  <ion-searchbar [(ngModel)]="searchTerm" (keyup.enter)="setFilteredItems($event)" [showCancelButton]="shouldShowCancel" placeholder="Suche in Einträgen" ></ion-searchbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-list>\n		<ion-item *ngFor="let item of filterdata;  let i = index" (click)=\'showitem(item)\'>\n			<strong>{{item[4]}}</strong> <br/>\n			{{item[5]}}<br/>\n			<p align="right"><small>&asymp; {{item[30]}} km </small></p>\n		</ion-item>\n	</ion-list>\n</ion-content>\n\n<ion-footer>\n	<ion-toolbar>\n		<ion-buttons end>\n			<button ion-button color="save" (click)=\'ShowCard()\' *ngIf="show == true">\n				<span>Zur Karte <ion-icon name="ios-arrow-forward"></ion-icon></span>\n			</button>\n		</ion-buttons>\n	</ion-toolbar>\n</ion-footer>\n<!--<ion-content>\n  <div id="mapevent" style="width:100%; height:100%;"></div>\n</ion-content>-->\n'/*ion-inline-end:"/Users/alex/Desktop/Apps/Fairtrade_Tabs/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EntryPage = /** @class */ (function () {
    function EntryPage(navCtrl, navParams, launchnavigator) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.launchnavigator = launchnavigator;
        this.item = navParams.get('entry');
        this.page = navParams.get('page');
    }
    EntryPage.prototype.ionViewDidLoad = function () {
        console.log('8218 EntryPage');
        this.tags = this.item[14].split(',');
        this.tags.splice(this.tags.length - 1, 1);
    };
    EntryPage.prototype.openNav = function () {
        console.log('8218 OpenNav');
        this.launchnavigator.navigate([this.item[6], this.item[7]]); //6 & 7
    };
    EntryPage.prototype.searchTag = function (event) {
        console.log('8218 Event: ' + event);
        if (this.page == "home") {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */], { searchterm: '#' + event });
        }
        else {
            this.navCtrl.getPrevious().data.searchterm = '#' + event;
            this.navCtrl.pop();
        }
    };
    EntryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-entry',template:/*ion-inline-start:"/Users/alex/Desktop/Apps/Fairtrade_Tabs/src/pages/entry/entry.html"*/'<ion-header>\n\n	<ion-navbar>\n		<ion-title>Eintrag</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div *ngIf="item[13] == \'Unternehmen\'">\n		<span style="color: rgb(0, 152, 137);">Unternehmen</span>\n	</div>\n	<div *ngIf="item[13] == \'Initiative\'">\n		<span style="color: rgb(151,191,13);">Initiative</span>\n	</div>\n	<h2>{{item[4]}}</h2>\n	<p>{{item[5]}}</p>\n\n	<svg aria-hidden="true" data-prefix="fas" data-icon="globe-africa" style="width: 1em; height: 1em;" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm160 215.5v6.93c0 5.87-3.32 11.24-8.57 13.86l-15.39 7.7a15.485 15.485 0 0 1-15.53-.97l-18.21-12.14a15.52 15.52 0 0 0-13.5-1.81l-2.65.88c-9.7 3.23-13.66 14.79-7.99 23.3l13.24 19.86c2.87 4.31 7.71 6.9 12.89 6.9h8.21c8.56 0 15.5 6.94 15.5 15.5v11.34c0 3.35-1.09 6.62-3.1 9.3l-18.74 24.98c-1.42 1.9-2.39 4.1-2.83 6.43l-4.3 22.83c-.62 3.29-2.29 6.29-4.76 8.56a159.608 159.608 0 0 0-25 29.16l-13.03 19.55a27.756 27.756 0 0 1-23.09 12.36c-10.51 0-20.12-5.94-24.82-15.34a78.902 78.902 0 0 1-8.33-35.29V367.5c0-8.56-6.94-15.5-15.5-15.5h-25.88c-14.49 0-28.38-5.76-38.63-16a54.659 54.659 0 0 1-16-38.63v-14.06c0-17.19 8.1-33.38 21.85-43.7l27.58-20.69a54.663 54.663 0 0 1 32.78-10.93h.89c8.48 0 16.85 1.97 24.43 5.77l14.72 7.36c3.68 1.84 7.93 2.14 11.83.84l47.31-15.77c6.33-2.11 10.6-8.03 10.6-14.7 0-8.56-6.94-15.5-15.5-15.5h-10.09c-4.11 0-8.05-1.63-10.96-4.54l-6.92-6.92a15.493 15.493 0 0 0-10.96-4.54H199.5c-8.56 0-15.5-6.94-15.5-15.5v-4.4c0-7.11 4.84-13.31 11.74-15.04l14.45-3.61c3.74-.94 7-3.23 9.14-6.44l8.08-12.11c2.87-4.31 7.71-6.9 12.89-6.9h24.21c8.56 0 15.5-6.94 15.5-15.5v-21.7C359.23 71.63 422.86 131.02 441.93 208H423.5c-8.56 0-15.5 6.94-15.5 15.5z"></path></svg>\n	<a href="{{item[12]}}" target="_blank" style="text-decoration: none;">{{item[12]}}</a><br/>\n\n\n	<svg aria-hidden="true" data-prefix="fas" data-icon="map-marker-alt" style="width: 0.75em;" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>\n	{{item[8]}}, {{item[9]}} {{item[10]}}\n	<br>\n	<svg aria-hidden="true" data-prefix="fas" data-icon="route" style="width: 1em; height: 1em;" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M416 320h-96c-17.6 0-32-14.4-32-32s14.4-32 32-32h96s96-107 96-160-43-96-96-96-96 43-96 96c0 25.5 22.2 63.4 45.3 96H320c-52.9 0-96 43.1-96 96s43.1 96 96 96h96c17.6 0 32 14.4 32 32s-14.4 32-32 32H185.5c-16 24.8-33.8 47.7-47.3 64H416c52.9 0 96-43.1 96-96s-43.1-96-96-96zm0-256c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM96 256c-53 0-96 43-96 96s96 160 96 160 96-107 96-160-43-96-96-96zm0 128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path></svg>\n	<a (click)=\'openNav()\'>Routenplaner<br/></a>\n	<p *ngIf="item[30] !== undefined">Ungefähre Entfernung vom Standort: {{item[30]}} km</p>\n	<br/>\n	<div *ngFor="let tag of tags" style="\n	font-size: 1em;\n	display: inline-block;\n	background: #eaeaea;\n	color: #333;\n	border-radius: 0.3em;\n	padding: 0.2em 0.4em;\n	margin-right: 0.4em;" (click)=\'searchTag(tag)\'>\n		#{{tag}}\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/alex/Desktop/Apps/Fairtrade_Tabs/src/pages/entry/entry.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator__["a" /* LaunchNavigator */]])
    ], EntryPage);
    return EntryPage;
}());

//# sourceMappingURL=entry.js.map

/***/ })

},[230]);
//# sourceMappingURL=main.js.map