## Migration to 2.0

As version 2.0 platform support for Windows Phone 8 was removed.
Some incompatible changes were introduced:

* option `stopOnTerminate` defaults to true
* option `locationService` renamed to `locationProvider`
* android providers are now **ANDROID_DISTANCE_FILTER_PROVIDER** and **ANDROID_ACTIVITY_PROVIDER**
* removed `locationTimeout` option (use `interval` in milliseconds instead)
* `notificationIcon` was replaced with two separate options (`notificationIconSmall` and `notificationIconLarge`)
* js object backgroundGeoLocation is deprecated use `backgroundGeolocation` instead
* iOS foreground mode witch automatic background mode switch
* iOS [switchMode](#switchmodemodeid-success-fail) allows to switch between foreground and background mode
* setPace on iOS is deprecated use switchMode instead
