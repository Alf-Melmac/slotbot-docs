# Update ??.0?.2024

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Slotbot-Server</strong></td><td>2.11.0 <img src="../../.gitbook/assets/Badge-New.png" alt="Neu" data-size="line"></td><td><a href="https://github.com/Alf-Melmac/slotbotServer/releases/tag/v2.11.0">https://github.com/Alf-Melmac/slotbotServer/releases/tag/v2.11.0</a></td></tr><tr><td><strong>Slotbot-Frontend</strong></td><td>1.9.0 <img src="../../.gitbook/assets/Badge-New.png" alt="Neu" data-size="line"></td><td><a href="https://github.com/Alf-Melmac/slotbot-frontend/releases/tag/v1.9.0">https://github.com/Alf-Melmac/slotbot-frontend/releases/tag/v1.9.0</a></td></tr></tbody></table>

## ⭐ Neue Features

* Verbesserungen in der Rollenauswahl für die Discord-Integration _(commit:_ [_16addd34_](https://github.com/Alf-Melmac/slotbot-frontend/commit/16addd34b20c8522ecf1aa201c548983db48a121)_,_ [_c08a7c96_](https://github.com/Alf-Melmac/slotbotServer/commit/c08a7c968cac6120effdf8912baf9752c395c1ed)_)_
  * Eine Warnung wird angezeigt, wenn der Bot nicht berechtigt ist, die Rollen der Mitglieder zu bearbeiten.
  * Es werden nur die Rollen zur Auswahl angeboten, die der Bot Mitgliedern zuweisen kann. Dazu muss die Rolle des Bots der auszuwählenden Rolle übergeordnet sein.

## 🐞 Fehlerbehebungen

* Das Textfeld zur Eingabe einer Bild-URL im Editiermodus eines Events nimmt wieder den gesamten verfügbaren Platz ein. _(commit:_ [_59f7b9f7_](https://github.com/Alf-Melmac/slotbot-frontend/commit/59f7b9f723ee4d139872387d612b273f81f02d85)_)_
* Es ist nicht länger möglich doppelte Auswahlwerte in einen Event-Standard einzufügen. _(commit:_ [_d62190f7_](https://github.com/Alf-Melmac/slotbotServer/commit/d62190f720fe6afbaf0c42942932c9fb79b717b4)_)_
