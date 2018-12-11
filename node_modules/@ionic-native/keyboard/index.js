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
import { Cordova, CordovaProperty, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
/**
 * @name Keyboard
 * @description
 * Keyboard plugin for Cordova.
 *
 * Requires Cordova plugin: `cordova-plugin-ionic-keyboard`. For more info, please see the [Keyboard plugin docs](https://github.com/ionic-team/cordova-plugin-ionic-keyboard).
 *
 * @usage
 * ```typescript
 * import { Keyboard } from '@ionic-native/keyboard';
 *
 * constructor(private keyboard: Keyboard) { }
 *
 * ...
 *
 * this.keyboard.show();
 *
 * this.keyboard.hide();
 *
 * ```
 */
var Keyboard = (function (_super) {
    __extends(Keyboard, _super);
    function Keyboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Hide the keyboard accessory bar with the next, previous and done buttons.
     * @param hide {boolean}
     */
    /**
       * Hide the keyboard accessory bar with the next, previous and done buttons.
       * @param hide {boolean}
       */
    Keyboard.prototype.hideFormAccessoryBar = /**
       * Hide the keyboard accessory bar with the next, previous and done buttons.
       * @param hide {boolean}
       */
    function (hide) { };
    /**
     * Hide the keyboard if shown.
     */
    /**
       * Hide the keyboard if shown.
       */
    Keyboard.prototype.hide = /**
       * Hide the keyboard if shown.
       */
    function () { };
    /**
     * Force keyboard to be shown.
     */
    /**
       * Force keyboard to be shown.
       */
    Keyboard.prototype.show = /**
       * Force keyboard to be shown.
       */
    function () { };
    /**
     * Programmatically set the resize mode
     * @param mode {string}
     */
    /**
       * Programmatically set the resize mode
       * @param mode {string}
       */
    Keyboard.prototype.setResizeMode = /**
       * Programmatically set the resize mode
       * @param mode {string}
       */
    function (mode) { };
    /**
     * Creates an observable that notifies you when the keyboard is shown. Unsubscribe to observable to cancel event watch.
     * @returns {Observable<any>}
     */
    /**
       * Creates an observable that notifies you when the keyboard is shown. Unsubscribe to observable to cancel event watch.
       * @returns {Observable<any>}
       */
    Keyboard.prototype.onKeyboardShow = /**
       * Creates an observable that notifies you when the keyboard is shown. Unsubscribe to observable to cancel event watch.
       * @returns {Observable<any>}
       */
    function () {
        return;
    };
    /**
     * Creates an observable that notifies you when the keyboard will show. Unsubscribe to observable to cancel event watch.
     * @returns {Observable<any>}
     */
    /**
       * Creates an observable that notifies you when the keyboard will show. Unsubscribe to observable to cancel event watch.
       * @returns {Observable<any>}
       */
    Keyboard.prototype.onKeyboardWillShow = /**
       * Creates an observable that notifies you when the keyboard will show. Unsubscribe to observable to cancel event watch.
       * @returns {Observable<any>}
       */
    function () {
        return;
    };
    /**
     * Creates an observable that notifies you when the keyboard is hidden. Unsubscribe to observable to cancel event watch.
     * @returns {Observable<any>}
     */
    /**
       * Creates an observable that notifies you when the keyboard is hidden. Unsubscribe to observable to cancel event watch.
       * @returns {Observable<any>}
       */
    Keyboard.prototype.onKeyboardHide = /**
       * Creates an observable that notifies you when the keyboard is hidden. Unsubscribe to observable to cancel event watch.
       * @returns {Observable<any>}
       */
    function () {
        return;
    };
    /**
     * Creates an observable that notifies you when the keyboard will hide. Unsubscribe to observable to cancel event watch.
     * @returns {Observable<any>}
     */
    /**
       * Creates an observable that notifies you when the keyboard will hide. Unsubscribe to observable to cancel event watch.
       * @returns {Observable<any>}
       */
    Keyboard.prototype.onKeyboardWillHide = /**
       * Creates an observable that notifies you when the keyboard will hide. Unsubscribe to observable to cancel event watch.
       * @returns {Observable<any>}
       */
    function () {
        return;
    };
    Keyboard.decorators = [
        { type: Injectable },
    ];
    __decorate([
        CordovaProperty,
        __metadata("design:type", Boolean)
    ], Keyboard.prototype, "isVisible", void 0);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Keyboard.prototype, "hideFormAccessoryBar", null);
    __decorate([
        Cordova({
            sync: true,
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Keyboard.prototype, "hide", null);
    __decorate([
        Cordova({
            sync: true,
            platforms: ['Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Keyboard.prototype, "show", null);
    __decorate([
        Cordova({
            sync: true,
            platforms: ['iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Keyboard.prototype, "setResizeMode", null);
    __decorate([
        Cordova({
            eventObservable: true,
            event: 'native.keyboardshow',
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], Keyboard.prototype, "onKeyboardShow", null);
    __decorate([
        Cordova({
            eventObservable: true,
            event: 'keyboardWillShow',
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], Keyboard.prototype, "onKeyboardWillShow", null);
    __decorate([
        Cordova({
            eventObservable: true,
            event: 'native.keyboardhide',
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], Keyboard.prototype, "onKeyboardHide", null);
    __decorate([
        Cordova({
            eventObservable: true,
            event: 'keyboardWillHide',
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], Keyboard.prototype, "onKeyboardWillHide", null);
    /**
     * @name Keyboard
     * @description
     * Keyboard plugin for Cordova.
     *
     * Requires Cordova plugin: `cordova-plugin-ionic-keyboard`. For more info, please see the [Keyboard plugin docs](https://github.com/ionic-team/cordova-plugin-ionic-keyboard).
     *
     * @usage
     * ```typescript
     * import { Keyboard } from '@ionic-native/keyboard';
     *
     * constructor(private keyboard: Keyboard) { }
     *
     * ...
     *
     * this.keyboard.show();
     *
     * this.keyboard.hide();
     *
     * ```
     */
    Keyboard = __decorate([
        Plugin({
            pluginName: 'Keyboard',
            plugin: 'cordova-plugin-ionic-keyboard',
            pluginRef: 'window.Keyboard',
            repo: 'https://github.com/ionic-team/cordova-plugin-ionic-keyboard',
            platforms: ['Android', 'iOS']
        })
    ], Keyboard);
    return Keyboard;
}(IonicNativePlugin));
export { Keyboard };
//# sourceMappingURL=index.js.map