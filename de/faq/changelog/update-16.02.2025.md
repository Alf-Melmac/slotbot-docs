# Update 16.02.2025

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Slotbot-Server</strong></td><td>2.16.1 <img src="../../.gitbook/assets/Badge-New.png" alt="Neu" data-size="line"></td><td><a href="https://github.com/Alf-Melmac/slotbotServer/releases/tag/v2.16.0">https://github.com/Alf-Melmac/slotbotServer/releases/tag/v2.16.0</a></td></tr><tr><td><strong>Slotbot-Frontend</strong></td><td>1.15.1 <img src="../../.gitbook/assets/Badge-New.png" alt="Neu" data-size="line"></td><td><a href="https://github.com/Alf-Melmac/slotbot-frontend/releases/tag/v1.15.0">https://github.com/Alf-Melmac/slotbot-frontend/releases/tag/v1.15.0</a></td></tr></tbody></table>

## 🐞 Fehlerbehebungen

* Fehlermeldung nach dem Importieren einer mission.sqm. `(Danke GSG9_abzocker für den Hinweis)` _(commit:_ [_b947baaf_](https://github.com/Alf-Melmac/slotbotServer/commit/b947baafe2661cdcddd7d19a75145e09b814fe71)_)_
* Verbesserung rund um die Speicherung von Änderungen in der Slotliste eines Events. Dies verhindert unter anderem, dass fälschlicherweise Benachrichtigungen über eine nicht stattgefundene Abmeldung versendet werden. _(commit:_ [_9855000f_](https://github.com/Alf-Melmac/slotbotServer/commit/9855000f05f069cc8bc9c97e714a1d642786d134)_)_

## 🔮 Feature-Vorschau

* Die Zuordnung von Voraussetzungen ohne Selbstzuordnung ist nur bei aktivierter Merkmalsvorschau möglich. _(commit:_ [_b5b7fb85_](https://github.com/Alf-Melmac/slotbot-frontend/commit/b5b7fb854d3d9de055b14636b9c5c9d17f40af44)_)_
* Voraussetzungslisten können gelöscht werden. _(commit:_ [_2746feac_](https://github.com/Alf-Melmac/slotbot-frontend/commit/2746feac5210dac2fe363ef21b8f327fc92f23e1)_,_ [_5ce60391_](https://github.com/Alf-Melmac/slotbotServer/commit/5ce60391573b5f82adeabe2f6d305fb59cb91f00)_)_
* Fehlende Übersetzung für geerbte Squad-Voraussetzungen in den Slot-Regeln ergänzt. _(commit:_ [_d95c1bdb_](https://github.com/Alf-Melmac/slotbot-frontend/commit/d95c1bdb31e80382769758c310d42ae3a04c5da9)_)_
* Nach erfolgreicher Bearbeitung der Slotliste mit Voraussetzungen wurde diese weiterhin als bearbeitet angezeigt und der Nutzende wurde zum erneuten Speichern aufgefordert. _(commit:_ [_d95c1bdb_](https://github.com/Alf-Melmac/slotbot-frontend/commit/d95c1bdb31e80382769758c310d42ae3a04c5da9)_)_
