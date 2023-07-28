# Update 28.07.2023

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Slotbot-Server</strong></td><td>2.5.0 <img src="../../.gitbook/assets/Badge-New.png" alt="Neu" data-size="line"></td><td><a href="https://github.com/Alf-Melmac/slotbotServer/releases/tag/v2.5.0">https://github.com/Alf-Melmac/slotbotServer/releases/tag/v2.5.0</a></td></tr><tr><td><strong>Slotbot-Frontend</strong></td><td>1.5.0 <img src="../../.gitbook/assets/Badge-New.png" alt="Neu" data-size="line"></td><td><a href="https://github.com/Alf-Melmac/slotbot-frontend/releases/tag/v1.5.0">https://github.com/Alf-Melmac/slotbot-frontend/releases/tag/v1.5.0</a></td></tr></tbody></table>

## ⭐ New Features

* Improved configuration of the [event archive](../../integrations/discord/archive.md). This can now be set by the `Slotbot_Event_Manage`rs in the community settings. If this channel is deleted, the configuration will be undone. _(commit:_ [_c8a9b312_](https://github.com/Alf-Melmac/slotbot-frontend/commit/c8a9b312d0dbecc74b5eabae33542d00c36c60ce)_,_ [_290e55ec_](https://github.com/Alf-Melmac/slotbotServer/commit/290e55ecf2609d5dbebd7468392962e2d999506e)_)_
* If the Discord bot is not yet a member of the server, the invitation is offered in the community settings. Before that, it is not possible to make Discord-specific configurations. _(commit:_ [_c8a9b312_](https://github.com/Alf-Melmac/slotbot-frontend/commit/c8a9b312d0dbecc74b5eabae33542d00c36c60ce)_)_
* Event links to discord channels will now be removed automatically when the bot is removed from a server. _(commit:_ [_7d180d40_](https://github.com/Alf-Melmac/slotbotServer/commit/7d180d4010849ff2d09aeee7fffb6659c640787b)_)_
* The /archive command is no longer available. If an archive channel is configured and the event channel is deleted, the events are automatically archived. _(commit:_ [_e99933ee_](https://github.com/Alf-Melmac/slotbotServer/commit/e99933ee24c3c221e1c056b7c2af01f7023079fe)_)_
* Event List API endpoint. The new endpoint allows you to find all events in a given time period. See [api-dokumentation.md](../../integrations/api-dokumentation.md "mention"). _(commit:_ [_e148f9ab_](https://github.com/Alf-Melmac/slotbotServer/commit/e148f9ab35dc39a7ce10e5e9773518e6dfbe0af8)_)_

## 🐞 Bug Fixes

* Discord interactions (slash commands and context menu) will now also be created if the bot subsequently joins a server without restarting. This also speeds up the restart. _(commit:_ [_7d180d40_](https://github.com/Alf-Melmac/slotbotServer/commit/7d180d4010849ff2d09aeee7fffb6659c640787b)_)_
* The check box that is shown for interactions that are not directly visible will be shown again as a real check mark. _(commit:_ [_0e5e59a2_](https://github.com/Alf-Melmac/slotbotServer/commit/0e5e59a2dee74f62e4bf79a1691f091790828a7d)_)_
