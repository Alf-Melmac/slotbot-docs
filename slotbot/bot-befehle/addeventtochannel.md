---
description: Wähle ein Event aus und ordne es dem aktuellen Kanal zu.
---

# AddEventToChannel

![](../../.gitbook/assets/Slotbot-AddEventToChannel.gif)

## Befehl

/addEventToChannel

\-> Eventauswahl

## Aktion

Fügt dem aktuellen Kanal ein bereits erstelltes Event hinzu und gibt es aus.

## Antwort

{% hint style="success" %}
Event {} dem aktuellen Kanal hinzugefügt.
{% endhint %}

{% hint style="danger" %}
* Diesem Kanal ist bereits ein Event zugeordnet.
* Kein nicht zugeordnetes Event in der Zukunft gefunden.
* Da war jemand schneller als du. Das Event ist bereits {} zugeordnet.
{% endhint %}
