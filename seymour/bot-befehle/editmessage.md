---
description: >-
  Ersetzt die Nachricht mit der übergebenen ID aus dem aktuellen Kanal mit dem
  übergebenen Text.
---

# EditMessage

![](../../.gitbook/assets/Seymour-EditMessage.gif)

## Befehl

/editMessage `messageId` `nachricht`

## Aktion

Editiert eine existierende Nachricht.

## Antwort

{% hint style="success" %}
Event {} dem aktuellen Kanal hinzugefügt.
{% endhint %}

{% hint style="danger" %}
* Diesem Kanal ist bereits ein Event zugeordnet.
* Kein nicht zugeordnetes Event in der Zukunft gefunden.
* Da war jemand schneller als du. Das Event ist bereits {} zugeordnet.
{% endhint %}
