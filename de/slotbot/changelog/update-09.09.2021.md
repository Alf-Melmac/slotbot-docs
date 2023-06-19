# Update 09.09.2021

## 🗒️ Erwähnenswerte Änderungen

* Die Discord Erinnerungen sind da! Benachrichtigungseinstellungen müssen einmalig aktiviert werden. Diese befinden sich im [Nutzerprofil](https://armamachtbock.de/profile/me).

## ⭐ Neue Features

* Neue Ladeanzeige beim Auswählen eines Events im Kalender. _(commit:_ [_7db5b285_](https://github.com/Alf-Melmac/slotbotServer/commit/7db5b285b9a6dc5a82aa52ce29972d72a64592d1)_)_
* **Profilseite** hinzugefügt _(commit:_ [_9b73b25f_](https://github.com/Alf-Melmac/slotbotServer/commit/9b73b25f987e3261553ba6de6aeacbe3f86972f7)_)_
  * Discord Name und Avatar (Auch Gifs _(commit:_ [_3d586a95_](https://github.com/Alf-Melmac/slotbotServer/commit/3d586a953abd3f75080b9b8881a28e7a338dd9a8)_)_)
  * Anzahl der teilgenommenen Events _(commit:_ [_0a49896c_](https://github.com/Alf-Melmac/slotbotServer/commit/0a49896c6b536ac600cc61bdc812b644d5a6bacf)_)_
  * Eingeloggte Nutzer sehen die vergebenen Berechtigungen
  * Globale Benachrichtigungseinstellungen (Siehe unten) _(commit:_ [_c327d351_](https://github.com/Alf-Melmac/slotbotServer/commit/c327d351915d54a71f537672742beda992c4ea0e)_)_
  * Kann, in bspw. Discord, eingebettet werden _(commit:_ [_51c580f2_](https://github.com/Alf-Melmac/slotbotServer/commit/51c580f2226bf019387df6ccce7b4f963afd351d)_)_
  * Weiterleitung zum eigenen Profil über `/profile/me` _(commit:_ [_f7788f30_](https://github.com/Alf-Melmac/slotbotServer/commit/f7788f30fe8026cb2002e1f7dd0a3f469d701f6f)_)_
  * Anzeige und Bearbeitung der SteamId _(commit:_ [_961b384c_](https://github.com/Alf-Melmac/slotbotServer/commit/961b384c725c0212fe85e2669d3582d4c90efa0d)_)_
* **Event-Erinnerung** über Discord
  * Globale Einstellung, um vor jedem Event zum festgelegten Zeitpunkt über Discord erinnert zu werden.
  * Es können mehrere Benachrichtigungen vor einem Event konfiguriert werden.
* Bilder von Events mit Platzhaltern können nun 17 Mal schneller geladen werden. _(commit:_ [_94055308_](https://github.com/Alf-Melmac/slotbotServer/commit/94055308520cd265cddece6e8280754321a1f0a9)_)_

## 🐞 Fehlerbehebungen

* Wurde aus einem Event mit dem Zurück Knopf des Browser auf den Kalender zurück navigiert, verschwindet der Ladekreis nicht. (Diesmal wirklich behoben) _(commit:_ [_7db5b285_](https://github.com/Alf-Melmac/slotbotServer/commit/7db5b285b9a6dc5a82aa52ce29972d72a64592d1)_)_
* Die Benachrichtigungen beim Umslotten innerhalb eines Events werden nun nicht mehr in falscher Reihenfolge versendet. _(commit:_ [_701abf0d_](https://github.com/Alf-Melmac/slotbotServer/commit/701abf0df462e200b694fd8a2cfc4883f6eadf84)_)_
* Es wurde eine fehlerhafte Konfiguration behoben, die verhinderte Events mit der neuen Beschreibungsgröße abzuspeichern. `(Danke Mäxo für das Aufspüren dieses Fehlers)`
* Das Event-Datum konnte nicht verändert werden, wenn das neue Datum einen Tag festlegte, der im alten Monat nicht vorhanden war. _(commit:_ [_30927b45_](https://github.com/Alf-Melmac/slotbotServer/commit/30927b4598c86f3b2a2ec7f7abc02676370df875)_)_
* mission.sqm Upload `(Dank an Parrot für das Bereitstellen seiner Missionsdateien)`
  * Eine Gruppe ohne Gruppenname verhinderte das gesamte Hochladen. _(commit:_ [_e1f53627_](https://github.com/Alf-Melmac/slotbotServer/commit/e1f53627e59e76e4c0d1434e2118d6026d56dd6f)_)_
  * Führende Leerzeichen in einer Slotbenennung führten dazu, dass die Slotnummer nicht korrekt übernommen wurde. _(commit:_ [_38781d82_](https://github.com/Alf-Melmac/slotbotServer/commit/38781d82482374510127711765520b34017e9429)_)_

***

{% hint style="info" %}
Hinweis zu den Benachrichtigungen: Anpassungen an den Einstellungen werden erst für neue Eintragungen in Events übernommen. Dies kann auch durch Ein- und Ausslotten geschehen.
{% endhint %}

{% hint style="warning" %}
Hinweis zur Steam-ID: Aktuell wird diese nur für die Übergabe an externe System verwendet. In Zukunft kann es dazu kommen, dass darüber ein Login möglich ist. Überprüft also unbedingt eingetragene IDs und tragt **nur eure eigene** Steam64-ID ein.
{% endhint %}
