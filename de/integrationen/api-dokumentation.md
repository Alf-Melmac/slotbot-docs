# API Dokumentation

## Allgemeines

Die API kann verwendet werden, um der eigenen Community zusätzliche Möglichkeiten zu bieten, mit Events zu interagieren oder Informationen anzuzeigen. Teile gerne deine Ideen, vielleicht können auch andere davon profitieren.

Die aktuelle API Version ist `v1`. Breaking changes führen zu einer Anhebung der Versionsnummer. Dies enthält unter anderem Änderungen der Rückgabewerte existierender Felder oder entfernen eines beliebigen Teils der API. Zusätzliche Rückgabefelder oder neue Anfrage-Parameter führen nicht zu einem Versionswechsel. Änderungen an den Endpunkten sind den Changelogs zu entnehmen.

Die meisten Endpunkte benötigen eine Authentifizierung über API-Schlüssel. Diese können derzeit nicht selbst konfiguriert werden, Kontaktaufnahme mit Alf ist erforderlich.

In allen Anfragen bitte den Header `user-agent` mitschicken. Diese Daten werden nur zur Aufrechterhaltung des Betriebes verwendet, wozu auch die Kontaktaufnahme bei Problemen gehören kann. Eine Weitergabe an Dritte erfolgt nicht.

## Dokumentation

{% hint style="success" %}
**Swagger UI Dokumentation**

[https://slotbot.de/backend/swagger-ui/index.html](https://slotbot.de/backend/swagger-ui/index.html)
{% endhint %}

## Events

#### Everything related to events <a href="#operations-tag-events" id="operations-tag-events"></a>

{% swagger src="../.gitbook/assets/slotbot-api-docs_2-5-0.json" path="/events" method="get" %}
[slotbot-api-docs_2-5-0.json](../.gitbook/assets/slotbot-api-docs_2-5-0.json)
{% endswagger %}

{% swagger src="../.gitbook/assets/slotbot-api-docs_2-5-0.json" path="/events" method="post" %}
[slotbot-api-docs_2-5-0.json](../.gitbook/assets/slotbot-api-docs_2-5-0.json)
{% endswagger %}

{% swagger src="../.gitbook/assets/slotbot-api-docs_2-5-0.json" path="/events/{id}" method="get" %}
[slotbot-api-docs_2-5-0.json](../.gitbook/assets/slotbot-api-docs_2-5-0.json)
{% endswagger %}

## Slots

#### Everything related to slots in events <a href="#operations-tag-slots" id="operations-tag-slots"></a>

{% swagger src="../.gitbook/assets/slotbot-api-docs_2-5-0.json" path="/events/{id}/slot/{slotNumber}" method="post" %}
[slotbot-api-docs_2-5-0.json](../.gitbook/assets/slotbot-api-docs_2-5-0.json)
{% endswagger %}

{% swagger src="../.gitbook/assets/slotbot-api-docs_2-5-0.json" path="/events/{id}/slot/{slotNumber}/block" method="post" %}
[slotbot-api-docs_2-5-0.json](../.gitbook/assets/slotbot-api-docs_2-5-0.json)
{% endswagger %}

## Status

#### Server Status <a href="#operations-tag-status" id="operations-tag-status"></a>

{% swagger src="../.gitbook/assets/slotbot-api-docs_2-5-0.json" path="/status" method="get" %}
[slotbot-api-docs_2-5-0.json](../.gitbook/assets/slotbot-api-docs_2-5-0.json)
{% endswagger %}
