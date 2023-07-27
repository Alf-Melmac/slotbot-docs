---
description: Antworten auf die am häufigsten gestellten Fragen
---

# FAQs

## Was ist eine Guild?

Ein Discord Server. Üblicherweise gleichzusetzen mit einer Community bzw. einem Clan.

Ein Event hat genau eine Besitzer-Guild. Ein Nutzer kann mehreren Guilds zugeordnet sein.

## Was ist ein Squad?

Eine Gruppe in einem Event. Enthält einen oder mehrere Slots.

## Was ist ein Slot?

Ein einzelner Platz in einem Event. Auf einen Slot meldet sich ein einziger Teilnehmer an und bekundet damit sein Interesse oder sagt seine Teilnahme zu.



## Warum benötigt der Discord Bot Administrator-Rechte?

Um die verschiedenen Funktionen möglichst einfach und reibungslos zur Verfügung stellen zu können, benötigt der Discord Bot Administratorrechte. Folgende Aktionen werden damit ausgeführt:

* Lese- und Schreibrechte in allen Kanälen für die [Ausgabe von Events](../integrationen/discord/bot-befehle/event-hinzufuegen.md) (auch in privaten Kanälen), das Versenden anderer Nachrichten (z.B. [event-ping.md](../integrationen/discord/bot-befehle/event-ping.md "mention")) und [archivieren von Events](../integrationen/discord/archiv.md).
* Nachrichten löschen, die mit den alten [#textbefehle](../integrationen/discord/bot-befehle/#textbefehle "mention")n interagieren. Dadurch bleibt die Verwendung unsichtbar, ähnlich wie bei Interaktionen über [#slash-command](../integrationen/discord/bot-befehle/#slash-command "mention")s.
* Beobachten der gelöschten Nachrichten und Kanäle, um Event- und Archiv-Kanal-Verknüpfungen automatisch aufheben zu können.
* Rollen für die [Berechtigungssteuerung](../integrationen/discord/empfohlene-konfiguration.md) anlegen.
* Es werden **keine Nachrichten mitgeschrieben**, die nicht mit gültigen Textbefehlen anfangen.
* Auf dem Server selbst werden **keine Einstellungen verändert** oder ausgelesen. Lediglich die Slotbot\_ Rollen werden angelegt.

#### Wie kann ich sicher sein, dass keine weiteren Aktionen durchgeführt werden?

Der gesamte Quellcode des Bots wird als Open Source zur Verfügung gestellt. Damit kann selbst geprüft werden, welche Listener aktiv sind und welche Interaktionen ausgeführt werden. Besonders relevant sind die Klassen unter [`de.webalf.slotbot.service.bot`](https://github.com/Alf-Melmac/slotbotServer/tree/master/src/main/java/de/webalf/slotbot/service/bot).
