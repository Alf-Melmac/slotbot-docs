---
description: >-
  Danke für das Interesse an der Mitarbeit! Alle Beiträge sind für das Projekt
  sehr wertvoll!
icon: layer-plus
---

# Mitwirken

Der Slotbot ist vollständig Open Source und unter der AGPLv3-Lizenz auf GitHub veröffentlicht. Die meisten neuen Funktionen basieren auf direktem Feedback der Nutzenden. Du kannst dich aktiv an Diskussionen über neue Funktionen beteiligen, indem du dich auf [Discord](https://discord.gg/3XU4urPuds) einbringst.

## Möglichkeiten der Mitwirkung

Es spielt keine Rolle, ob du Software entwickeln kannst oder nicht. Wir profitieren von jedem/r, der/die mitwirkt.

* **Übersetzungen:** Sowohl der Slotbot selbst als auch diese Dokumentation sind in deutscher und englischer Sprache verfügbar. Ergänze, korrigiere oder übersetze.
* **Feedback geben:** Wir arbeiten ständig daran, den Slotbot besser zu machen. Dafür brauchen wir deine Hilfe! Sag uns, wie du den Slotbot nutzt, welche Funktionen du dir wünschst und was dir gefällt.
* **Weiterempfehlen:** Erzähle anderen vom Slotbot!
* **Trage zur Codebasis bei**: Hilf uns, Probleme im Quellcode zu finden, den Slotbot noch leistungsfähiger zu machen und mit neuen, spannenden Funktionen zu erweitern.

Hier findest du eine grobe Übersicht über den verwendeten Tech Stack: [https://stackshare.io/alf-melmac/slotbot](https://stackshare.io/alf-melmac/slotbot) Ansonsten einfach einen Blick in die Repositories für den [Server](https://github.com/Alf-Melmac/slotbotServer) oder das [Frontend](https://github.com/Alf-Melmac/slotbot-frontend) werfen.

## Ablauf

Bevor du dich Hals über Kopf in deinen Beitrag stürzt, sprich dein Vorhaben kurz mit den Maintainern ab. SSo stellen wir sicher, dass wir in dieselbe Richtung und nicht an denselben Dingen arbeiten.

{% embed url="https://github.com/Alf-Melmac/slotbotServer/blob/develop/CONTRIBUTING.md" %}

## Den Slotbot lokal starten

### Server

1. Clone or download the [repository](https://github.com/Alf-Melmac/slotbotServer).
2. Fill the [application.properties](https://github.com/Alf-Melmac/slotbotServer/blob/develop/src/main/resources/application.properties).
3. Start the [SlotbotApplication](https://github.com/Alf-Melmac/slotbotServer/blob/develop/src/main/java/de/webalf/slotbot/SlotbotApplication.java).
   1. If you are using IntelliJ, there is a [run configuration](https://github.com/Alf-Melmac/slotbotServer/blob/develop/.idea/runConfigurations/SlotbotApplication.xml) for this.

### Frontend

1. Clone or download the [repository](https://github.com/Alf-Melmac/slotbot-frontend).
2. Install dependencies with `npm install` (Use the currently available LTS Node version).
3. Start the project with `npm run dev`.
   1. If you are using IntelliJ or Webstorm, there is a [run configuration](https://github.com/Alf-Melmac/slotbot-frontend/blob/develop/.idea/runConfigurations/dev.xml) for this.
