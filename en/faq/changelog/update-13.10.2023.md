# Update 13.10.2023

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Slotbot-Server</strong></td><td>2.7.0 <img src="../../.gitbook/assets/Badge-New.png" alt="Neu" data-size="line"></td><td><a href="https://github.com/Alf-Melmac/slotbotServer/releases/tag/v2.7.0">https://github.com/Alf-Melmac/slotbotServer/releases/tag/v2.7.0</a></td></tr><tr><td><strong>Slotbot-Frontend</strong></td><td>1.6.0 <img src="../../.gitbook/assets/Badge-New.png" alt="Neu" data-size="line"></td><td><a href="https://github.com/Alf-Melmac/slotbot-frontend/releases/tag/v1.6.0">https://github.com/Alf-Melmac/slotbot-frontend/releases/tag/v1.6.0</a></td></tr></tbody></table>

## ⭐ New Features

* The [communities](https://slotbot.de/guilds) are now directly accessible from any page. But only if your screen is big enough. _(commit:_ [_dd3a9677_](https://github.com/Alf-Melmac/slotbot-frontend/commit/dd3a9677d4e9ee114b2b8fdabf847f57a84a77b8)_)_
* New page with information about the expired login session. For example, if the same user has logged in too many times, or if their roles have changed. _(commit:_ [_8a0b0008_](https://github.com/Alf-Melmac/slotbot-frontend/commit/8a0b0008d54041d519fe0e2b683590b388f7495c)_,_ [_b1b991af_](https://github.com/Alf-Melmac/slotbot-frontend/commit/b1b991afe9e87067880a66b2f9862c51e75956f8)_)_
* Community role management _(commit:_ [_6068afb4_](https://github.com/Alf-Melmac/slotbot-frontend/commit/6068afb4eb0776099f5ab99de95f7e7e876d0520)_,_ [_2672d254_](https://github.com/Alf-Melmac/slotbot-frontend/commit/2672d254bb5ea0578684187042a283d4c653508f)_,_ [_335af06b_](https://github.com/Alf-Melmac/slotbotServer/commit/335af06b47abf15780bbb45c6a155efbd09dd1c3)_,_ [_eaa78d81_](https://github.com/Alf-Melmac/slotbotServer/commit/eaa78d819b829677097188d589e173463696e9d9)_,_ [_9a985c72_](https://github.com/Alf-Melmac/slotbotServer/commit/9a985c72298f5321000dd0f7581ceb8b11fca0ba)_)_
  * Permissions no longer need to be managed entirely through Discord roles. This also removes the need for the auto-generated Slotbot\_Admin and Slotbot\_Event\_Manage roles. On servers where these roles have already been created, they will not be removed automatically.
  * Community administrators can grant community members the right to edit events and the community. Roles can also be synced with Discord roles.
* Community members are automatically removed when they leave the linked Discord server. _(commit:_ [_04ac047e_](https://github.com/Alf-Melmac/slotbotServer/commit/04ac047ee4361fa7fda82709948b0223e7a35305)_)_
* With the new image upload, images can now be easily uploaded to events instead of having to insert a link. _(commit:_ [_31cdeecc_](https://github.com/Alf-Melmac/slotbotServer/commit/31cdeecc7b2721119b32567905e14b855876d691)_)_
  * This change is in preparation for the upcoming change for Discord links, which can no longer be used indefinitely outside the app: [https://www.reddit.com/r/DataHoarder/comments/16zs1gt/cdndiscordapp\_links\_will\_expire\_breaking/](https://www.reddit.com/r/DataHoarder/comments/16zs1gt/cdndiscordapp\_links\_will\_expire\_breaking/)

## 🐞 Bug Fixes

* Event editing sometimes displayed the state before the last change. _(commit:_ [_49f066a7_](https://github.com/Alf-Melmac/slotbot-frontend/commit/49f066a7f72c1453ec5b1f1d22b55ce059140cf3)_)_
* Event pictures can be removed again. _(commit:_ [_fee0f12c_](https://github.com/Alf-Melmac/slotbotServer/commit/fee0f12c248fbe3359a932bf56f2481239d31652)_)_
* Notifications are recalculated when a slot is deleted. _(commit:_ [_7e0e8491_](https://github.com/Alf-Melmac/slotbotServer/commit/7e0e84917ab8fc11ffc5b9d9cbffc96e7f01df80)_)_
* Users who have not participated in an event could not open any events after logging in. `(Thanks Andy for the report)` _(commit:_ [_54e6a489_](https://github.com/Alf-Melmac/slotbotServer/commit/54e6a489541c5a0bcbd6b58fb28a3084fffb8465)_)_
* Changing the slot via the website no longer causes an error. _(commit:_ [_dce36c5e_](https://github.com/Alf-Melmac/slotbotServer/commit/dce36c5e460027041e97c9fef75397700d86fcce)_)_
* In addition to the [slot.md](../../integrations/discord/bot-befehle/slot.md "mention") command, the [zufaelliger-slot.md](../../integrations/discord/bot-befehle/zufaelliger-slot.md "mention") command also sends the unslot and slot messages in the correct order when changing slots. _(commit:_ [_dce36c5e_](https://github.com/Alf-Melmac/slotbotServer/commit/dce36c5e460027041e97c9fef75397700d86fcce)_)_
* A user's Steam ID can be removed again. _(commit:_ [_24048d03_](https://github.com/Alf-Melmac/slotbotServer/commit/24048d03bf7f715da58d98c1b31a9a8af04bad3c)_)_

## 🔨 Technical

* Support for current browsers only. _(commit:_ [_ceca85e5_](https://github.com/Alf-Melmac/slotbot-frontend/commit/ceca85e5bff33b86d2aaeae99aafec2d4729f77b)_)_
