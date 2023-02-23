<Variant platform="android" task="collect-consent-settings" repeat="4"/>

#### Java

You can set the collect consent to one of the following values:

* `y`
* `n`

To understand the expected behavior, see the _Update and get collect consent preferences_ table above.

<Variant platform="android" task="get-consents" repeat="6"/>

#### Java

**Syntax**

```java
public static void getConsents(final AdobeCallback<Map<String, Object>> callback);
```

* _callback_ - callback invoked with the current consents of the extension. If an `AdobeCallbackWithError` is provided, an `AdobeError`, can be returned in the eventuality of any error that occured while getting the user consents. The callback may be invoked on a different thread.

**Example**

```java
Consent.getConsents(new AdobeCallback<Map<String, Object>>() {
    @Override
    public void call(Map<String, Object> currentConsents) {
        if (currentConsents == null) { return; }
    final Map<String, Object> consents = currentConsets.get("consents");
    final Map<String, Object> collectConsent = consents.get("collect");
    final String collectConsentStatus = collectConsent.get("val");
    // inspect collectConsentStatus
    }
});
```

<Variant platform="android" task="set-privacy-status" repeat="8"/>

You can set the privacy status to one of the following values:

* `MobilePrivacyStatus.OPT_IN`
* `MobilePrivacyStatus.OPT_OUT`
* `MobilePrivacyStatus.UNKNOWN`

To understand the expected behavior, see the "Set and get privacy status" table above.

#### Java

**Syntax**

```java
public static void setPrivacyStatus(final MobilePrivacyStatus privacyStatus);
```

**Example**

```java
MobileCore.setPrivacyStatus(MobilePrivacyStatus.OPT_OUT);
```

<Variant platform="ios" task="set-privacy-status" repeat="13"/>

You can set privacy status to one of the following values:

* `ACPMobilePrivacyStatusOptIn`
* `ACPMobilePrivacyStatusOptOut` 
* `ACPMobilePrivacyStatusUnknown`

To understand the expected behavior, see the _Set and get privacy status_ table above.

#### Swift

**Syntax**

```swift
class func setPrivacyStatus(_ status: ACPMobilePrivacyStatus) {
}
```

**Example**

```swift
ACPCore.privacyStatus = ACPMobilePrivacyStatusOptIn
```

#### Objective-C

**Syntax**

```objectivec
+ (void) setPrivacyStatus: (ACPMobilePrivacyStatus) status;
```

**Example**

```objectivec
[ACPCore setPrivacyStatus:ACPMobilePrivacyStatusOptIn];
```

<Variant platform="android" task="get-privacy-status" repeat="8"/>

The enum representation of the privacy status that corresponds to the following statuses:

* `MobilePrivacyStatus.OPT_IN`
* `MobilePrivacyStatus.OPT_OUT`
* `MobilePrivacyStatus.UNKNOWN`

#### Java

**Syntax**

```java
void getPrivacyStatus(AdobeCallback<MobilePrivacyStatus> callback);
```

* _callback_ is invoked after the privacy status is available.
* If an instance of  `AdobeCallbackWithError` is provided, and you are fetching the attributes from the Mobile SDK, the timeout value is 5000ms. If the operation times out or an unexpected error occurs, the `fail` method is called with the appropriate `AdobeError`.

**Example**

```java
MobileCore.getPrivacyStatus(new AdobeCallback<MobilePrivacyStatus>() {
    @Override
    public void call(MobilePrivacyStatus value) {
          System.out.println("getPrivacyStatus: " + status);
    }
});
```

<Variant platform="ios" task="get-privacy-status" repeat="14"/>

The enum representation of the privacy status that corresponds to the following statuses:

* `ACPMobilePrivacyStatusOptIn` 
* `ACPMobilePrivacyStatusOptOut`
* `ACPMobilePrivacyStatusUnknown`

#### Swift

**Syntax**

```swift
class func getPrivacyStatus(_ callback: @escaping (_ status: ACPMobilePrivacyStatus) -> Void)

class func getPrivacyStatus(withCompletionHandler completionHandler: @escaping (_ status: ACPMobilePrivacyStatus, _ error: Error?) -> Void)
```

* _callback_ is invoked after the privacy status is available.
* _completionHandler_ is invoked with the current privacy status, or _error_ if an unexpected error occurs or the request times out. The default timeout is 5000ms.

**Example**

```swift
ACPCore.getPrivacyStatus(
    { status in
        switch status {
            case ACPMobilePrivacyStatusOptIn:
                print("Privacy Status: Opt-In")
            default:
                break
        }
    })


ACPCore.getPrivacyStatus(withCompletionHandler: { status, error in
    if error != nil {
        // handle error here
    } else {
        // handle the retrieved privacy status
    }
})
```
#### Objective-C

**Syntax**

```java
+ (void) getPrivacyStatus: (nonnull void (^) (ACPMobilePrivacyStatus status)) callback;
+ (void) getPrivacyStatusWithCompletionHandler: (nonnull void (^) (ACPMobilePrivacyStatus status, NSError* _Nullable error)) completionHandler;
```

* _callback_ is invoked after the privacy status is available.
* _completionHandler_ is invoked with the current privacy status, or _error_ if an unexpected error occurs or the request times out. The default timeout is 5000ms.

**Example**

```objectivec
[ACPCore 
getPrivacyStatus:^(ACPMobilePrivacyStatus status) { 
     switch (status) { 
          case ACPMobilePrivacyStatusOptIn: NSLog(@"Privacy Status: Opt-In");               break; 
          } 
}];


[ACPCore getPrivacyStatusWithCompletionHandler:^(ACPMobilePrivacyStatus status, NSError * _Nullable error) {
        if (error) {
            // handle error here
        } else {
            // handle the retrieved privacy status
        }
    }];
```