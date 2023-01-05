# Release Notes

## August 25, 2022

### iOS ACPAnalytics 2.5.4

* Fix race conditions in AnalyticsHitQueue to prevent crash related to concurrent reset of database.

## June 7, 2022

### iOS ACPAnalytics 2.5.3

* Fix crash in AnalyticsHitDatabase caused by unprotected shared access of AnalyticsState object.

## May 24, 2022

### iOS Analytics 2.5.2

* Fixed a bug for the integration with Assurance where "No Debug Flag" was showing in the UI for some events.

## July 21, 2021

### iOS Analytics 2.5.1

* Removed retrieval and generation of Analytics tracking identifier (AID). Existing AID values stored on the device will continue to be loaded and used, however new visitors will not be assigned an AID value.

## December 18, 2020

### iOS Analytics 2.5.0

* The AEP SDKs are now distributed using XCFrameworks in order to support hardware with the new Apple M1 architecture while maintaining support for existing Intel architecture.
  * **IMPORTANT**: Upgrading to XCFrameworks distribution requires Xcode 12.0 or newer
  * **IMPORTANT**: If using Cocoapods, upgrading to the XCFrameworks distribution requires Cocoapods 1.10.0 or newer

## Oct 6, 2020

### iOS Analytics 2.4.0

* Added error callbacks for following APIs getQueueSize, getTrackingIdentifier and getVisitorIdentifier. Instance of AdobeCallbackWithError can be passed to these API's as an arguement to receive error callbacks.
* Added an enhancement to append previous app id and previous os version to backdated session info hits.
* Changes to read from Assurance shared state.

## June 17, 2020

### iOS Analytics 2.3.0

* Added tvOS compatibility
* Version 2.3.0 onwards, binaries are built with Xcode 11.0

## June 1, 2020

### iOS Analytics 2.2.4

* Fixed incorrect timezone offset calculation
* Fixed a crash which happened in Analytics::TrackLifecycle

## March 2, 2020

The following updates were made in this release:

### iOS Analytics 2.2.3

* `AnalyticsResponse` events are now always dispatched regardless if the debugApi is enabled or if AAM forwarding is enabled.
* Report extension details to ACPCore for improved logging and Griffon support.
* Improved existing log messages and added additional logging to assist with debugging.

## October 28, 2019

The following change was made in this release:

### iOS Analytics 2.2.1

* Analytics response content events now contain two new fields:
  * `hitHost`
  * `hitUrl`

These fields contain the host and URL of the of the hit responsible for dispatching the response event.

## September 10, 2019

The following updates were made in this release:

### iOS Analytics 2.2.0

* Added support for Griffon debug API.
* The `global.ssl` configuration settings are ignored, and SSL is enabled by default.

## July 9, 2019

The following updates were made in this release:

### iOS Analytics 2.1.2

* ACPAnalytics now correctly identifies Acquisition link event types.
* Fixes a compile-time error when using the "-all\_load" linker flag.
