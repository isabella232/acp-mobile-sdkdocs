<Variant platform="android" task="add" repeat="3"/>

#### Java

1. Add the Mobile Core and Target extensions to your project using the app's Gradle file.

```java
implementation 'com.adobe.marketing.mobile:sdk-core:1.+'
implementation 'com.adobe.marketing.mobile:target:1.+'
```

<Variant platform="ios" task="add" repeat="2"/>

1. Add the ACPCore and ACPTarget CocoaPods to your project via your `Podfile`.

```ruby
pod 'ACPCore','~>2.0'
pod 'ACPTarget','~>2.0'
```

<Variant platform="react-native" task="add" repeat="7"/>

#### JavaScript

1. Install Target.

```javascript
npm install @adobe/react-native-acptarget
react-native link @adobe/react-native-acptarget
```

2. Import the extension and related libraries.

```javascript
import {ACPTarget, ACPTargetPrefetchObject, ACPTargetRequestObject, ACPTargetOrder, ACPTargetProduct, ACPTargetParameters} from '@adobe/react-native-acptarget';
```

3. Get the extension version.

```javascript
ACPTarget.extensionVersion().then(version => console.log("AdobeExperienceSDK: ACPTarget version: " + version));
```

<Variant platform="android" task="register" repeat="4"/>

#### Java

In your Application's `onCreate()` method, after calling the `setApplication()` method, register Target with Mobile Core.

Here is code sample that calls these set up methods:

```java
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.Target;
import com.adobe.marketing.mobile.Identity;

public class TargetApp extends Application {

 @Override
 public void onCreate() {
     super.onCreate();
     MobileCore.setApplication(this);
     MobileCore.configureWithAppId("yourAppId");

     try {
         Target.registerExtension();
         Identity.registerExtension();
         MobileCore.start(null);
     } catch (Exception e) {
         //Log the exception
     }
 }
}
```

<Variant platform="ios" task="register" repeat="5"/>

#### Swift

```swift
import ACPCore
import ACPTarget

func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
  ACPCore.configure(withAppId: "yourAppId")   
  ACPTarget.registerExtension()
  ACPIdentity.registerExtension()
  ACPCore.start(nil)
  // Override point for customization after application launch.
  return true
}
```

#### Objective-C

In your app's `didFinishLaunchingWithOptions` function, register the Target extension with Mobile Core:

```objectivec
#import "ACPCore.h"
#import "ACPTarget.h"
#import "ACPIdentity.h"

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  [ACPCore configureWithAppId:@"yourAppId"];
  [ACPTarget registerExtension];
  [ACPIdentity registerExtension];
  [ACPCore start:nil];
  // Override point for customization after application launch.
  return YES;
}
```

<Variant platform="react-native" task="register" repeat="3"/>

To register the Target extension with the Mobile Core extension, use the following API:

#### JavaScript

```javascript
ACPTarget.registerExtension();
```

<Variant platform="android" task="target-order" repeat="5"/>

#### Java

**Syntax**

```java
public TargetOrder(final String id, final double total, final List<String> purchasedProductIds)
```

**Example**

```java
List<String> purchasedProductIds = new ArrayList<String>();
purchasedProductIds.add("34");
purchasedProductIds.add("125");
TargetOrder targetOrder = new TargetOrder("123", 567.89, purchasedProductIds);
```

<Variant platform="ios" task="target-order" repeat="10"/>

#### Swift

**Syntax**

```swift
public convenience init(id orderId: String, total: NSNumber?, purchasedProductIds: [String]?)
```

**Example**

```swift
let order = ACPTargetOrder(id: "ADCKKBC", total: NSNumber(value: 400.50), purchasedProductIds: ["34", "125"])
```

#### Objective-C

**Syntax**

```objectivec
+ (nonnull instancetype) targetOrderWithId: (nonnull NSString*) orderId total: (nullable NSNumber*) total purchasedProductIds: (nullable NSArray <NSString*>*)  purchasedProductIds;
```

**Example**

```objectivec
ACPTargetOrder *order = [ACPTargetOrder targetOrderWithId:@"ADCKKBC" total:@(400.50) purchasedProductIds:@[@"34", @"125"]];
```

<Variant platform="react-native" task="target-order" repeat="2"/>

**JavaScript**

```javascript
var targetOrder = new ACPTargetOrder("ADCKKBC", 400.50, ["34","125"]);
```

<Variant platform="android" task="target-product" repeat="5"/>

#### Java

**Syntax**

```java
public TargetProduct(final String id, final String categoryId)
```

**Example**

```java
TargetProduct targetProduct = new TargetProduct("123", "Books");
```

<Variant platform="ios" task="target-product" repeat="10"/>

### Swift

**Syntax**
```swift
public convenience init(id productId: String, categoryId: String?)
```

**Example**

```swift
let product = ACPTargetProduct(id: "24D334", categoryId: "Stationary")
```

#### Objective-C

**Syntax**

```objectivec
+ (nonnull instancetype) targetProductWithId: (nonnull NSString*) productId categoryId: (nullable NSString*) categoryId;
```

**Example**

```objectivec
ACPTargetProduct *product = [ACPTargetProduct targetProductWithId:@"24D334" categoryId:@"Stationary"];
```

<Variant platform="react-native" task="target-product" repeat="2"/>

**JavaScript**

```javascript
var targetProduct = new ACPTargetProduct("24D334", "Stationary");
```

<Variant platform="android" task="target-parameters" repeat="5"/>

#### Java

**Syntax**

```java
TargetParameters targetParameters = new TargetParameters.Builder()
.parameters(new HashMap<String, String>())
.profileParameters(new HashMap<String, String>())
.product(new TargetProduct("productId", "productCategoryId"))
.order(new TargetOrder("orderId", 0.0, new ArrayList<String>()))
.build();
```

**Example**

```java
List<String> purchasedProductIds = new ArrayList<String>();
purchasedProductIds.add("34");
purchasedProductIds.add("125");
TargetOrder targetOrder = new TargetOrder("123", 567.89, purchasedProductIds);

TargetProduct targetProduct = new TargetProduct("123", "Books");

Map<String, String> mboxParameters = new HashMap<String, String>();
mboxParameters1.put("status", "platinum");

Map<String, String> profileParameters = new HashMap<String, String>();
profileParameters1.put("gender", "male");

TargetParameters targetParameters = new TargetParameters.Builder()
.parameters(mboxParameters)
.profileParameters(profileParameters)
.product(targetProduct)
.order(targetOrder)
.build();
```

<Variant platform="ios" task="target-parameters" repeat="10"/>

#### Swift

**Syntax**

```swift
public convenience init(parameters: [AnyHashable: Any]?, profileParameters: [AnyHashable: Any]?, order: ACPTargetOrder?, product: ACPTargetProduct?)
```

**Example**

```swift
let mboxParameters = [
"status": "Platinum"
]
let profileParameters = [
"gender": "female"
]

let product = ACPTargetProduct(id: "24D334", categoryId: "Stationary")

let order = ACPTargetOrder(id: "ADCKKBC", total: NSNumber(value: 400.50), purchasedProductIds: ["34", "125"])

let targetParameters = ACPTargetParameters(parameters: mboxParameters, profileParameters: profileParameters, product: product, order: order)
```

#### Objective-C

**Syntax**

```objectivec
+ (nonnull instancetype) targetParametersWithParameters: (nullable NSDictionary*) targetParameters profileParameters: (nullable NSDictionary*) profileParameters product: (nullable ACPTargetProduct*) product order: (nullable ACPTargetOrder*) order;
```

**Example**

```objectivec
NSDictionary *mboxParameters = @{@"status":@"Platinum"};
NSDictionary *profileParameters = @{@"gender":@"female"};

ACPTargetProduct *product = [ACPTargetProduct targetProductWithId:@"24D334" categoryId:@"Stationary"];

ACPTargetOrder *order = [ACPTargetOrder targetOrderWithId:@"ADCKKBC" total:@(400.50) purchasedProductIds:@[@"34", @"125"]];

ACPTargetParameters *targetParameters = [ACPTargetParameters targetParametersWithParameters:mboxParameters
profileParameters:profileParameters
product:product
order:order];
```

<Variant platform="react-native" task="target-parameters" repeat="2"/>

**JavaScript**

```javascript
var mboxParameters = {"status": "platinum"};
var profileParameters = {"gender": "female"};
var targetProduct = new ACPTargetProduct("24D334", "Stationary");
var purchaseIDs = ["34","125"];
var targetOrder = new ACPTargetOrder("ADCKKBC", 400.50, purchaseIDs);
var targetParameters = new ACPTargetParameters(mboxParameters, profileParameters, targetProduct, targetOrder);
```

<Variant platform="android" task="visual-preview" repeat="2"/>

On Android, when the application is launched as a result of a deep link, the Mobile Core's [collectLaunchInfo](../../mobile-core/api-reference.md#collectlaunchinfo) API is internally invoked, and the Target activity and deep link information is extracted from the Intent extras.

The SDK can only collect information from the launching Activity if [setApplication](../../mobile-core/api-reference.md#setapplication) API has been called. Setting the Application is only necessary on an Activity that is also an entry point for your application. However, setting the Application on each Activity has no negative impact and ensures that the SDK always has the necessary reference to your Application. We recommend that you call `setApplication` API in each of your Activities.

<Variant platform="ios" task="visual-preview" repeat="7"/>

On iOS, the Mobile Core's [collectLaunchInfo](../../mobile-core/api-reference.md#collectlaunchinfo) API can be invoked with the Target preview deep link as shown below: 

#### Swift

**Example**

```swift
ACPCore.collectLaunchInfo(["adb_deeplink" : "com.adobe.targetpreview://app.adobetarget.com?at_preview_token=tokenFromTarget"])
```

#### Objective-C

**Example**

```objectivec
[ACPCore collectLaunchInfo: @{@"adb_deeplink":@"com.adobe.targetpreview://app.adobetarget.com?at_preview_token=tokenFromTarget"}];`
```