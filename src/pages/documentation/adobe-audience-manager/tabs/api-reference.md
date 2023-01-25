<Variant platform="android" api="extension-version" repeat="3"/>

#### Java

**Example**

```java
String audienceExtensionVersion = Audience.extensionVersion();
```

<Variant platform="ios" api="extension-version" repeat="10"/>

#### Swift

**Syntax**

```swift
+ (nonnull NSString*) extensionVersion;
```

**Example**

```swift
let audienceExtensionVersion  = ACPAudience.extensionVersion()
```

#### Objective-C

**Syntax**

```objectivec
add
```

**Example**

```objectivec
NSString *audienceExtensionVersion = [ACPAudience extensionVersion];
```

<Variant platform="react-native" api="extension-version" repeat="3"/>

#### JavaScript

**Example**

```jsx
ACPAudience.extensionVersion().then(audienceExtensionVersion => console.log("AdobeExperienceSDK: ACPAudience version: " + audienceExtensionVersion));
```

<Variant platform="flutter" api="extension-version" repeat="3"/>

#### Dart

**Example**

```dart
String audienceExtensionVersion = await FlutterACPAudience.extensionVersion;
```

<Variant platform="cordova" api="extension-version" repeat="3"/>

#### Cordova

**Example**

```jsx
ACPAudience.extensionVersion(function(version) {  
   console.log("ACPAudience version: " + version);
}, function(error) {  
   console.log(error);  
});
```

<Variant platform="unity" api="extension-version" repeat="3"/>

#### C#

**Example**

```csharp
string audienceExtensionVersion = ACPAudience.ExtensionVersion();
```

<Variant platform="xamarin" api="extension-version" repeat="3"/>

#### C#

**Example**

```csharp
string audienceExtensionVersion = ACPAudience.ExtensionVersion();
```

<Variant platform="android" api="get-visitor-profile" repeat="7"/>

This API returns the most recently obtained visitor profile. For easy access across multiple launches of your app, the visitor profile is saved in `SharedPreferences`. If no signal has been submitted, null is returned.

When an AdobeCallbackWithError is provided, an AdobeError can be returned in the eventuality of an unexpected error or if the default timeout (5000ms) is met before the callback is returned with the visitor profile.

#### Java

**Syntax**

```java
public static void getVisitorProfile(final AdobeCallback<Map<String, String>> adobeCallback)
```

**Example**

```java
AdobeCallback<Map<String, String>> visitorProfileCallback = new AdobeCallback<Map<String, String>>() {
    @Override
    public void call(final Map<String, String> visitorProfile) {
        // your own customized code
    }
};

Audience.getVisitorProfile(visitorProfileCallback);
```

<Variant platform="ios" api="get-visitor-profile" repeat="12"/>

The `getVisitorProfile` API returns the most recently obtained visitor profile. For easy access across multiple launches of your app, the visitor profile is saved in `NSUserDefaults`. If no signal has been submitted, nil is returned.

The `getVisitorProfileWithCompletionHandler` method was added in ACPAudience version 2.1.0.

#### Swift

**Syntax**

```swift
static func getVisitorProfile(_ callback: @escaping ([AnyHashable : Any]?) -> Void)

static func getVisitorProfile(completionHandler: @escaping ([AnyHashable : Any]?, Error?) -> Void)
```

**Example**

```swift
ACPAudience.getVisitorProfile { (visitorProfile) in
  // handle the visitorProfile here
}

ACPAudience.getVisitorProfile { (visitorProfile, error) in
  if let error = error {
    // handle error here
  } else {
    // handle the returned visitorProfile here
  }
}
```

#### Objective-C

**Syntax**

```objectivec
+ (void) getVisitorProfile: (nonnull void (^) (NSDictionary* __nullable visitorProfile)) callback;

+ (void) getVisitorProfileWithCompletionHandler: (nonnull void (^) (NSDictionary* __nullable visitorProfile, NSError* __nullable error)) completionHandler;
```

**Example**

```objectivec
[ACPAudience getVisitorProfile:^(NSDictionary* visitorProfile){
  // handle the visitorProfile here
}];

[ACPAudience getVisitorProfileWithCompletionHandler:^(NSDictionary * _Nullable visitorProfile, NSError * _Nullable error) {
  if (error) {
    // handle error here
  } else {
    // handle the returned visitorProfile here
  }
}];
```

<Variant platform="react-native" api="get-visitor-profile" repeat="3"/>

#### JavaScript

**Example**

```jsx
ACPAudience.getVisitorProfile().then(profile => console.log("AdobeExperienceSDK: Visitor Profile: " + profile));
```

<Variant platform="android" api="register-extension" repeat="5"/>

#### Java

**Syntax**

```java
public  static void registerExtension() throws InvalidInitException
```

**Example**

```java
Audience.registerExtension();
```

<Variant platform="ios" api="register-extension" repeat="10"/>

#### Swift

**Syntax**

```swift
static func registerExtension()
```

**Example**

```swift
ACPAudience.registerExtension()
```

#### Objective-C

**Syntax**

```objectivec
+ (BOOL) registerExtension: (nonnull Class) extensionClass
                     error: (NSError* _Nullable* _Nullable) error;
```

**Example**

```objectivec
[ACPAudience registerExtension];
```

<Variant platform="react-native" api="register-extension" repeat="3"/>

#### JavaScript

**Example**

```jsx
ACPAudience.registerExtension();
```

<Variant platform="android" api="reset" repeat="6"/>

This API resets the Audience Manager UUID and purges the current visitor profile from `android.content.SharedPreferences`. The Audience reset also clears the current in-memory DPID and DPUUID variables.

#### Java

**Syntax**

```java
public static void reset()
```

**Example**

```java
Audience.reset();
```

<Variant platform="ios" api="reset" repeat="11"/>

The `reset` API resets the Audience Manager UUID and purges the current visitor profile from `UserDefaults`. The Audience reset also clears the current in-memory DPID and DPUUID variables.

#### Swift

**Syntax**

```swift
static func reset()
```

**Example**

```swift
ACPAudience.reset()
```

#### Objective-C

**Syntax**

```objectivec
+ (void) reset;
```

**Example**

```objectivec
[ACPAudience reset];
```

<Variant platform="react-native" api="reset" repeat="3"/>

#### JavaScript

**Example**

```jsx
ACPAudience.reset();
```

<Variant platform="android" api="signal-with-data" repeat="9"/>

The `signalWithData` API sends Audience Manager a signal with traits and returns the matching segments for the visitor in a callback.

Audience Manager sends the AAM UUID in response in initial signal call. The AAM UUID is persisted in `SharedPreferences` and is sent by the SDK in all subsequent signal requests. If available, the ECID is also sent in each signal request with the DPID and the DPUUID. The visitor profile that Audience Manager returns is saved in `SharedPreferences` and is updated with every signal call.

When an `AdobeCallbackWithError` is provided, an `AdobeError` can be returned in the eventuality of an unexpected error or if the default timeout (5000ms) is met before the callback is returned with the visitor profile.

#### Java

**Syntax**

```java
public static void signalWithData(final Map<String, String> data, final AdobeCallback<Map<String, String>> callback)
```

* `data` is the traits data for the current visitor.
* `callback` is the void method that is invoked with the visitor's profile as a parameter.

**Example**

```java
AdobeCallback<Map<String, String>> visitorProfileCallback = new AdobeCallback<Map<String, String>>() {
    @Override
    public void call(final Map<String, String> visitorProfile) {
        // handle the returned visitorProfile here
    }
};
​
Map<String, String> traits = new HashMap<String, String>();
traits.put("trait", "xyz");
Audience.signalWithData(traits, visitorProfileCallback);
```

<Variant platform="ios" api="signal-with-data" repeat="14"/>

The `signalWithData` API sends Audience Manager a signal with traits and returns the matching segments for the visitor in a callback.

Audience Manager sends the AAM UUID in response in initial signal call. The AAM UUID is persisted in `NSUserDefaults` and is sent by the SDK in all subsequent signal requests. If available, the Experience Cloud ID (MID) is also sent in each signal request with the DPID and the DPUUID. The visitor profile that Audience Manager returns is saved in `NSUserDefaults` and is updated with every signal call.

Please note that the `signalWithData:withCompletionHandler` method was added in ACPAudience version 2.1.0.

#### Swift

**Syntax**

```swift
static func signal(withData data: [String : String]?, callback: (([AnyHashable : Any]?) -> Void)? = nil)

static func signal(withData data: [String : String], withCompletionHandler completionHandler: @escaping ([AnyHashable : Any]?, Error?) -> Void)
```

**Example**

```swift
ACPAudience.signal(withData: ["key1": "value1", "key2": "value2"], callback: { (visitorProfile) in
  // handle the visitorProfile here  
})

ACPAudience.signal(withData: ["key1": "value1", "key2": "value2"], withCompletionHandler: { (visitorProfile, error) in
  if let error = error {
    // handle error
  } else {
    // handle the returned visitorProfile here
  }    
})
```

#### Objective-C

**Syntax**

```objectivec
+ (void) signalWithData: (NSDictionary<NSString*, NSString*>* __nullable) data
                       callback: (nullable void (^) (NSDictionary* __nullable visitorProfile)) callback;

+ (void) signalWithData: (NSDictionary<NSString*, NSString*>* __nullable) data
                        withCompletionHandler:: (nullable void (^) (NSDictionary* __nullable visitorProfile, NSError* __nullable error)) completionHandler;
```

* `data` is the traits data for the current visitor.
* `callback` is the void method that is invoked with the visitor's profile as a parameter.

**Example**

```objectivec
NSDictionary *traits = @{@"key1":@"value1",@"key2":@"value2"};
[ACPAudience signalWithData:traits callback:^(NSDictionary* _Nullable visitorProfile){
  // handle the returned visitorProfile dictionary here
}];

[ACPAudience signalWithData:traits withCompletionHandler:^(NSDictionary * _Nullable visitorProfile, NSError * _Nullable error) {
  if (error) {
    // handle the error here
  } else {
    // handle the returned visitorProfile dictionary here
  }
}];
```

<Variant platform="react-native" api="signal-with-data" repeat="3"/>

#### JavaScript

**Example**

```jsx
ACPAudience.signalWithData({"yourDataKey": "yourDataValue"}).then(profile => console.log("AdobeExperienceSDK: Visitor Profile: " + profile));
```