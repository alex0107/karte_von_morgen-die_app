#!/bin/bash
git clone https://github.com/alex0107/karte_von_morgen-die_app.git
# Default Package
npm install -g ionic cordova
# Papaparse
npm install papaparse --save
npm install @types/papaparse --save
# Leaflet
npm install leaflet --save
# jQuery
npm install jquery --save
npm install @types/jquery
# Diagnostic
# ionic cordova plugin add cordova.plugins.diagnostic
npm install --save @ionic-native/diagnostic
# Network
# ionic cordova plugin add cordova-plugin-network-information
npm install --save @ionic-native/network
# Background Geolocation
#ionic cordova plugin add cordova-plugin-mauron85-background-geolocation
npm install --save @ionic-native/background-geolocation
# Native Geocoder
#ionic cordova plugin add cordova-plugin-nativegeocoder
npm install --save @ionic-native/native-geocoder
# File Transfer
#ionic cordova plugin add cordova-plugin-file-transfer
npm install --save @ionic-native/file-transfer
# Location Accuracy
#ionic cordova plugin add cordova-plugin-request-location-accuracy
npm install --save @ionic-native/location-accuracy
# Launch Navigator
#ionic cordova plugin add uk.co.workingedge.phonegap.plugin.launchnavigator
npm install --save @ionic-native/launch-navigator
# Storage
#ionic cordova plugin add cordova-sqlite-storage
npm install --save @ionic/storage
