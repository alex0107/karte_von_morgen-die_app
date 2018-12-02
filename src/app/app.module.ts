import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';

import { EventPage } from '../pages/event/event';
import { UnternehmenPage } from '../pages/unternehmen/unternehmen';
import { HomePage } from '../pages/home/home';
import { CardPage } from '../pages/card/card';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { SearchPage } from '../pages/search/search';
import { TermsPage } from '../pages/terms/terms';
import { EntryPage } from '../pages/entry/entry';
import { IntroPage } from '../pages/intro/intro';
import { EntrycardPage } from '../pages/entrycard/entrycard';

import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { Diagnostic } from '@ionic-native/diagnostic';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { Network } from '@ionic-native/network';

import { IonicStorageModule } from '@ionic/storage';
import { LaunchNavigator } from '@ionic-native/launch-navigator';

@NgModule({
  declarations: [
    MyApp,
    EventPage,
    UnternehmenPage,
    HomePage,
    CardPage,
    AboutusPage,
    SearchPage,
    TermsPage,
    EntryPage,
    IntroPage,
    EntrycardPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EventPage,
    UnternehmenPage,
    HomePage,
    CardPage,
    AboutusPage,
    SearchPage,
    TermsPage,
    EntryPage,
    IntroPage,
    EntrycardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    File,
    Diagnostic,
    LocationAccuracy,
    Network,  
    LaunchNavigator,  
    BackgroundGeolocation,  
    FileTransfer,
    NativeGeocoder
  ]
})
export class AppModule {}
