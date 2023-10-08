---
description: Alle Update-Nachrichten vor Mai 21 die noch auffindbar waren
---

# Vor 05.2021

## 10.08.2020

Hello World!

## 14.08.2020

> Slotliste wird nun angepinnt

## 17.08.2020

> Neue Features: addSlot und delSlot

## 21.08.2020

> Neues Feature swap

## 11.09.2020

> Reserve funktioniert nun zuverlässiger.
>
> Den gesamten Bug-Stapel abgearbeitet, sollte jetzt resistent gegen alles sein.
>
> Vorbereitung um Unslot über die Slotnummer zu ermöglichen, JavaScript spielt da gerade noch Streiche

## 20.09.2020

> Unslot klappt jetzt auch mit Slotnummern. Außerdem habe ich einige Fehler bei Fehlbenutzung der Befehle slot, unslot und swap behoben.

## 21.09.2020

> Neue Features:
>
> * renameSlot
> * delEvent
> * Für das hinzufügen und das umbenennen von Slots können nun " verwendet werden, um Namen mit Leerzeichen zu ermöglichen
> * Die Slotliste ist nun, auf Wunsch, ähnlicher zu der aktuellen
>
> Fehlerbehebung:
>
> * Eine swap Anfrage konnte manchmal nicht ausgeführt werden, dies wurde behoben. Außerdem wurde der Spamschutz diesbezüglich verbessert

## 25.09.2020

> Ein Event kann nun viel mehr Informationen halten. Alle neuen Felder sind vollkommen optional. Die Eventinfo-Ausgabe wurde komplett überarbeitet
>
> Außerdem profitieren wir nun von erhöhter Sicherheit, sodass von außen nicht mehr unbefugt Änderungen über die API vorgenommen werden können

## 30.09.2020

> Neue Features:
>
> * Überarbeitete Slotliste
> * blockSlot
>
> Fehlerbehebung:
>
> * delSlot entfernt nicht mehr einen ganzen Squad

## 24.10.2020

> Website ist heute ein gutes Stück voran gekommen.
>
> * Den Launcher Eintrag habe ich durch den Login ersetzt
> * Login aufgehübscht
> * Der Login wird nun auf tieferliegenden Seiten auch tatsächlich erzwungen
> * Eventkalender
> * Im Eventkalender werden auch schon die Events angezeigt (Klickt bis Januar/Dezember oder legt neue an)
> * armamachtbock.de zeigt auf die vorhandene Seite, da klappt das mit dem Zertifikat nur leider noch nicht. Ich schaue mal wie ich das löse

## 25.10.2020

> Website:
>
> * Fehlerbehandlung fürs Login
> * Tooltip eines Events zeigt nun dessen Beschreibung

## 28.10.2020

> Website:
>
> * NEU: Event Wizard
> * Event hover im Kalender überarbeitet
> * NEU: Klick auf ein Event im Kalender, um Details zu diesem anzuschauen

## 30.10.2020

> Website:
>
> * Nach der Eventerstellung wird nun auf die Detailseite weitergeleitet
> * Man kommt aus den Eventdetails über die Navigation in den Kalender/die Übersicht
> * Logogröße angepasst, nicht mal 1/10 der ursprünglichen Größe, sollte die Ladezeiten merkbar verbessern
> * Startseite lädt jetzt schneller, weil die Spielebilder mindestens halbiert wurden
> * Bekannte Modpacks (AMB und Joint Ops) können nun in den Event Details heruntergeladen werden
> * Eingeloggte Personen erhalten nun Rollen anhand der Discord Rollen. Um den Event Wizard öffnen zu können braucht ihr nun also die Creator Rolle (oder höher)
> * Anzeigeproblem im Kalender behoben, wenn ein Event keine Beschreibung hat

## 31.10.2020

> Allgemein:
>
> * Events ohne Slotliste bekommen keine Reserve mehr
>
> Website:
>
> * Aus den Eventdetails kann nun direkt der passende Discord Kanal geöffnet werden
> * Für Creator oder höher gibt es jetzt einen Knopf in Events, die noch keinem Kanal zugeordnet wurden (Dies dient als Vorbereitung, der Bot muss dafür erst erweitert werden)
> * Die Authentifizierung läuft nun über den Slotbot hier und nicht mehr über den OAuth Test

## 04.11.2020

> Event-Bilder werden nun unterstützt. Sowohl über die Website, als auch den Bot können diese gesetzt werden und werden auf den entsprechenden Seite angezeigt. Aktueller Default ist das AMB Logo, wenn keine Bild-Url angegeben wurde
>
> Im Discord-Kanal kann nun auf den Titel geklickt werden und das Event öffnet sich im Browser
>
> Es gibt nun einen Bot-Befehl um ein im Wizard erstelltes Event einem Kanal hinzuzufügen.

## 05.11.2020

> Website:
>
> Squad-Nummern werden nun auf eindeutig überprüft. Im Wizard werdet ihr beim Klick auf Speichern darauf hingewiesen, wenn es doppelte Slotnummern gibt
>
> Ihr könnt nun Squads verschieben, um die Position auch nach befüllen der Felder noch verändern könnt
>
> Bot:
>
> Hat einige Versionsupdates bekommen und läuft wieder geschmeidigt

## 13.11.2020

> Nur die wichtigsten Dinge, weil sich viel getan hat:
>
> * Im Wizard sind jetzt nicht mehr so viele Felder Pflichtfelder
> * Events können jetzt von Creator oder höher bearbeitet werden. Dazu gibt es in den Details ein Stift-Symbol zum Anklicken
> * Die Discord API streikte rum, jetzt verhindere ich auftretende Probleme (hoffentlich) schon vorher und habe die Geschwindigkeit durch zwischenspeichern erhöht
> * Die Event-Details werden nun wie im Discord auch formatiert
> * Und natürlich die witzigen 404 und 403 (Not Found und Permission Denied) Seiten :eyes: [https://discordapp.com/channels/706254758721224707/707360356887953520/776591997372465223](https://discordapp.com/channels/706254758721224707/707360356887953520/776591997372465223)
>
>
>
> Außerdem habe ich noch alle möglichen Texte, vor Allem die Hilfen, des Bots aufgefrischt, verbessert und für den Start bereit gemacht

## 23.01.2021

> Hotfix für die Event-Datumsanzeige und das neue Modpack.

## 16.03.2021

> **Hotifx time** :tools:
>
> Unser Bot hat ein Problem gehabt, wenn sich mehrere neue Mitspieler, zeitnah in das gleiche Event slotten wollten. Dieser Fehler ist nun behoben.
