var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
/**
 * @name Native Geocoder
 * @description
 * Cordova plugin for native forward and reverse geocoding
 *
 * @usage
 * ```typescript
 * import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
 *
 * constructor(private nativeGeocoder: NativeGeocoder) { }
 *
 * ...
 *
 * let options: NativeGeocoderOptions = {
 *     useLocale: true,
 *     maxResults: 5
 * };
 *
 * this.nativeGeocoder.reverseGeocode(52.5072095, 13.1452818, options)
 *   .then((result: NativeGeocoderReverseResult[]) => console.log(JSON.stringify(result[0])))
 *   .catch((error: any) => console.log(error));
 *
 * this.nativeGeocoder.forwardGeocode('Berlin', options)
 *   .then((coordinates: NativeGeocoderForwardResult[]) => console.log('The coordinates are latitude=' + coordinates[0].latitude + ' and longitude=' + coordinates[0].longitude))
 *   .catch((error: any) => console.log(error));
 * ```
 * @interfaces
 * NativeGeocoderReverseResult
 * NativeGeocoderForwardResult
 * NativeGeocoderOptions
 */
var NativeGeocoder = (function (_super) {
    __extends(NativeGeocoder, _super);
    function NativeGeocoder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Reverse geocode a given latitude and longitude to find location address
     * @param latitude {number} The latitude
     * @param longitude {number} The longitude
     * @param options {NativeGeocoderOptions} The options
     * @return {Promise<NativeGeocoderReverseResult[]>}
     */
    /**
       * Reverse geocode a given latitude and longitude to find location address
       * @param latitude {number} The latitude
       * @param longitude {number} The longitude
       * @param options {NativeGeocoderOptions} The options
       * @return {Promise<NativeGeocoderReverseResult[]>}
       */
    NativeGeocoder.prototype.reverseGeocode = /**
       * Reverse geocode a given latitude and longitude to find location address
       * @param latitude {number} The latitude
       * @param longitude {number} The longitude
       * @param options {NativeGeocoderOptions} The options
       * @return {Promise<NativeGeocoderReverseResult[]>}
       */
    function (latitude, longitude, options) { return; };
    /**
     * Forward geocode a given address to find coordinates
     * @param addressString {string} The address to be geocoded
     * @param options {NativeGeocoderOptions} The options
     * @return {Promise<NativeGeocoderForwardResult[]>}
     */
    /**
       * Forward geocode a given address to find coordinates
       * @param addressString {string} The address to be geocoded
       * @param options {NativeGeocoderOptions} The options
       * @return {Promise<NativeGeocoderForwardResult[]>}
       */
    NativeGeocoder.prototype.forwardGeocode = /**
       * Forward geocode a given address to find coordinates
       * @param addressString {string} The address to be geocoded
       * @param options {NativeGeocoderOptions} The options
       * @return {Promise<NativeGeocoderForwardResult[]>}
       */
    function (addressString, options) { return; };
    NativeGeocoder.decorators = [
        { type: Injectable },
    ];
    __decorate([
        Cordova({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number, Object]),
        __metadata("design:returntype", Promise)
    ], NativeGeocoder.prototype, "reverseGeocode", null);
    __decorate([
        Cordova({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], NativeGeocoder.prototype, "forwardGeocode", null);
    /**
     * @name Native Geocoder
     * @description
     * Cordova plugin for native forward and reverse geocoding
     *
     * @usage
     * ```typescript
     * import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
     *
     * constructor(private nativeGeocoder: NativeGeocoder) { }
     *
     * ...
     *
     * let options: NativeGeocoderOptions = {
     *     useLocale: true,
     *     maxResults: 5
     * };
     *
     * this.nativeGeocoder.reverseGeocode(52.5072095, 13.1452818, options)
     *   .then((result: NativeGeocoderReverseResult[]) => console.log(JSON.stringify(result[0])))
     *   .catch((error: any) => console.log(error));
     *
     * this.nativeGeocoder.forwardGeocode('Berlin', options)
     *   .then((coordinates: NativeGeocoderForwardResult[]) => console.log('The coordinates are latitude=' + coordinates[0].latitude + ' and longitude=' + coordinates[0].longitude))
     *   .catch((error: any) => console.log(error));
     * ```
     * @interfaces
     * NativeGeocoderReverseResult
     * NativeGeocoderForwardResult
     * NativeGeocoderOptions
     */
    NativeGeocoder = __decorate([
        Plugin({
            pluginName: 'NativeGeocoder',
            plugin: 'cordova-plugin-nativegeocoder',
            pluginRef: 'nativegeocoder',
            repo: 'https://github.com/sebastianbaar/cordova-plugin-nativegeocoder',
            platforms: ['iOS', 'Android']
        })
    ], NativeGeocoder);
    return NativeGeocoder;
}(IonicNativePlugin));
export { NativeGeocoder };
//# sourceMappingURL=index.js.map