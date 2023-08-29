---
noIndex: true
---

import Tabs from './tabs/index.md'
import Alerts from '../../resources/alerts.md'

# Lifecycle

<Alerts query="platform=outdated-version&componentClass=InlineNestedAlert"/>

<InlineAlert variant="warning" slots="text"/>

In version 4 of the iOS SDK, this implementation was completed automatically. <br/><br/> The Experience Platform SDK will not automatically collect Lifecycle metrics. To continue collecting Lifecycle metrics, you must add code to your app. For more information, see [Manual Lifecycle Implementation](../../upgrading-platform-sdks/lifecycle.md).

Sessions contain information about the app's current lifecycle, such as the device information, the application install or upgrade information, the session start and pause times, the number of application launches, and additional context data that is provided by the developer through the `LifecycleStart` API. Session data is persisted, so it is available across application launches.

## Add Lifecycle to your app

<TabsBlock orientation="horizontal" slots="heading, content" repeat="7"/>

Android

<Tabs query="platform=android&task=add"/>

iOS

<Tabs query="platform=ios&task=add"/>

React Native

<Tabs query="platform=react-native&task=add"/>

Flutter

<Tabs query="platform=flutter&task=add"/>

Cordova

<Tabs query="platform=cordova&task=add"/>

Unity

<Tabs query="platform=unity&task=add"/>

Xamarin

<Tabs query="platform=xamarin&task=add"/>

## Register Lifecycle with Mobile Core and add appropriate Start/Pause calls

<TabsBlock orientation="horizontal" slots="heading, content" repeat="6"/>

Android

<Tabs query="platform=android&task=register"/>

iOS

<Tabs query="platform=ios&task=register"/>

React Native

<Tabs query="platform=react-native&task=register"/>

Cordova

<Tabs query="platform=cordova&task=register"/>

Unity

<Tabs query="platform=unity&task=register"/>

Xamarin

<Tabs query="platform=xamarin&task=register"/>


## Lifecycle metrics

Please refer to the [Metrics documentation](./metrics.md) to view the full list of lifecycle metrics.
