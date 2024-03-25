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

## Welche Rechte benötigt der Discord Bot?

Um die verschiedenen Funktionen möglichst einfach und reibungslos zur Verfügung stellen zu können, benötigt der Discord Bot einige Rechte. Die folgenden Aktionen werden damit ausgeführt. "Kanäle" inkludieren im folgenden sowohl die Standard Textkanäle, als auch Threads und Forenbeiträge.

* **Kanal anzeigen** und **Nachrichten (in Threads) senden**, um [Events auszugeben](../integrationen/discord/bot-befehle/event-hinzufuegen.md), zu aktualisieren und [Nachrichten an Eventteilnehmer](../integrationen/discord/bot-befehle/event-ping.md) zu senden. Um [Archivnachrichten](../integrationen/discord/archiv.md) zu versenden, muss der Bot außerdem Zugriff auf den Archivkanal haben. Mit der Berechtigung zum Anzeigen von Kanälen können außerdem während der Konfiguration des Archivkanals Auswahlmöglichkeiten angeboten werden.
* **Links einbetten**, um die Event-Details und den Eventtrenner auszugeben.
* (Optional, aber empfohlen) **Rollen verwalten**, um Änderungen der Berechtigungen von [Community-Mitgliedern](../community-verwaltung/communities-guilds.md#spieler) in den zugewiesenen Discord-Rollen widerzuspiegeln.
* (Optional) **Nachrichten verwalten**, um die Slotliste im Event-Kanal anzupinnen.
* (Optional) **Nachrichtenverlauf anzeigen**, um die Informationen zum Anpinnen der Event-Details zwischen oder unter der Slotliste zu entfernen.
  * Mit dieser Berechtigung kann der Bot nicht den Inhalt der Nachrichten anderer Benutzer lesen. Er erhält lediglich Informationen über die Meta-Informationen der Nachrichten. (Mehr dazu im [Discord FAQ](https://support-dev.discord.com/hc/en-us/articles/4404772028055))

Diese zusätzlichen Informationen werden von Discord an den Bot weitergeleitet (Intents [https://discord.com/developers/docs/topics/gateway#list-of-intents](https://discord.com/developers/docs/topics/gateway#list-of-intents)):

* Interaktionen mit dem Bot über Slash Commands.
* Informationen über die Mitglieder eines Discord Servers, um ihnen automatisch Berechtigungen zuzuweisen oder zu entziehen, wenn sie ihre Rolle ändern oder die Verbindung zu einer Community trennen. (`GUILD_MEMBERS`)
* Gelöschte Kanäle und Gelöschte Nachrichten , um Event- und Archivkanalverknüpfungen automatisch zu löschen. (`GUILD_MESSAGES`)

#### Wie kann ich sicher sein, dass keine weiteren Aktionen durchgeführt werden?

Der gesamte Quellcode des Bots wird als Open Source zur Verfügung gestellt. Damit kann selbst geprüft werden, welche Listener aktiv sind und welche Interaktionen ausgeführt werden. Besonders relevant sind die Klassen unter [`de.webalf.slotbot.service.bot`](https://github.com/Alf-Melmac/slotbotServer/tree/master/src/main/java/de/webalf/slotbot/service/bot).
