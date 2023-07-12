# Update 16.02.2023

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th data-hidden></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Slotbot-Server</strong></td><td>2.1.0 <img src="../../.gitbook/assets/Badge-New.png" alt="Neu" data-size="line"></td><td></td><td><a href="https://github.com/Alf-Melmac/slotbotServer/releases/tag/v2.1.0">https://github.com/Alf-Melmac/slotbotServer/releases/tag/v2.1.0</a></td></tr><tr><td><strong>Slotbot-Frontend</strong></td><td>1.1.0 <img src="../../.gitbook/assets/Badge-New.png" alt="Neu" data-size="line"></td><td></td><td><a href="https://github.com/Alf-Melmac/slotbot-frontend/releases/tag/v1.1.0">https://github.com/Alf-Melmac/slotbot-frontend/releases/tag/v1.1.0</a></td></tr></tbody></table>

## ⭐ New Features

* Happy New Year! :tada: _(commit:_ [_4a10a9e9_](https://github.com/Alf-Melmac/slotbot-frontend/commit/4a10a9e92d52f56d0a58d3544687f9a0924bc493)_)_
* The entire website is now translated into English. If a language other than German is selected in the browser, all interface texts are displayed in English. `(Thanks The43rd for the support with the translations)` _(commit:_ [_76a7720f_](https://github.com/Alf-Melmac/slotbot-frontend/commit/76a7720f1ef3f9aa9f9362ef0d2c9116d78497d2)_,_ [_da820223_](https://github.com/Alf-Melmac/slotbot-frontend/commit/da82022321eb2e6dba241443686730314709e4ad)_)_
* The Discord messages have also been translated. For interactions with the bot, the language selected in Discord is used (German or otherwise English). For displays, such as the event details, the language set in the new community configuration (see below) is used. _(commit:_ [_3d41760b_](https://github.com/Alf-Melmac/slotbotServer/commit/3d41760b29c5143089b71e6f7dd6fc3eac11c955)_,_ [_31151e42_](https://github.com/Alf-Melmac/slotbotServer/commit/31151e42b526a50f5dcf641bcc006be51665cae5)_,_ [_a13b6108_](https://github.com/Alf-Melmac/slotbotServer/commit/a13b6108a00fe354a826e2642c3dde869219ad0b)_)_
* At the same time as the translations, most Discord commands have been revised and the output improved.
  * AddEventToChannel is now only a slash command.
  * ArchiveEvent is now only a slash command.
  * BlockSlot is now only a slash command.
  * EventPing is now only a slash command.
  * RandomSlot is now only a slash command.
  * RebuildArchive is now a slash command.
  * Slot und ForceSlot are now only slash commands.
  * Swap is now only a slash command.
  * Unslot und ForceUnslot are now only slash commands.
  * By replacing most text commands with slash commands, the help command is no longer needed.
* Community/guild administration. All communities can be viewed, searched and managed via the new overview page. In addition to viewing some details and a member view, community administrators can configure the default language, view event types (see below) and manage members. _(commit:_ [_df05b822_](https://github.com/Alf-Melmac/slotbot-frontend/commit/df05b822aa9c1f869d6a69139b1723554b0280da)_,_ [_c8376952_](https://github.com/Alf-Melmac/slotbot-frontend/commit/c837695231f903653a5770b340d32fa6da79c94d)_,_ [_01b7b028_](https://github.com/Alf-Melmac/slotbot-frontend/commit/01b7b028933dd337f2e134f83595d189c9c24dc3)_,_ [_546f377f_](https://github.com/Alf-Melmac/slotbot-frontend/commit/546f377f33e06c92fd6b324a83ee66db518daf68)_,_ [_c573f8de_](https://github.com/Alf-Melmac/slotbot-frontend/commit/c573f8de080d34e637ba3c4a77c8f825c36ad49a)_, Member Management_ [_7949d461_](https://github.com/Alf-Melmac/slotbot-frontend/commit/7949d4615c80cf5afcae3d9cbbf66df67c0ee01a)_, Configuration_ [_097a1cb3_](https://github.com/Alf-Melmac/slotbot-frontend/commit/097a1cb31713a86a3d84c8de7b88d0f04f6f319c)_,_ [_1840b42f_](https://github.com/Alf-Melmac/slotbot-frontend/commit/1840b42f37855a251ced845bcc4b0225e8fc35e1)_;_ [_2f4694a0_](https://github.com/Alf-Melmac/slotbotServer/commit/2f4694a0cff3891c9b764c298bc655ff0c97148a)_, Member Management_ [_b64c26a5_](https://github.com/Alf-Melmac/slotbotServer/commit/b64c26a5d769c4ef5f756ff728c85a7d4eca4141)_,_ [_836089b9_](https://github.com/Alf-Melmac/slotbotServer/commit/836089b9a611281c0becd94a93db7f56949b78ea)_,_ [_c07b4cea_](https://github.com/Alf-Melmac/slotbotServer/commit/c07b4cea6cb3d589620d92cccb611a5c1c6d80ad)_, Configuration_ [_144a5fb7_](https://github.com/Alf-Melmac/slotbotServer/commit/144a5fb7a48a920eeaafcbd5fd78333018842a7d)_,_ [_be7d4be8_](https://github.com/Alf-Melmac/slotbotServer/commit/be7d4be802a7861594bc0b449db94ff3874126dd)_)_
* Members can be added to a community via the context menu in Discord. Right click on a user -> Apps -> Add community _(commit:_ [_4fe3b7aa_](https://github.com/Alf-Melmac/slotbotServer/commit/4fe3b7aa5709f33c5f14ac83360c7e17f5c5ac53)_,_ [_ef71736e_](https://github.com/Alf-Melmac/slotbotServer/commit/ef71736eb2837f5dabfe43a240be23cdb6535eaa)_)_
* Event types are sorted alphabetically. _(commit:_ [_7fb5f42f_](https://github.com/Alf-Melmac/slotbotServer/commit/7fb5f42f8244c349fc54eade7cdc59bef12cc49d)_)_
* Event types are created community-specific by default. This allows the event creators to be better guided as to which types are relevant for their own community. These are displayed as non-global to administrators in the community view. _(commit:_ [_9c27b57b_](https://github.com/Alf-Melmac/slotbotServer/commit/9c27b57bd3490da72e928717498f3f7a95293370)_,_ [_836f33d5_](https://github.com/Alf-Melmac/slotbotServer/commit/836f33d5f638ef12af8e54268c8c722cf1666578)_)_

## 🐞 Bug Fixes

* Logos in the navigation bar are now soft and round. _(commit:_ [_8eaf52a5_](https://github.com/Alf-Melmac/slotbot-frontend/commit/8eaf52a5505bcff3626f578db2e0d122caddcd54)_)_
* If a future event was not shareable, but the own community had a reserved squad or slot in it, an error occurred when trying to add it to a Discord channel. _(commit:_ [_bcec5b63_](https://github.com/Alf-Melmac/slotbotServer/commit/bcec5b63fc2d98447046ad5108b47a5906f8644b)_)_

{% hint style="info" %}
With this update, most of the text commands are finally dropped. Please use the Discord slash commands. [bot-befehle](../../integrations/discord/bot-befehle/ "mention")
{% endhint %}

{% hint style="warning" %}
For administrators: Due to the new Discord authorisation system, the slash commands are no longer authorised by default by the slotbot roles. You can view and configure the permissions in the server settings under Apps -> Integrations -> Bots and Apps. In the long run, the permission control will be moved more to the website.
{% endhint %}
