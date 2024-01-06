# Update 22.02.2023

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th data-hidden></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Slotbot-Server</strong></td><td>2.1.1 <img src="../../.gitbook/assets/Badge-New.png" alt="Neu" data-size="line"></td><td></td><td><a href="https://github.com/Alf-Melmac/slotbotServer/releases/tag/v2.1.1">https://github.com/Alf-Melmac/slotbotServer/releases/tag/v2.1.1</a></td></tr><tr><td><strong>Slotbot-Frontend</strong></td><td>1.1.1 <img src="../../.gitbook/assets/Badge-New.png" alt="Neu" data-size="line"></td><td></td><td><a href="https://github.com/Alf-Melmac/slotbot-frontend/releases/tag/v1.1.1">https://github.com/Alf-Melmac/slotbot-frontend/releases/tag/v1.1.1</a></td></tr></tbody></table>

## ⭐ Neue Features

* Zufällige Slots sind nicht mehr zufaellig. _(commit:_ [_ff39c9bf_](https://github.com/Alf-Melmac/slotbotServer/commit/ff39c9bf96b6c4b705e9013e675f3f2438df8402)_)_
* Wenn Event-Details ausgegeben werden, sendet nur noch die erste Nachricht mit den allgemeinen Informationen eine Push-Benachrichtigung. _(commit:_ [_f85fba3c_](https://github.com/Alf-Melmac/slotbotServer/commit/f85fba3cdb7dc4f6f896f67fb3d4cf67953cb6e3)_)_

## 🐞 Fehlerbehebungen

* Modsets in den Discord Event-Details können auch wieder heruntergeladen werden, wenn die letzte Aktualisierung ein ein (Un-)Slotting war. _(commit:_ [_6489eb73_](https://github.com/Alf-Melmac/slotbotServer/commit/6489eb738a09662436f01843df14df4b34b7878e)_)_
* Nach der Anmeldung musste die erste schreibende Interaktion zwei mal ausgeführt werden, da ein Sicherheitsmechanismus noch nicht aktiv war. _(commit:_ [_91345612_](https://github.com/Alf-Melmac/slotbotServer/commit/91345612bef43a8fab582234b86d63c00c658e93)_)_
* Manchmal wurden Textschlüssel anstelle deren Übersetzungen angezeigt. Der Lademechanismus dieser wurde verbessert. _(commit:_ [_e12c7d64_](https://github.com/Alf-Melmac/slotbot-frontend/commit/e12c7d643ed53ac2a9edba9524a87df2d5f707b1)_)_
* Fehlende Übersetzung, die erklärt, warum die Teilbarkeit eines Events nicht mehr deaktiviert werden kann, ergänzt. _(commit:_ [_7e62024d_](https://github.com/Alf-Melmac/slotbot-frontend/commit/7e62024d8338bcc0f96096024261b060c9bb84c6)_)_
* Beim Editieren der Slotliste eines Events wurden alle blockierten Slots zurückgesetzt. _(commit:_ [_fad98e57_](https://github.com/Alf-Melmac/slotbot-frontend/commit/fad98e5772c23e9047a85fc84dd2ccf015f56b0d)_)_

## 🔨 Technisches

* Die beiden für den Login benötigten Cookies werden nur noch über eine sichere Verbindung (https) versendet. _(commit:_ [_1d1f4cad_](https://github.com/Alf-Melmac/slotbotServer/commit/1d1f4cadd0024a7f836383115a55ea08428b13df)_)_
