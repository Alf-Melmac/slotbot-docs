# Update 23.11.2021

## 🗒️ Erwähnenswerte Änderungen

* Der Kalender-Export ist da! Die URL für den Import in euren Kalender findet ihr nach der einmaligen Aktivierung im [Nutzerprofil](https://armamachtbock.de/profile/me).

## ⭐ Neue Features

* **Kalender-Export** im iCal Format. [#kalender-synchronisation](../eventkalender.md#kalender-synchronisation "mention")
  * Gruppenkalender nicht nur auf der Website, sondern auch im privaten Kalender.
  * URL-Shortcuts für das manuelle Tippen der Gruppenkalender-URLs
  * Eigener Kalendar mit allen Events, in denen man geslottet ist.
* Der Arma-Missions-Upload (siehe [#slotliste](../eventerstellung/#slotliste "mention")) ist nun auch während der Editierung eines leeren Events möglich. _(commit:_ [_a93ab019_](https://github.com/Alf-Melmac/slotbotServer/commit/a93ab019b264d192c65c1ff201f5f6c6b452f332)_)_
* Die DAA-Standard Felder bilden nun die [neue Zeitplanung](https://wiki.deutsche-arma-allianz.de/organisation/missionen#zeitplan) ab. _(commit:_ [_83a8f779_](https://github.com/Alf-Melmac/slotbotServer/commit/83a8f779e0205ca9bce54f55242ffbefb1d9d7ac)_)_
* Bessere Ausnutzung der Discord Slotlist-Nachrichten. Absofort wird nicht nur zwischen Gruppen, sondern direkt an Slots getrennt und einige unnötige Absätze und Leerzeichen werden weg gelassen. _(commit:_ [_547a0b21_](https://github.com/Alf-Melmac/slotbotServer/commit/547a0b2139aa0e169f5179ac7f402c4ccb2dd89b)_)_

## 🐞 Fehlerbehebungen

* Die Blockierung von belegten Slots sah bei der Eventeditierung so aus, als könnte sie verändert werden. _(commit:_ [_e4330ec2_](https://github.com/Alf-Melmac/slotbotServer/commit/e4330ec214588835027b6dc406f0a8d4c0a72432)_)_
* Die Favicons der Seiten "Nicht gefunden" (404) und "Nicht erlaubt" (403) konnten nicht gefunden werden. _(commit:_ [_61659546_](https://github.com/Alf-Melmac/slotbotServer/commit/616595460ba4b65d0c7fdd1c54142bac6519314e)_)_
* Der mission.sqm schlug fehl, wenn die Datei 1MB überschritt. Dieses Limit wurde auf 2MB angehoben.
