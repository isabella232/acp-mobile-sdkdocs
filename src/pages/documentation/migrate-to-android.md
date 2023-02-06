import Tabs from './tabs/migrate-to-android.md'

# Migrate to Android 2.0

If you have implemented the Android SDK 1.x versions, then this guide will help you understand the steps required to migrate your implementation to the latest Android SDK versions (2.0 or higher). In summary, you'll need to:

1. [Switch Gradle dependencies from 1.x to 2.0](#switch-gradle-dependencies)
2. [Update SDK initialization](#update-sdk-initialization)
3. [Replace the deprecated API calls with the new API calls](#replace-the-deprecated-api-calls-with-the-new-api-calls1)

## Switch Gradle dependencies

At this time, the following Android SDK 1.x libraries may be switched out with their respective Android SDK 2.x libraries. See instructions on proceeding further if you have [manually imported SDK libraries](#manual-library-import) , or if you used [Gradle to manage SDK dependencies](#Gradle).

<InlineAlert variant="warning" slots="text"/>

Since we will not provide a `Core bundle` artifact automatically including Core, Signal, Lifecycle and Identity artifacts, you need to manually import those libraries in Android SDK 2.0.

| Android SDK 1.x | Android SDK 2.x                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :-------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sdk-core        | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/core.svg?logo=android&logoColor=white&label=core)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/core) [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/identity.svg?logo=android&logoColor=white&label=identity)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/identity) [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/signal.svg?logo=android&logoColor=white&label=signal)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/signal) [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/lifecycle.svg?logo=android&logoColor=white&label=lifecycle)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/lifecycle) |
| UserProfile     | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/userprofile.svg?logo=android&logoColor=white&label=userprofile)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/userprofile)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Analytics       | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/analytics.svg?logo=android&logoColor=white&label=analytics)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/analytics)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Audience        | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/audience.svg?logo=android&logoColor=white&label=audience)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/audience)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Target          | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/target.svg?logo=android&logoColor=white&label=target)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/target)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Media           | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/media.svg?logo=android&logoColor=white&label=media)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/media)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Places          | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/places.svg?logo=android&logoColor=white&label=places)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/places)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Assurance       | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/assurance.svg?logo=android&logoColor=white&label=assurance)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/assurance)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Campaign        | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/campaign.svg?logo=android&logoColor=white&label=campaign)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/campaign)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| CampaignClassic | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/campaignclassic.svg?logo=android&logoColor=white&label=campaignclassic)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/campaignclassic)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

### Manual library import

If you are manually importing SDK libraries, ensure you identify all currently used Android 1.x libraries and switch them over to Android 2.x libraries. The list of current Android 2.x libraries can be found in the [current SDK versions document](sdk-versions.md#android) (in the Android section).

### Gradle

If you are using Gradle to manage your Adobe Experience Platform Mobile SDK dependencies, the following example shows you how to switch Android 1.x libraries to Android 2.x libraries in your `build.gradle` file.

```java
dependencies {
    //replace sdk-core with Core/Lifecycle/Identity/Signal 2.0
    //implementation 'com.adobe.marketing.mobile:sdk-core:1.+'
    implementation 'com.adobe.marketing.mobile:core:2.+'
    implementation 'com.adobe.marketing.mobile:identity:2.+'
    implementation 'com.adobe.marketing.mobile:lifecycle:2.+'
    implementation 'com.adobe.marketing.mobile:signal:2.+'

    // replace UserProfile 1.+ with UserProfile 2.0
    //implementation 'com.adobe.marketing.mobile:userprofile:1.+'
    implementation 'com.adobe.marketing.mobile:userprofile:2.+'

}
```

<InlineAlert variant="warning" slots="text"/>

Warning Using dynamic dependency versions is not recommended for production apps. Refer to this [page](https://github.com/adobe/aepsdk-core-android/blob/main/Documentation/MobileCore/gradle-dependencies.md) for managing gradle dependencies.

Save the `build.gradle` file and click `Sync Project with Gradle Files` in Android Studio to download the latet Android SDK.

## Update SDK initialization

After you have imported the new Android libraries, you'll need to update SDK initialization code as described below. With Android 2.0, the `MobileCore.start()` API is no longer required. The SDK has simplified initialization and registration of extensions by providing the `MobileCore.registerExtensions()` API. After the given extensions have been registered, the SDK will be initialized and the completion block will be executed. Code which used to reside in the start() block will now reside in the `MobileCore.registerExtensions()`'s completion block.

The following code snippets show the new and correct initialization code required for the Android 2.0 libraries.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Java

<Tabs query="platform=java"/>

Kotlin

<Tabs query="platform=kotlin"/>

## Replace the deprecated API calls with the new API calls

Several Android 1.x APIs are depreacted in Android 2.0 libraries, you can choose to replace the deprecated API calls in your code with calling the corresponding alternative APIs:

| Deprecated API                  | Alternative API                  |
| :------------------------------ | :------------------------------- |
| Identity.registerExtension      | MobileCore.registerExtensions    |
| Signal.registerExtension        |                                  |
| Lifecycle.registerExtension     |                                  |
| UserProfile.registerExtension   |                                  |
| UserProfile.updateUserAttribute | UserProfile.updateUserAttributes |
| UserProfile.removeUserAttribute | UserProfile.removeUserAttributes |
