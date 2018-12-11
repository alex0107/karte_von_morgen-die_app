# Karte von morgen - die App
Die App zur Karte von morgen

written with [IONIC-Framework](https://ionicframework.com/).


## Installation ##

First you have to install [AndroidStudio](https://developer.android.com/studio/) and [npm](https://nodejs.org/en/). Afterwards set up Ionic and cordova to your global packages.

```
$ npm install -g ionic cordova
```

All packages and plugins should be installed.
Just connect your Android-Phone and build with

```
$ sh createandroid.sh
```
or
```
$ ionic cordova run android
```

## Used Plugins ##

* [Diagnostic](https://ionicframework.com/docs/native/diagnostic/)
* [Network](https://ionicframework.com/docs/native/network/)
* [Background Geolocation](https://ionicframework.com/docs/native/background-geolocation/)
* [Native Geocoder](https://ionicframework.com/docs/native/native-geocoder/)
* [File Transfer](https://ionicframework.com/docs/native/file-transfer/)
* [Location Accuracy](https://ionicframework.com/docs/native/location-accuracy/)
* [Launch Navigator](https://ionicframework.com/docs/native/launch-navigator/)
* [Storage](https://ionicframework.com/docs/storage/)

* papaparse:
```
$ npm install papaparse --save
$ npm install @types/papaparse --save
```

* leaflet:
```
$ npm install leaflet --save
```

* jQuery:
```
$ npm install jquery --save
$ npm install @types/jquery
```

## Used Map ##

We are using the map "streets" from [Mapbox](https://www.mapbox.com/)
