# API Dokumentation

## Allgemeines

Die API kann verwendet werden, um der eigenen Community zusätzliche Möglichkeiten zu bieten, mit Events zu interagieren oder Informationen anzuzeigen. Teile gerne deine Ideen, vielleicht können auch andere davon profitieren.

Die aktuelle API Version ist `v1`. Breaking changes für zu einer Anhebung der Versionsnummer. Dies enthält unter anderem Änderungen der Rückgabewerte existierender Felder, entfernen eines beliebigen Teils der API. Zusätzliche Rückgabefelder oder neue Anfrage-Parameter führen nicht zu einem Versionswechsel. Änderungen an den Entpunkten sind den Changelogs zu entnehmen.

Die meisten Endpunkte benötigen eine Authentifizierung über API-Schlüssel. Diese können derzeit nicht selbst konfiguriert werden, Kontaktaufnahme mit Alf ist erforderlich.

In allen Anfragen bitte den Header `user-agent` mitschicken. Diese Daten werden nur zur Aufrechterhaltung des Betriebes verwendet, wozu auch die Kontaktaufnahme bei Problemen gehören kann. Eine Weitergabe an Dritte erfolgt nicht.

{% hint style="warning" %}
Die Dokumentation entspricht dem aktuellen Entwicklungsstand. Das Deployment findet im nächsten Release ([update-13.06.2023.md](../faq/changelog/update-13.06.2023.md "mention")) statt.
{% endhint %}

## Dokumentation

## Events

#### Everything related to events <a href="#operations-tag-events" id="operations-tag-events"></a>

{% swagger src="../../.gitbook/assets/slotbot-api-docs_2-4-0-SNAPSHOT.json" path="/events" method="post" %}
[slotbot-api-docs_2-4-0-SNAPSHOT.json](../../.gitbook/assets/slotbot-api-docs_2-4-0-SNAPSHOT.json)
{% endswagger %}

{% swagger src="../../.gitbook/assets/slotbot-api-docs_2-4-0-SNAPSHOT.json" path="/events/{id}" method="get" expanded="false" fullWidth="false" %}
[slotbot-api-docs_2-4-0-SNAPSHOT.json](../../.gitbook/assets/slotbot-api-docs_2-4-0-SNAPSHOT.json)
{% endswagger %}

## Slots

#### Everything related to slots in events <a href="#operations-tag-slots" id="operations-tag-slots"></a>

{% swagger src="../../.gitbook/assets/slotbot-api-docs_2-4-0-SNAPSHOT.json" path="/events/{id}/slot/{slotNumber}" method="post" %}
[slotbot-api-docs_2-4-0-SNAPSHOT.json](../../.gitbook/assets/slotbot-api-docs_2-4-0-SNAPSHOT.json)
{% endswagger %}

{% swagger src="../../.gitbook/assets/slotbot-api-docs_2-4-0-SNAPSHOT.json" path="/events/{id}/slot/{slotNumber}/block" method="post" %}
[slotbot-api-docs_2-4-0-SNAPSHOT.json](../../.gitbook/assets/slotbot-api-docs_2-4-0-SNAPSHOT.json)
{% endswagger %}

## Status

#### Server Status <a href="#operations-tag-status" id="operations-tag-status"></a>

{% swagger src="../../.gitbook/assets/slotbot-api-docs_2-4-0-SNAPSHOT.json" path="/status" method="get" %}
[slotbot-api-docs_2-4-0-SNAPSHOT.json](../../.gitbook/assets/slotbot-api-docs_2-4-0-SNAPSHOT.json)
{% endswagger %}
