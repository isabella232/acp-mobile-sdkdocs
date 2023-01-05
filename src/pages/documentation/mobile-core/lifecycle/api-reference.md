import Tabs from './tabs/api-reference.md'

# Lifecycle API reference

## extensionVersion

The `extensionVersion()` API returns the version of the Lifecycle extension that is registered with the Mobile Core extension.

To get the version of the Lifecycle extension, use the following code sample:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="6"/>

iOS

<Tabs query="platform=ios-acp&api=extension-version"/>

React Native

<Tabs query="platform=react-native&api=extension-version"/>

Flutter

<Tabs query="platform=flutter&api=extension-version"/>

Cordova

<Tabs query="platform=cordova&api=extension-version"/>

Unity

<Tabs query="platform=unity&api=extension-version"/>

Xamarin

<Tabs query="platform=xamarin&api=extension-version"/>

## lifecycleStart

Starts the collection of lifecycle data.

**For Analytics use case:** Use this API to start a new lifecycle session or resume a previously paused lifecycle session. If a previously paused session timed out, then a new session is created. If a current session is running, then calling this method does nothing.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="5"/>

iOS

<Tabs query="platform=ios-acp&api=lifecycle-start"/>

React Native

<Tabs query="platform=react-native&api=lifecycle-start"/>

Cordova

<Tabs query="platform=cordova&api=lifecycle-start"/>

Unity

<Tabs query="platform=unity&api=lifecycle-start"/>

Xamarin

<Tabs query="platform=xamarin&api=lifecycle-start"/>

## lifecyclePause

Pauses the collection of lifecycle data.

**For Analytics use case:** Use this API to pause the collection of lifecycle data.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="5"/>

iOS

<Tabs query="platform=ios-acp&api=lifecycle-pause"/>

React Native

<Tabs query="platform=react-native&api=lifecycle-pause"/>

Cordova

<Tabs query="platform=cordova&api=lifecycle-pause"/>

Unity

<Tabs query="platform=unity&api=lifecycle-pause"/>

Xamarin

<Tabs query="platform=xamarin&api=lifecycle-pause"/>

