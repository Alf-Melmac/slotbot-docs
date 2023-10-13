# Update 13.10.2023

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Slotbot-Server</strong></td><td>2.7.0 <img src="../../../.gitbook/assets/Badge-New.png" alt="Neu" data-size="line"></td><td><a href="https://github.com/Alf-Melmac/slotbotServer/releases/tag/v2.7.0">https://github.com/Alf-Melmac/slotbotServer/releases/tag/v2.7.0</a></td></tr><tr><td><strong>Slotbot-Frontend</strong></td><td>1.6.0 <img src="../../../.gitbook/assets/Badge-New.png" alt="Neu" data-size="line"></td><td><a href="https://github.com/Alf-Melmac/slotbot-frontend/releases/tag/v1.6.0">https://github.com/Alf-Melmac/slotbot-frontend/releases/tag/v1.6.0</a></td></tr></tbody></table>

## ⭐ Neue Features

* Die [Communities](https://slotbot.de/guilds) sind jetzt von jeder Seite aus direkt erreichbar. Allerdings nur, wenn dein Bildschirm groß genug ist. _(commit:_ [_dd3a9677_](https://github.com/Alf-Melmac/slotbot-frontend/commit/dd3a9677d4e9ee114b2b8fdabf847f57a84a77b8)_)_
* Neue Seite mit Informationen über den Ablauf der Login-Session. Beispielsweise hat sich derselbe Benutzer zu oft angemeldet oder seine Rollen wurden geändert. _(commit:_ [_8a0b0008_](https://github.com/Alf-Melmac/slotbot-frontend/commit/8a0b0008d54041d519fe0e2b683590b388f7495c)_,_ [_b1b991af_](https://github.com/Alf-Melmac/slotbot-frontend/commit/b1b991afe9e87067880a66b2f9862c51e75956f8)_)_
* Community-Rollen Verwaltung _(commit:_ [_6068afb4_](https://github.com/Alf-Melmac/slotbot-frontend/commit/6068afb4eb0776099f5ab99de95f7e7e876d0520)_,_ [_2672d254_](https://github.com/Alf-Melmac/slotbot-frontend/commit/2672d254bb5ea0578684187042a283d4c653508f)_,_ [_335af06b_](https://github.com/Alf-Melmac/slotbotServer/commit/335af06b47abf15780bbb45c6a155efbd09dd1c3)_,_ [_eaa78d81_](https://github.com/Alf-Melmac/slotbotServer/commit/eaa78d819b829677097188d589e173463696e9d9)_,_ [_9a985c72_](https://github.com/Alf-Melmac/slotbotServer/commit/9a985c72298f5321000dd0f7581ceb8b11fca0ba)_)_
  * Die Berechtigungsverwaltung muss nicht mehr vollständig über Discord-Rollen erfolgen. Dadurch entfallen auch die automatisch generierten Rollen Slotbot\_Admin und Slotbot\_Event\_Manage. Auf Servern, auf denen die Rollen bereits generiert wurden, werden sie nicht automatisch gelöscht.
  * Community-Administratoren haben die Möglichkeit, Community-Mitgliedern Rechte zur Bearbeitung von Events und der Community zu erteilen. Die Rollen können auch mit Discord-Rollen synchronisiert werden.
* Community-Mitglieder werden automatisch entfernt, wenn sie den verknüpften Discord-Server verlassen. _(commit:_ [_04ac047e_](https://github.com/Alf-Melmac/slotbotServer/commit/04ac047ee4361fa7fda82709948b0223e7a35305)_)_
* Mit dem neuen Bild-Upload können nun Bilder in Events einfach hochgeladen werden, anstatt einen Link einfügen zu müssen. _(commit:_ [_31cdeecc_](https://github.com/Alf-Melmac/slotbotServer/commit/31cdeecc7b2721119b32567905e14b855876d691)_)_
  * Dieses Änderung ist die Vorbereitung für die anstehende Änderung für Discord-Links, die außerhalb der App nicht mehr endlos lang verwendet werden können: [https://www.reddit.com/r/DataHoarder/comments/16zs1gt/cdndiscordapp\_links\_will\_expire\_breaking/](https://www.reddit.com/r/DataHoarder/comments/16zs1gt/cdndiscordapp\_links\_will\_expire\_breaking/)

## 🐞 Fehlerbehebungen

* Manchmal wurde im Event-Bearbeitungsmodus der Zustand vor der letzten eigenen Änderung angezeigt. _(commit:_ [_49f066a7_](https://github.com/Alf-Melmac/slotbot-frontend/commit/49f066a7f72c1453ec5b1f1d22b55ce059140cf3)_)_
* Event-Bilder können wieder entfernt werden. _(commit:_ [_fee0f12c_](https://github.com/Alf-Melmac/slotbotServer/commit/fee0f12c248fbe3359a932bf56f2481239d31652)_)_
* Benachrichtigungen werden neu berechnet, wenn ein Slot gelöscht wird. _(commit:_ [_7e0e8491_](https://github.com/Alf-Melmac/slotbotServer/commit/7e0e84917ab8fc11ffc5b9d9cbffc96e7f01df80)_)_
* Nutzer, die noch an keinem Event teilgenommen haben, konnten nach der Anmeldung keine Events öffnen. `(Danke Andy für die Meldung)` _(commit:_ [_54e6a489_](https://github.com/Alf-Melmac/slotbotServer/commit/54e6a489541c5a0bcbd6b58fb28a3084fffb8465)_)_
* Beim Wechseln des Slots über die Website tritt kein Fehler mehr auf. _(commit:_ [_dce36c5e_](https://github.com/Alf-Melmac/slotbotServer/commit/dce36c5e460027041e97c9fef75397700d86fcce)_)_
* Neben dem [slot.md](../../integrationen/discord/bot-befehle/slot.md "mention")-Befehl versendet auch der [zufaelliger-slot.md](../../integrationen/discord/bot-befehle/zufaelliger-slot.md "mention")-Befehl die Unslot- und Slot-Benachrichtung beim Slot-Wechsel in der richtigen Reihenfolge. _(commit:_ [_dce36c5e_](https://github.com/Alf-Melmac/slotbotServer/commit/dce36c5e460027041e97c9fef75397700d86fcce)_)_
* Die Steam-ID eines Nutzers kann wieder entfernt werden. _(commit:_ [_24048d03_](https://github.com/Alf-Melmac/slotbotServer/commit/24048d03bf7f715da58d98c1b31a9a8af04bad3c)_)_

## 🔨 Technisches

* Unterstützung nur für aktuelle Browser. _(commit:_ [_ceca85e5_](https://github.com/Alf-Melmac/slotbot-frontend/commit/ceca85e5bff33b86d2aaeae99aafec2d4729f77b)_)_
