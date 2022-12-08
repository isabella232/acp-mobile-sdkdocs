<Variant platform="android" task="add" repeat="3"/>

#### Java

Import the library:

```java
import com.adobe.marketing.mobile.*;
```

<Variant platform="ios-acp" task="add" repeat="5"/>

#### Swift

In Swift, the ACPCore library includes ACPIdentity:

```swift
import ACPCore
```

#### Objective-C

```objectivec
#import  "ACPIdentity.h"
```

<Variant platform="react-native" task="add" repeat="2"/>

#### JavaScript

```jsx
import {ACPIdentity} from '@adobe/react-native-acpcore';
```

<Variant platform="flutter" task="add" repeat="2"/>

#### Dart

```dart
import 'package:flutter_acpcore/flutter_acpidentity.dart';
```

<Variant platform="cordova" task="add" repeat="3"/>

#### Cordova

After creating your Cordova app and adding the Android and iOS platforms, the Identity extension for Cordova can be added with this command:

```cordova
cordova plugin add https://github.com/adobe/cordova-acpcore.git
```

<Variant platform="unity" task="add" repeat="3"/>

#### C#

After importing the [ACPCore.unitypackage](https://github.com/adobe/unity-acpcore/blob/master/bin/ACPCore-0.0.1-Unity.zip), the Identity extension for Unity can be added with following code in the MainScript

```csharp
using com.adobe.marketing.mobile;
```

<Variant platform="xamarin" task="add" repeat="3"/>

#### C#

After adding the iOS ACPCore NuGet package or the Android ACPIdentity NuGet package, the Identity extension can be added by this import statement

```csharp
using Com.Adobe.Marketing.Mobile;
```

<Variant platform="android" task="register" repeat="3"/>

After calling the `setApplication()` method in the `onCreate()` method, register the extension. If the registration was not successful, an `InvalidInitException` is thrown.

#### Java

```java
public class MobiletApp extends Application {
@Override
public void onCreate() {
super.onCreate();
     MobileCore.setApplication(this);
     try {
         Identity.registerExtension();
     } catch (Exception e) {
         //Log the exception
     }
  }
}
```

<Variant platform="ios-acp" task="register" repeat="5"/>

Register the Identity extension in your app's `didFinishLaunchingWithOptions` function:

#### Swift

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
  ACPIdentity.registerExtension();
  // Override point for customization after application launch.
  return true;
}
```

#### Objective-C

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  [ACPIdentity registerExtension];
  // Override point for customization after application launch.
  return YES;
}
```

<Variant platform="react-native" task="register" repeat="1"/>

When using React Native, registering Identity with Mobile Core should be done in native code, which is shown under the Android and iOS tabs.


<Variant platform="flutter" task="register" repeat="1"/>

When using Flutter, registering Identity with Mobile Core should be done in native code, which is shown under the Android and iOS tabs.

<Variant platform="cordova" task="register" repeat="1"/>

When using React Native, registering Identity with Mobile Core should be done in native code, which is shown under the Android and iOS tabs.

<Variant platform="unity" task="register" repeat="3"/>

Register the Identity extension in your app's `Start()` function:

#### C#

```csharp
void Start() {
  ACPIdentity.RegisterExtension();
}
```

<Variant platform="xamarin" task="register" repeat="7"/>

#### C#

**iOS**

Register the Identity extension in your app's `FinishedLaunching()` function:

```csharp
public override bool FinishedLaunching(UIApplication app, NSDictionary options)
{
  global::Xamarin.Forms.Forms.Init();
  LoadApplication(new App());
    ACPIdentity.RegisterExtension();

  // start core
  ACPCore.Start(startCallback);

  return base.FinishedLaunching(app, options);
}

private void startCallback()
{
  // set launch config
  ACPCore.ConfigureWithAppID("yourAppId");
}
```

**Android**

Register the Identity extension in your app's `OnCreate()` function:

```csharp
protected override void OnCreate(Bundle savedInstanceState)
{
  base.OnCreate(savedInstanceState);
  global::Xamarin.Forms.Forms.Init(this, savedInstanceState);
  LoadApplication(new App());

  ACPIdentity.RegisterExtension();

  // start core
  ACPCore.Start(new CoreStartCompletionCallback());
}

class CoreStartCompletionCallback : Java.Lang.Object, IAdobeCallback
{
  public void Call(Java.Lang.Object callback)
  {
    // set launch config
    ACPCore.ConfigureWithAppID("yourAppId");
  }
}
```

<Variant platform="android" task="implement" repeat="5"/>

#### Java

To append visitor information to the URL that is being used to open the web view, call [appendVisitorInfoForUrl](#appendtourl-appendvisitorinfoforurl):

```java
Identity.appendVisitorInfoForURL("https://example.com", new AdobeCallback<String>() {    
    @Override    
    public void call(String urlWithAdobeVisitorInfo) {        
        //handle the new URL here        
        //For example, open the URL on the device browser        
        //        
        Intent i = new Intent(Intent.ACTION_VIEW);        
        i.setData(Uri.parse(urlWithAdobeVisitorInfo));        
        startActivity(i);    
    }
});
```

Alternately, starting in SDK version 1.4.0 (Identity version 1.1.0), you can call [getUrlVariables](#geturlvariables) and build your own URL:

```java
Identity.getUrlVariables(new AdobeCallback<String>() {    
    @Override    
    public void call(String stringWithAdobeVisitorInfo) {        
        //handle the URL query parameter string here 
        //For example, open the URL on the device browser        
        //        
        Intent i = new Intent(Intent.ACTION_VIEW);        
        i.setData(Uri.parse("https://example.com?" + urlWithAdobeVisitorInfo));        
        startActivity(i);    
    }
});
```

<Variant platform="ios-acp" task="implement" repeat="5"/>

#### Objective-C

To append visitor information to the URL that is being used to open the web view, call [appendToUrl](./api-reference.md#appendtourl-appendvisitorinfoforurl):

```objectivec
NSURL* url = [[NSURL alloc] initWithString:@"www.example.com"];
[ACPIdentity appendToUrl:url withCallback:^(NSURL * _Nullable urlWithVisitorData) {    
// handle the appended url here
}];
```

Alternately, starting with SDK version 2.3.0 (ACPIdentity version 2.1.0), you can call [getUrlVariables](api-reference.md#geturlvariables) and build your own URL:

```objectivec
[ACPIdentity getUrlVariables:^(NSString * _Nullable urlVariables) {    
  // handle the URL query parameter string here
  NSString* urlString = @"https://example.com";
  NSString* urlStringWithVisitorData = [NSString stringWithFormat:@"%@?%@", urlString, urlVariables];
  NSURL* urlWithVisitorData = [NSURL URLWithString:urlStringWithVisitorData];
  [[UIApplication sharedApplication] openURL:urlWithVisitorData options:@{} completionHandler:^(BOOL success) {
    // handle openURL success
  }];
}];
```

<Variant platform="react-native" task="implement" repeat="5"/>

#### JavaScript

To append visitor information to the URL that is being used to open the web view, call [appendVisitorInfoForUrl](api-reference.md#appendtourl-appendvisitorinfoforurl):

```jsx
ACPIdentity.appendVisitorInfoForURL("www.example.com").then(urlWithVistorData => console.log("Url with Visitor Data = " + urlWithVisitorData));
```

Alternately, starting with SDK version 1.0.5, you can call [getUrlVariables](api-reference.md#geturlvariables) and build your own URL:

```jsx
ACPIdentity.getUrlVariables().then(urlVariables => console.log("query params = " + urlVariables));
```

<Variant platform="flutter" task="implement" repeat="5"/>

#### Dart

To append visitor information to the URL that is being used to open the web view, call [appendVisitorInfoForUrl](api-reference.md#appendtourl-appendvisitorinfoforurl):

```dart
String result = "";

try {
  result = await FlutterACPIdentity.appendToUrl("www.example.com");
} on PlatformException {
  log("Failed to append URL");
}
```

Alternately, starting with SDK version 1.0.0-beta.1, you can call [getUrlVariables](api-reference.md#geturlvariables) and build your own URL:

```dart
String result = "";

try {
  result = await FlutterACPIdentity.urlVariables;
} on PlatformException {
  log("Failed to get url variables");
}
```

<Variant platform="cordova" task="implement" repeat="5"/>

#### Cordova

To append visitor information to the URL that is being used to open the web view, call [appendVisitorInfoForUrl](api-reference.md#appendtourl-appendvisitorinfoforurl):

```jsx
ACPIdentity.appendVisitorInfoForUrl("https://example.com", function(handleCallback) {
  console.log("AdobeExperenceSDK: Url with Visitor Data = " + handleCallback);
}, function(handleError) {
  console.log("AdobeExperenceSDK: Failed to append URL : " + handleError);
});
```

Alternately, you can call [getUrlVariables](api-reference.md#geturlvariables) and build your own URL:

```jsx
ACPIdentity.getUrlVariables(function (handleCallback) {
  console.log("AdobeExperienceSDK: Url variables: " + handleCallback);
}, function (handleError) {
  console.log("AdobeExperenceSDK: Failed to retrieve url variables : " + handleError);
});
```

<Variant platform="unity" task="implement" repeat="5"/>

#### C#

To append visitor information to the URL that is being used to open the web view, call [AppendToUrl](api-reference.md#appendtourl-appendvisitorinfoforurl):

```csharp
[MonoPInvokeCallback(typeof(AdobeIdentityAppendToUrlCallback))]
public static void HandleAdobeIdentityAppendToUrlCallback(string url)
{
    print("Url is : " + url);
}
ACPIdentity.AppendToUrl("https://www.adobe.com", HandleAdobeIdentityAppendToUrlCallback);
```

Alternately, you can call [GetUrlVariables](api-reference.md#geturlvariables) and build your own URL:

```csharp
[MonoPInvokeCallback(typeof(AdobeGetUrlVariables))]
public static void HandleAdobeGetUrlVariables(string urlVariables)
{
    print("Url variables are : " + urlVariables);
}
ACPIdentity.GetUrlVariables(HandleAdobeGetUrlVariables);
```

<Variant platform="xamarin" task="implement" repeat="12"/>

#### C#

To append visitor information to the URL that is being used to open the web view, call [AppendToUrl](api-reference.md#appendtourl-appendvisitorinfoforurl):

**iOS**

```csharp
ACPIdentity.AppendToUrl(url, callback => {
  Console.WriteLine("Appended url: " + callback);
});
```

To append visitor information to the URL that is being used to open the web view, call [AppendVisitorInfoForUrl](api-reference.md#appendtourl-appendvisitorinfoforurl):

**Android**

```csharp
ACPIdentity.AppendVisitorInfoForURL("https://example.com", new StringCallback());

class StringCallback : Java.Lang.Object, IAdobeCallback
{
  public void Call(Java.Lang.Object stringContent)
  {
    if (stringContent != null)
    {
      Console.WriteLine("Appended url: " + stringContent);
    } 
    else 
    {
      Console.WriteLine("null content in string callback");
    }
  }
}
```

Alternately, you can call [GetUrlVariables](api-reference.md#geturlvariables) and build your own URL:

**iOS**

```csharp
ACPIdentity.GetUrlVariables(callback => {
  Console.WriteLine("Url variables: " + callback);
});
```

**Android**

```csharp
ACPIdentity.GetUrlVariables(new StringCallback());

class StringCallback : Java.Lang.Object, IAdobeCallback
{
  public void Call(Java.Lang.Object stringContent)
  {
    if (stringContent != null)
    {
      Console.WriteLine("Url variables: " + stringContent);
    } 
    else 
    {
      Console.WriteLine("null content in string callback");
    }
  }
}
```

