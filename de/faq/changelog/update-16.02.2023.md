# Update 16.02.2023

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th data-hidden></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Slotbot-Server</strong></td><td>2.1.0 <img src="../../.gitbook/assets/Badge-New.png" alt="Neu" data-size="line"></td><td></td><td><a href="https://github.com/Alf-Melmac/slotbotServer/releases/tag/v2.1.0">https://github.com/Alf-Melmac/slotbotServer/releases/tag/v2.1.0</a></td></tr><tr><td><strong>Slotbot-Frontend</strong></td><td>1.1.0 <img src="../../.gitbook/assets/Badge-New.png" alt="Neu" data-size="line"></td><td></td><td><a href="https://github.com/Alf-Melmac/slotbot-frontend/releases/tag/v1.1.0">https://github.com/Alf-Melmac/slotbot-frontend/releases/tag/v1.1.0</a></td></tr></tbody></table>

## ⭐ Neue Features

* Happy New Year! :tada: _(commit:_ [_4a10a9e9_](https://github.com/Alf-Melmac/slotbot-frontend/commit/4a10a9e92d52f56d0a58d3544687f9a0924bc493)_)_
* Die gesamte Website ist nun auf Englisch übersetzt. Falls im Browser eine andere Sprache als Deutsch ausgewählt ist, werden alle Oberflächentexte auf Englisch angezeigt. `(Danke The43rd für die Unterstützung bei den Übersetzungen)` _(commit:_ [_76a7720f_](https://github.com/Alf-Melmac/slotbot-frontend/commit/76a7720f1ef3f9aa9f9362ef0d2c9116d78497d2)_,_ [_da820223_](https://github.com/Alf-Melmac/slotbot-frontend/commit/da82022321eb2e6dba241443686730314709e4ad)_)_
* Ebenfalls die Discord-Nachrichten wurden übersetzt. Für Interaktionen mit dem Bot wird die in Discord ausgewählte Sprache verwendet (Deutsch oder sonst Englisch). Für Anzeigen, wie die Event-Details, wird die in der neuen Community-Konfiguration (siehe unten) eingestellte Sprache verwendet. _(commit:_ [_3d41760b_](https://github.com/Alf-Melmac/slotbotServer/commit/3d41760b29c5143089b71e6f7dd6fc3eac11c955)_,_ [_31151e42_](https://github.com/Alf-Melmac/slotbotServer/commit/31151e42b526a50f5dcf641bcc006be51665cae5)_,_ [_a13b6108_](https://github.com/Alf-Melmac/slotbotServer/commit/a13b6108a00fe354a826e2642c3dde869219ad0b)_)_
* Gleichzeitig zu den Übersetzungen wurden die meisten Discord-Befehle überarbeitet und die Ausgaben verbessert.
  * AddEventToChannel ist nur noch ein Slash-Command.
  * ArchiveEvent ist nur noch ein Slash-Command.
  * BlockSlot ist nur noch ein Slash-Command.
  * EventPing ist nur noch ein Slash-Command.
  * RandomSlot ist nur noch ein Slash-Command.
  * RebuildArchive ist jetzt ein Slash-Command.
  * Slot und ForceSlot sind nur noch Slash-Commands.
  * Swap ist nur noch ein Slash-Command.
  * Unslot und ForceUnslot sind nur noch Slash-Commands.
  * Durch die Ersetzung der meisten Textbefehle durch Slash-Commands entfällt der Help-Befehl.
* Community-/Guildenverwaltung. Über die neue Übersichtsseite können alle Communities angesehen, gesucht und verwaltet werden. Neben der Ansicht einiger Details und einer Mitgliederansicht können dort Community-Administratoren die Standardsprache konfigurieren, Event-Typen einsehen (siehe unten) und Mitglieder verwalten. _(commit:_ [_df05b822_](https://github.com/Alf-Melmac/slotbot-frontend/commit/df05b822aa9c1f869d6a69139b1723554b0280da)_,_ [_c8376952_](https://github.com/Alf-Melmac/slotbot-frontend/commit/c837695231f903653a5770b340d32fa6da79c94d)_,_ [_01b7b028_](https://github.com/Alf-Melmac/slotbot-frontend/commit/01b7b028933dd337f2e134f83595d189c9c24dc3)_,_ [_546f377f_](https://github.com/Alf-Melmac/slotbot-frontend/commit/546f377f33e06c92fd6b324a83ee66db518daf68)_,_ [_c573f8de_](https://github.com/Alf-Melmac/slotbot-frontend/commit/c573f8de080d34e637ba3c4a77c8f825c36ad49a)_, Mitgliederverwaltung_ [_7949d461_](https://github.com/Alf-Melmac/slotbot-frontend/commit/7949d4615c80cf5afcae3d9cbbf66df67c0ee01a)_, Konfiguration_ [_097a1cb3_](https://github.com/Alf-Melmac/slotbot-frontend/commit/097a1cb31713a86a3d84c8de7b88d0f04f6f319c)_,_ [_1840b42f_](https://github.com/Alf-Melmac/slotbot-frontend/commit/1840b42f37855a251ced845bcc4b0225e8fc35e1)_;_ [_2f4694a0_](https://github.com/Alf-Melmac/slotbotServer/commit/2f4694a0cff3891c9b764c298bc655ff0c97148a)_, Mitgliederverwaltung_ [_b64c26a5_](https://github.com/Alf-Melmac/slotbotServer/commit/b64c26a5d769c4ef5f756ff728c85a7d4eca4141)_,_ [_836089b9_](https://github.com/Alf-Melmac/slotbotServer/commit/836089b9a611281c0becd94a93db7f56949b78ea)_,_ [_c07b4cea_](https://github.com/Alf-Melmac/slotbotServer/commit/c07b4cea6cb3d589620d92cccb611a5c1c6d80ad)_, Konfiguration_ [_144a5fb7_](https://github.com/Alf-Melmac/slotbotServer/commit/144a5fb7a48a920eeaafcbd5fd78333018842a7d)_,_ [_be7d4be8_](https://github.com/Alf-Melmac/slotbotServer/commit/be7d4be802a7861594bc0b449db94ff3874126dd)_)_
* Mitspieler können einer Community über das Kontexmenü in Discord hinzugefügt werden. Rechtsklick auf einen Nutzer -> Apps -> Community hinzufügen _(commit:_ [_4fe3b7aa_](https://github.com/Alf-Melmac/slotbotServer/commit/4fe3b7aa5709f33c5f14ac83360c7e17f5c5ac53)_,_ [_ef71736e_](https://github.com/Alf-Melmac/slotbotServer/commit/ef71736eb2837f5dabfe43a240be23cdb6535eaa)_)_
* Event-Typen werden alphabetisch sortiert. _(commit:_ [_7fb5f42f_](https://github.com/Alf-Melmac/slotbotServer/commit/7fb5f42f8244c349fc54eade7cdc59bef12cc49d)_)_
* Event-Typen werden standardmäßig Community-Spezifisch angelegt. Dadurch können die Event-Ersteller besser gelenkt werden, welche Typen für die eigene Community relevant sind. Diese werden in der Community-Ansicht Administratoren als Nicht-Global angezeigt. _(commit:_ [_9c27b57b_](https://github.com/Alf-Melmac/slotbotServer/commit/9c27b57bd3490da72e928717498f3f7a95293370)_,_ [_836f33d5_](https://github.com/Alf-Melmac/slotbotServer/commit/836f33d5f638ef12af8e54268c8c722cf1666578)_)_

## 🐞 Fehlerbehebungen

* Logos in der Navigationsleiste sind nun weich und rund _(commit:_ [_8eaf52a5_](https://github.com/Alf-Melmac/slotbot-frontend/commit/8eaf52a5505bcff3626f578db2e0d122caddcd54)_)_
* Falls ein fremdes in der Zukunft liegendes Event nicht teilbar war, die eigene Community allerdings einen reservierten Squad oder Slot in diesem hatte trat ein Fehler, beim Versuch dieses einem Discord Kanal hinzuzufügen, auf. _(commit:_ [_bcec5b63_](https://github.com/Alf-Melmac/slotbotServer/commit/bcec5b63fc2d98447046ad5108b47a5906f8644b)_)_

{% hint style="info" %}
Mit diesem Update enfallen endgültig die meisten Textbefehle. Bitte nutzt die Discord Slash Commands. [bot-befehle](../../integrationen/discord/bot-befehle/ "mention")
{% endhint %}

{% hint style="warning" %}
Für Administratoren: Durch das neue Discord-Berechtigungssystem sind die Slash-Befehle nicht mehr standardmäßig durch die Slotbot-Rollen berechtigt. Die Berechtigungen könnt ihr den Servereinstellungen unter Apps -> Integrationen -> Bots und Apps einsehen und konfigurieren. Langfristig wird die Berechtigungssteuerung mehr auf die Website verlagert werden.
{% endhint %}
