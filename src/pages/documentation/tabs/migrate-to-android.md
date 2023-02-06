<Variant platform="java" repeat="1"/>

```java
// YourApplication.java
@Override
public void onCreate() {
    super.onCreate();
    MobileCore.setApplication(this);
    MobileCore.setLogLevel(LoggingMode.ERROR);
    MobileCore.configureWithAppID("ENVIRONMENT_FILE_ID");
    List<Class<? extends Extension>> extensions = new ArrayList<>();
    extensions.add(Lifecycle.EXTENSION);
    extensions.add(Signal.EXTENSION);
    extensions.add(UserProfile.EXTENSION);
    extensions.add(Assurance.EXTENSION);
    extensions.add(Identity.EXTENSION);
    MobileCore.registerExtensions(extensions, o -> {
        Log.d(LOG_TAG, "AEP Mobile SDK is initialized");
    });
}


```

<Variant platform="kotlin" repeat="1"/>

```kotlin
// YourApplication.kt
override fun onCreate() {
    super.onCreate()
    MobileCore.setApplication(this)
    MobileCore.setLogLevel(LoggingMode.VERBOSE)
    MobileCore.configureWithAppID("ENVIRONMENT_FILE_ID")
    val extensions = listOf(Identity.EXTENSION, Signal.EXTENSION, Lifecycle.EXTENSION, UserProfile.EXTENSION, Assurance.EXTENSION)
    MobileCore.registerExtensions(extensions) {
        Log.d(LOG_TAG, "AEP Mobile SDK is initialized")
    }
}
```
