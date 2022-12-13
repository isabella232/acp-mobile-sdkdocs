---
description: Release notes and change logs for the Adobe Experience Platform Mobile SDKs.
---

# Release notes

### iOS ACPAnalytics 2.5.3

* Fix crash in AnalyticsHitDatabase caused by unprotected shared access of AnalyticsState object.

## May 24, 2022

### iOS Analytics 2.5.2

* Fixed a bug for the integration with Assurance where "No Debug Flag" was showing in the UI for some events.

## May 17, 2022

### iOS Campaign Classic 2.1.1

* ACPCampaignClassic iOS SDK is now Adobe Campaign Classic (ACC) v8 compatible! Broadlog ID can be provided in the UUID format in the notification tracking APIs.

## April 28, 2022

### ACP React Native plugins

Updated the following ACP React Native packages to remove the usage of deprecated Jcenter() repository:
- [@adobe/react-native-acpcore v2.0.1](https://www.npmjs.com/package/@adobe/react-native-acpcore/v/2.0.1)
- [@adobe/react-native-acpuserprofile v2.0.1](https://www.npmjs.com/package/@adobe/react-native-acpuserprofile/v/2.0.1)
- [@adobe/react-native-aepassurance v2.0.1](https://www.npmjs.com/package/@adobe/react-native-aepassurance/v/2.0.1)
- [@adobe/react-native-acpmedia v3.0.1](https://www.npmjs.com/package/@adobe/react-native-acpmedia/v/3.0.1)
- [@adobe/react-native-acptarget v2.0.1](https://www.npmjs.com/package/@adobe/react-native-acptarget/v/2.0.1)
- [@adobe/react-native-acpcampaign v2.0.1](https://www.npmjs.com/package/@adobe/react-native-acpcampaign/v/2.0.1)
- [@adobe/react-native-acpplaces v2.0.1](https://www.npmjs.com/package/@adobe/react-native-acpplaces/v/2.0.1)
- [@adobe/react-native-acpaudience v2.0.1](https://www.npmjs.com/package/@adobe/react-native-acpaudience/v/2.0.1)
- [@adobe/react-native-acpanalytics v2.0.1](https://www.npmjs.com/package/@adobe/react-native-acpanalytics/v/2.0.1)

## March 30, 2022

## End of support for Adobe Experience Platform Mobile SDK plugins for Unity

* Effective March 30, 2022, support for Adobe Experience Platform Mobile SDKs on Unity is no longer active. While you may continue using our libraries, Adobe no longer plans to update, modify, or provide support for these libraries. Please contact your Adobe CSM for details.

## March 4, 2022

### ACP Xamarin frameworks

Updated the iOS native libraries for the [ACPCore](https://github.com/adobe/xamarin-acpcore) and [ACPAnalytics](https://github.com/adobe/xamarin-acpanalytics) Xamarin frameworks:

* [Xamarin Core Android 1.1.0](https://www.nuget.org/packages/Adobe.ACPCore.Android/1.1.0): Android Core updated to 1.10.0
* [Xamarin Identity Android 1.1.0](https://www.nuget.org/packages/Adobe.ACPIdentity.Android/1.1.0): Android Identity updated to 1.3.0
* [Xamarin Lifecycle Android 1.1.0](https://www.nuget.org/packages/Adobe.ACPLifecycle.Android/1.1.0): Android Lifecycle updated to 1.1.0
* [Xamarin Signal Android 1.0.1](https://www.nuget.org/packages/Adobe.ACPSignal.Android/1.0.1): Android Signal updated to 1.0.4
* [Xamarin Core iOS 1.0.1](https://www.nuget.org/packages/Adobe.ACPCore.iOS/1.0.1): iOS Core updated to 2.9.5
* [Xamarin Core tvOS 1.0.1](https://www.nuget.org/packages/Adobe.ACPCore.tvOS/1.0.1): tvOS Core updated to 2.9.5
* [Xamarin Analytics Android 1.0.1](https://www.nuget.org/packages/Adobe.ACPAnalytics.Android/1.0.1): Android Analytics updated to 1.2.10
* [Xamarin Analytics iOS 1.0.1](https://www.nuget.org/packages/Adobe.ACPAnalytics.iOS/1.0.1): iOS Analytics updated to 2.5.1
* [Xamarin Analytics tvOS 1.0.1](https://www.nuget.org/packages/Adobe.ACPAnalytics.tvOS/1.0.1): tvOS Analytics updated to 2.5.1

## February 14, 2022

### iOS Core 2.9.5

* Updates version for bundled ACPIdentity 2.5.2 release.

### iOS Identity 2.5.2

* Fixes intermittent issue for GetUrlVariables and AppendToUrl APIs when custom Analytics identifiers are being used.

## January 26, 2022

### ACP Unity packages

The ACP Unity packages now use XCFrameworks in order to support hardware with the new Apple M1 architecture, while maintaining support for existing Intel architecture. See the respective GitHub repositories for the updated installation instructions.

**IMPORTANT:** Upgrading to XCFrameworks distribution requires Xcode 12.0 or newer.

Below is a list of the new versions for each Unity package:

* [Unity ACPCore v1.0.1](https://github.com/adobe/unity-acpcore/releases/tag/v1.0.1)
* [Unity ACPAnalytics v1.0.0](https://github.com/adobe/unity-acpanalytics/releases/tag/v1.0.0)
* [Unity ACPUserProfile v1.0.0](https://github.com/adobe/unity-aepassurance/releases/tag/v1.0.0)
* [Unity AEPAssurance v1.0.0](https://github.com/adobe/unity_acpuserprofile/releases/tag/v1.0.0)

## January 14, 2022

### Flutter

Updated the following flutter packages to reference Android libraries from Maven Central Repository:

* [Flutter ACPCore v2.0.1](https://pub.dev/packages/flutter_acpcore/versions/2.0.1)
* [Flutter ACPUserProfile v2.0.1](https://pub.dev/packages/flutter_acpuserprofile/versions/2.0.1)
* [Flutter ACPPlaces v2.0.1](https://pub.dev/packages/flutter_acpplaces/versions/2.0.1)
* [Flutter ACPPlacesMonitor v2.0.1](https://pub.dev/packages/flutter_acpplaces_monitor/versions/2.0.1)

### Flutter Assurance 2.0.1

- Updated the package to reference the Android library from Maven Central Repository.
- Migrated to the new Android APIs based on [FlutterPlugin](https://api.flutter.dev/javadoc/io/flutter/embedding/engine/plugins/FlutterPlugin.html).
