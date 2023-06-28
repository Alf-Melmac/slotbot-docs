# Update 14.05.2021

## 🗒️ Erwähnenswerte Änderungen

* Die URL zur Event-Bearbeitung hat sich von `/edit/{id}` zu `/{id}/edit` geändert. _(commit:_ [_9acc42b6_](https://github.com/Alf-Melmac/slotbotServer/commit/9acc42b67925ce07e30c2d6afacb7ca5e00c96a1)_)_
* Im Zuge der Event-System-Umstellung haben sich die API-Ausgaben bezüglich der Event-Details verändert. Da bisher kein System die Details eines Events verarbeitet, gibt es keine neue API-Version.

## ⭐ Neue Features

* **Neuer Befehl RandomSlot**. _(commit:_ [_4dedaa7e_](https://github.com/Alf-Melmac/slotbotServer/commit/4dedaa7ed9c77e73667e25310a7c25d87f96db0a)_)_
* Ungültige API Anfragen durch bspw. fehlende Argumente werden nun mit sprechender Fehlermeldung abgelehnt. _(commit:_ [_85fa8837_](https://github.com/Alf-Melmac/slotbotServer/commit/85fa8837567a0ab692d2559cd2cd03eef189dfad)_)_
* **Gesamtes Event System umgestellt**. Events sind nun allgemein gehalten und nicht Arma bezogen.
  * "Event-Typen" gruppieren nun Events. Diese beschreiben das Spiel und eventuelle Details dazu. Diese werden in den Event-Details ganz oben und im Discord in der Fußzeile der Events angezeigt.
  * 23 "Event Felder" beschreiben spielbezogene Details, die der Missionbauer festlegt.
  * Der Event Wizard hat deswegen eine Gesamtüberholung erhalten und beinhaltet nun auf der zweiten Seite die Detail-Felder.
  * Als Beispiel wurden Standard-Details für den Typen "Arma 3" eingefügt.
* **Farben für Events**.
  * Je nach festgelegtem Event-Typ werden nun ausgewählt Farben sowohl auf der Website als auch im Discord angezeigt.
* In den Event-Details gibt es jetzt einen Zurück-Button, um zum Kalender zu gelangen. _(commit:_ [_b9f7ca16_](https://github.com/Alf-Melmac/slotbotServer/commit/b9f7ca166454b2ace055e8232881a1cf0c2013f1)_)_
* Der Ersteller einer Mission wird nun in den Event-Details angezeigt.
* Die Beschreibung eines Events wird nun unter dem Bild geöffnet, so sind längere Texte leichter lesbar.
* Im Eventkalender wird nun beim Hovern über ein Event zusätzlich der Name des Events angezeigt _(commit:_ [_f7ee902a_](https://github.com/Alf-Melmac/slotbotServer/commit/f7ee902ad47b12477e2b776d18f156cc4333ff09)_)_
* Der Hinweis zum "Impressum & Datenschutzerklärung" in der Fußzeile wurde verkleinert. _(commit:_ [_7dd08e52_](https://github.com/Alf-Melmac/slotbotServer/commit/7dd08e5237d11b70107e86ff0d3ec5152ed00297)_)_
* Überflüssige Leerzeichen vor und hinter Eingaben in Events werden nun entfernt. (Grüße an Teshaz) _(commit:_ [_da3c8b43_](https://github.com/Alf-Melmac/slotbotServer/commit/da3c8b43a4d0b0dc9eddcbdb7f976df417790f73)_,_ [_79d66e43_](https://github.com/Alf-Melmac/slotbotServer/commit/79d66e43776c0bc72d16ed040951765d6b4c5450)_)_

## 🐞 Fehlerbehebungen

* Im erwarteten Fehlerfall wurde fälschlicherweise ein 500er anstelle eines 400 Status-Codes versendet. _(commit:_ [_1507870d_](https://github.com/Alf-Melmac/slotbotServer/commit/1507870d9d261ebeebc7db7b12a1695d91bd9882)_)_
* In seltenen Fällen wird die Slotliste anstelle der Pin-Information gelöscht. `(Danke Ossi für den Hinweis auf dieses Problem)` _(commit:_ [_def26af4_](https://github.com/Alf-Melmac/slotbotServer/commit/def26af483d329fa9941644307dd9513b27ff218)_)_
* Wurde aus einem Event mit dem Zurück Knopf des Browser auf den Kalender zurück navigiert, verschwindet der Ladekreis nicht. `(Danke an Nameless für das Finden dieses Fehlers)` _(commit:_ [_4e415ccd_](https://github.com/Alf-Melmac/slotbotServer/commit/4e415ccd863b3dd5ef2f625414bc357a6d8c7deb)_)_
* Während der Eventerstellung konnte nicht mit den Pfeiltasten innerhalb von Textfelder navigiert werden, da zwischen den Wizard-Schritten gesprungen wurde. _(commit:_ [_a8f15b56_](https://github.com/Alf-Melmac/slotbotServer/commit/a8f15b56fcb509901a0bd7f0a5e4720c5054e87d)_)_
* Ist der externe Server für die Befüllung der administrativen Serververwaltung nicht verfügbar wurde ein Fehler geworfen. `(Danke an Phil für das Ausschalten des Servers)` _(commit:_ [_ea1d3e56_](https://github.com/Alf-Melmac/slotbotServer/commit/ea1d3e56e9dc718ad0595cdb552b13e169f23c10)_)_
* Rechtschreibfehler in Bot-Antworten und Befehl-Aliassen korrigiert. _(commit:_ [_e1ecdef4_](https://github.com/Alf-Melmac/slotbotServer/commit/e1ecdef402179e0582ad046d7e097938a6fd751d)_)_
