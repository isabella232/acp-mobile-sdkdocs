---
title: API Changelog
description: Learn the differences between the Experience Platform SDK APIs and the v4 SDK APIs.
keywords:
- API
- Migration
---

# API Changelog

This page details SDK API changes between the Experience Platform SDKs and 4x SDKs.

## Mobile Core APIs

For more information, see [Mobile Core API reference](https://developer.adobe.com/client-sdks/documentation/mobile-core/api-reference/).

### Supported APIs

| Experience Platform SDK | 4x SDK |
|---|---|
| extensionVersion | version/getVersion |
| getPrivacyStatus | privacyStatus |
| setPrivacyStatus | setPrivacyStatus: |
| setLogLevel | setDebugLogging: |
| configureWithFileInPath: | overrideConfigPath: |
| configureWithAppId#: | Not applicable |
| updateConfiguration: | Not applicable |
| setAppGroup: | setAppGroup: |
| trackState:data: | trackState:data: |
| trackAction:data: | trackAction:data: |
| collectPII: | collectPII: |
| getSdkIdentities: | getAllIdentifiersAsync: |

### Deprecated APIs and functionality

| 4x SDK | Notes |
|---|---|
| trackActionFromBackground | Deprecated |
| trackLocation:data: | Deprecated |
| trackBeacon:Data: | Support modified. See [guide](https://developer.adobe.com/client-sdks/documentation/adobe-analytics/track-beacon/) |
| trackingClearCurrentBeacon | Deprecated |
| registerAdobeDataCallback: | Deprecated |
| lifetimeValue | Deprecated |
| trackLifetimeValueIncrease:data: | Deprecated |
| trackTimedActionStart: | Deprecated |
| trackTimedActionUpdate: | Deprecated |
| trackTimedActionEnd: | Deprecated |
| trackTimedActionExists: | Deprecated |
| trackPushMessageClickThrough:userInfo | Support modified. See [guide](https://developer.adobe.com/client-sdks/documentation/faq/#how-can-i-track-user-engagement-of-push-notifications-using-the-experience-platform-mobile-sdk) |
| Tracking App Crash | Deprecated |

## Lifecycle extension APIs

### Supported APIs

<InlineAlert variant="info" slots="text"/>

In the v4 iOS SDK, Lifecycle start and stop calls are made automatically by the SDK. In the AEP SDK, the calls to start and stop lifecycle will need to be made by the application developer. For more information, see [Lifecycle extension in iOS](https://developer.adobe.com/client-sdks/documentation/mobile-core/lifecycle/ios/).

For more information, see [Lifecycle API reference](https://developer.adobe.com/client-sdks/documentation/mobile-core/lifecycle/api-reference/).

| Experience Platform SDK | 4x SDK |
|---|---|
| lifecycleStart: | collectLifecycleData |
| lifecycleStart: | collectLifecycleWithAdditionalData |
| lifecyclePause | pauseCollectingLifecycleData (Android only) |

### Deprecated APIs

| 4x SDK | Notes |
|---|---|
| keepLifecycleSessionAlive | Deprecated |

## Identity extension APIs

For more information, see [Identity API reference](https://developer.adobe.com/client-sdks/documentation/mobile-core/identity/api-reference/).

### Supported APIs

| Experience Platform SDK | 4x SDK |
|---|---|
| setPushIdentifier: | setPushIdentifier |
| setAdvertisingIdentifier: | setAdvertisingIdentifier |
| getExperienceCloudId: | visitorMarketingCloudID |
| syncIdentifiers: | visitorSyncIdentifiers |
| syncIdentifiers:authentication: | visitorSyncIdentifiers:authenticationState: |
| syncIdentifier:identifier:authentication: | visitorSyncIdentifiersWithType:identifier:authenticationState: |
| getIdentifiers | visitorGetIDs |
| appendToURL:withCallback: | visitorAppendToURL: |
| getUrlVariables | visitorGetUrlVariablesAsync: |

## Adobe Analytics extension APIs

For more information, see [Analytics API reference](https://developer.adobe.com/client-sdks/documentation/adobe-analytics/api-reference/).

### Supported APIs

| Experience Platform SDK | 4x SDK |
|---|---|
| getVisitorIdentifier: | getUserIdentifier |
| setVisitorIdentifier: | setUserIdentifier |
| getTrackingIdentifier: | trackingIdentifier |
| sendQueuedHits: | trackingSendQueuedHits |
| clearQueue | trackingClearQueue |
| getQueueSize | trackingGetQueueSize |

## Adobe Audience Manager extension APIs

For more information, see [Audience Manager Extension API Reference](https://developer.adobe.com/client-sdks/documentation/adobe-audience-manager/api-reference/).

### Supported APIs

| Experience Platform SDK | 4x SDK |
|---|---|
| extensionVersion | Not applicable |
| getVisitorProfile | audienceVisitorProfile |
| ​signalWithData:callback:​ | audienceSignalWithData:callback |
​| reset | audienceReset |

### Deprecated APIs

| 4x SDK | Notes |
|---|---|
| audienceSetDpid:dpuuid: | Replaced - See [Link](​https://experienceleague.adobe.com/docs/audience-manager/user-guide/reference/cid.html?lang=en) |
| audienceDpid: | Replaced - See [Link](https://experienceleague.adobe.com/docs/audience-manager/user-guide/reference/cid.html?lang=en) |​
| audienceDpuuid: | Replaced - See [Link](https://experienceleague.adobe.com/docs/audience-manager/user-guide/reference/cid.html?lang=en) |

## Adobe Target extension APIs

For more information see [Target API reference](https://developer.adobe.com/client-sdks/documentation/adobe-target/api-reference/).

### Supported APIs

| Experience Platform SDK | 4x SDK (iOS / Android) |
|---|---|
| getThirdPartyId: | targetThirdPartyID |
| setThirdPartyId: | targetSetThirdPartyID |
| getTntid: | Not applicable |
| resetExperience: | targetClearCookies |
| prefetchObjectWithName:mboxParameters: | targetPrefetchObjectWithName:mboxParameters: |
| prefetchContent:withProfileParameters:callback: | targetPrefetchContent:withProfileParameters:callback: |
| prefetchClearCache: | targetPrefetchClearCache |
| requestObjectWithName:defaultContent:mboxParameters:callback: | targetRequestObjectWithName:defaultContent:mboxParameters:callback: |
| loadRequests:withProfileParameters: | targetLoadRequests:withProfileParameters: |

### Deprecated APIs

| 4x SDK | Notes |
|---|---|
| targetPcID | Deprecated |
| targetSessionID | Deprecated |
| targetLoadRequest:callback: | Deprecated |
| targetLoadRequestWithName:defaultContent:profileParameters:orderParameters:mboxParameters:callback: | Deprecated |
| targetLoadRequestWithName:defaultContent:profileParameters:orderParameters:mboxParameters:requestLocationParameters:callback: | Deprecated |
| targetCreateRequestWithName:defaultContent:parameters: | Deprecated |
| targetCreateOrderConfirmRequestWithName:orderId:orderTotal:productPurchasedId:parameters: | Deprecated |
