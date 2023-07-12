# API documentation

## General

The API can be used to offer your community additional ways to interact with events or to display information. Feel free to share your ideas with us - others may be able to benefit from them as well.

The current API version is `v1`. Major changes will result in a version number bump. This includes, but is not limited to, changes to the return values of existing fields or removing any part of the API. Additional return fields or new request parameters do not result in a version change. Changes to the endpoints can be found in the changelogs.

Most endpoints require authentication via API keys. These cannot currently be configured, you will need to contact Alf.

Please include the `user-agent` header in all requests. This information will only be used to maintain the service, which may include contacting you in the event of a problem. It will not be shared with third parties.

{% hint style="warning" %}
Die Dokumentation entspricht dem aktuellen Entwicklungsstand. Das Deployment findet im nächsten Release ([update-13.06.2023.md](../faq/changelog/update-13.06.2023.md "mention")) statt.
{% endhint %}

## Documentation

## Events

#### Everything related to events <a href="#operations-tag-events" id="operations-tag-events"></a>

{% swagger src="../.gitbook/assets/slotbot-api-docs_2-4-0-SNAPSHOT.json" path="/events" method="post" %}
[slotbot-api-docs_2-4-0-SNAPSHOT.json](../.gitbook/assets/slotbot-api-docs_2-4-0-SNAPSHOT.json)
{% endswagger %}

{% swagger src="../.gitbook/assets/slotbot-api-docs_2-4-0-SNAPSHOT.json" path="/events/{id}" method="get" expanded="false" fullWidth="false" %}
[slotbot-api-docs_2-4-0-SNAPSHOT.json](../.gitbook/assets/slotbot-api-docs_2-4-0-SNAPSHOT.json)
{% endswagger %}

## Slots

#### Everything related to slots in events <a href="#operations-tag-slots" id="operations-tag-slots"></a>

{% swagger src="../.gitbook/assets/slotbot-api-docs_2-4-0-SNAPSHOT.json" path="/events/{id}/slot/{slotNumber}" method="post" %}
[slotbot-api-docs_2-4-0-SNAPSHOT.json](../.gitbook/assets/slotbot-api-docs_2-4-0-SNAPSHOT.json)
{% endswagger %}

{% swagger src="../.gitbook/assets/slotbot-api-docs_2-4-0-SNAPSHOT.json" path="/events/{id}/slot/{slotNumber}/block" method="post" %}
[slotbot-api-docs_2-4-0-SNAPSHOT.json](../.gitbook/assets/slotbot-api-docs_2-4-0-SNAPSHOT.json)
{% endswagger %}

## Status

#### Server Status <a href="#operations-tag-status" id="operations-tag-status"></a>

{% swagger src="../.gitbook/assets/slotbot-api-docs_2-4-0-SNAPSHOT.json" path="/status" method="get" %}
[slotbot-api-docs_2-4-0-SNAPSHOT.json](../.gitbook/assets/slotbot-api-docs_2-4-0-SNAPSHOT.json)
{% endswagger %}
