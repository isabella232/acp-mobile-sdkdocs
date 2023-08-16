import Tabs from './tabs/privacy-and-gdpr.md'
import Alerts from '/src/pages/documentation/resources/alerts.md'

# Privacy and GDPR

<Alerts query="platform=outdated-version&componentClass=InlineNestedAlert"/>

The Adobe Experience Platform SDKs give you controls to manage consent and privacy obligations, such as the European Union's General Data Protection Regulation (GDPR). Developers can retrieve locally stored identities and set opt status flags for data collection and transmission.

Before implementing these controls, read the [Adobe Experience Platform Privacy Service documentation](https://experienceleague.adobe.com/docs/experience-platform/privacy/home.html).

When Adobe provides software and services to an enterprise, Adobe acts as a data processor for any personal data it processes and stores as part of providing these services. As a data processor, Adobe processes personal data in accordance with your company's permission and instructions, as set out in your agreement with Adobe. As a data controller, you can use the Experience Platform SDKs to support privacy retrieve and delete requests from your mobile apps.

## Setup steps

The following section provides details on how you can set and get privacy status to ensure collection of data suits your user's preferences.

## Using Adobe Experience Cloud Solution extensions

When using **Adobe Experience Cloud** mobile extensions, you should use privacy status settings.

## Set and get privacy status

You can set a privacy status to ensure collection of data suits your user's preferences.

| **Expected Behavior** | Opt In | Opt Out | Opt Unknown |
| :-------------------- | :----- | :------ | :---------- |
| **Analytics** | Hits are sent | Hits are not sent | Hits are queued |
| **Audience** **Manager** | Signals, ID syncs are sent | Signals, ID syncs are not sent | Syncs are queued |
| **Campaign Classic** | User data is stored, calls are sent | User data is cleared, calls are not sent | User data is stored, calls are not sent |
| **Target** | Mbox requests are sent | Mbox requests are not sent | Mbox requests are queued |
| **Campaign Standard** | User data is stored, calls are sent | User data is cleared, calls are not sent | User data is stored, calls are queued |

<InlineAlert variant="info" slots="text"/>

**Analytics users**: If your report suite is not timestamp enabled, hits are discarded until the privacy status changes to `opt in`.

### setPrivacyStatus

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=set-privacy-status"/>

iOS

<Tabs query="platform=ios&task=set-privacy-status"/>

### getPrivacyStatus

You can also programmatically view the current privacy status by using the following:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=get-privacy-status"/>

iOS

<Tabs query="platform=ios&task=get-privacy-status"/>

### getSdkIdentities

To retrieve all the identifier data stored locally by the SDK as a JSON string, use the [getSdkIdentities](./mobile-core/api-reference.md#getsdkidentities) API from the Mobile Core extension.

## Configuration keys

To update the SDK configuration, programmatically, use the following information to change your privacy configuration values. For more information, [Configuration API reference](./mobile-core/configuration/api-reference.md).

| Key | Description |
| :--- | :--- |
| `global.privacy` | Setting to control privacy opt status; values may include `optedin`, `optedout`, `optunknown` |

## Video

<Media slots="video"/>

<https://www.youtube.com/watch?v=kgUJNFQp3PI>

## Additional information

* For more information about GDPR, see [GDPR and Your Business](https://www.adobe.com/privacy/general-data-protection-regulation.html)
* To see the Privacy Service API documentation, go to [Privacy Service API](https://experienceleague.adobe.com/docs/experience-platform/privacy/home.html)
