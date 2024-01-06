# Update 28.07.2023

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Slotbot-Server</strong></td><td>2.5.0 <img src="../../.gitbook/assets/Badge-New.png" alt="Neu" data-size="line"></td><td><a href="https://github.com/Alf-Melmac/slotbotServer/releases/tag/v2.5.0">https://github.com/Alf-Melmac/slotbotServer/releases/tag/v2.5.0</a></td></tr><tr><td><strong>Slotbot-Frontend</strong></td><td>1.5.0 <img src="../../.gitbook/assets/Badge-New.png" alt="Neu" data-size="line"></td><td><a href="https://github.com/Alf-Melmac/slotbot-frontend/releases/tag/v1.5.0">https://github.com/Alf-Melmac/slotbot-frontend/releases/tag/v1.5.0</a></td></tr></tbody></table>

## ⭐ Neue Features

* Verbesserte Konfiguration des [Event-Archives](../../integrationen/discord/archiv.md). Dieses kann nun von den `Slotbot_Event_Manage`rn in der Community-Konfiguration eingestellt werden. Im Falle der Löschung dieses Kanals wird die Konfiguration rückgängig gemacht. _(commit:_ [_c8a9b312_](https://github.com/Alf-Melmac/slotbot-frontend/commit/c8a9b312d0dbecc74b5eabae33542d00c36c60ce)_,_ [_290e55ec_](https://github.com/Alf-Melmac/slotbotServer/commit/290e55ecf2609d5dbebd7468392962e2d999506e)_)_
* Wenn der Discord-Bot noch nicht Mitglied des Servers ist, wird die Einladung in der Community-Konfiguration angeboten. Vorher ist es nicht möglich, Discord-spezifische Konfigurationen vorzunehmen. _(commit:_ [_c8a9b312_](https://github.com/Alf-Melmac/slotbot-frontend/commit/c8a9b312d0dbecc74b5eabae33542d00c36c60ce)_)_
* Event-Verknüpfungen werden nun automatisch aufgehoben, wenn der Bot von einem Server entfernt wird. _(commit:_ [_7d180d40_](https://github.com/Alf-Melmac/slotbotServer/commit/7d180d4010849ff2d09aeee7fffb6659c640787b)_)_
* Kein `/archive` Befehl mehr. Wenn ein Archivkanal konfiguriert ist und der Event-Kanal gelöscht wird, werden die Events automatisch archiviert. _(commit:_ [_e99933ee_](https://github.com/Alf-Melmac/slotbotServer/commit/e99933ee24c3c221e1c056b7c2af01f7023079fe)_)_
* Event List API Endpunkt. Der neue Endpunkt ermöglicht alle Events in einem gegebenen Zeitraum zu ermitteln. Siehe [api-dokumentation.md](../../integrationen/api-dokumentation.md "mention"). _(commit:_ [_e148f9ab_](https://github.com/Alf-Melmac/slotbotServer/commit/e148f9ab35dc39a7ce10e5e9773518e6dfbe0af8)_)_

## 🐞 Fehlerbehebungen

* Discord-Interaktionen (Slash-Befehle und das Kontextmenü) werden nun auch beim nachträglichen Beitritt des Bots zu einem Server ohne Neustart angelegt. Damit wurde gleichzeitig der Neustart beschleunigt. _(commit:_ [_7d180d40_](https://github.com/Alf-Melmac/slotbotServer/commit/7d180d4010849ff2d09aeee7fffb6659c640787b)_)_
* Die angezeigte Checkbox für nicht direkt sichtbare Interaktionen wird wieder als echtes Häkchen dargestellt. _(commit:_ [_0e5e59a2_](https://github.com/Alf-Melmac/slotbotServer/commit/0e5e59a2dee74f62e4bf79a1691f091790828a7d)_)_
