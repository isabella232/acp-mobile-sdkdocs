import Tabs from './tabs/api-reference.md'

# Configuration API reference

## configureWithAppID

This API causes the SDK to download the configuration for the provided app ID and apply the configuration to the current session.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="4"/>

Android

<Tabs query="platform=android&api=configure-with-app-id"/>

iOS

<Tabs query="platform=ios&api=configure-with-app-id"/>

Unity

<Tabs query="platform=unity&api=configure-with-app-id"/>

Xamarin

<Tabs query="platform=xamarin&api=configure-with-app-id"/>

## configureWithFileInAssets

<InlineAlert variant="info" slots="text"/>

This API is only available in Android and was added in Android was added in Android Core version 1.7.0.

You can bundle a JSON configuration file in the app's Assets folder to replace or complement the configuration that was downloaded by using the [Configure with App ID per environment](./index.md#configure-with-app-id-per-environment) approach.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=configure-with-file-in-assets"/>

## configureWithFileInPath

You can include a bundled JSON configuration file in your app package to replace or complement the configuration that was downloaded by using the [Configure with App ID per environment](./index.md#configure-with-app-id-per-environment) approach.

To pass in a bundled path and file name:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Android

<Tabs query="platform=android&api=configure-with-file-in-path"/>

iOS

<Tabs query="platform=ios&api=configure-with-file-in-path"/>

Xamarin

<Tabs query="platform=xamarin&api=configure-with-file-in-path"/>

## extensionVersion

The `extensionVersion()` API returns the version of the Configuration extension.

To get the version of the Configuration extension, use the following code sample:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="7"/>

Android

<Tabs query="platform=android&api=extension-version"/>

iOS

<Tabs query="platform=ios&api=extension-version"/>

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

## updateConfiguration

You can also update the configuration programmatically by passing configuration keys and values to override the existing configuration.

<InlineAlert variant="info" slots="text"/>

Keys that are not found on the current configuration are added when this method is followed. Null values are allowed and replace existing configuration values.

<InlineAlert variant="warning" slots="text"/>

Do not use this API to update the `build.environment` key or any key with an environment prefix, because it can lead to unexpected behaviors. For more information, read [Environment-aware configuration properties](./index.md#environment-aware-configuration-properties).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="7"/>

Android

<Tabs query="platform=android&api=update-configuration"/>

iOS

<Tabs query="platform=ios&api=update-configuration"/>

React Native

<Tabs query="platform=react-native&api=update-configuration"/>

Flutter

<Tabs query="platform=flutter&api=update-configuration"/>

Cordova

<Tabs query="platform=cordova&api=update-configuration"/>

Unity

<Tabs query="platform=unity&api=update-configuration"/>

Xamarin

<Tabs query="platform=xamarin&api=update-configuration"/>
