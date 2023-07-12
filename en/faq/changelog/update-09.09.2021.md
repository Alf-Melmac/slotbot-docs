# Update 09.09.2021

## 🗒️ Noteworthy

* The Discord reminders are here! Notification settings must be activated once. These are located in the [user profile](https://armamachtbock.de/profile/me).

## ⭐ New Features

* New loading indicator when selecting an event in the calendar. _(commit:_ [_7db5b285_](https://github.com/Alf-Melmac/slotbotServer/commit/7db5b285b9a6dc5a82aa52ce29972d72a64592d1)_)_
* **Profile page** added _(commit:_ [_9b73b25f_](https://github.com/Alf-Melmac/slotbotServer/commit/9b73b25f987e3261553ba6de6aeacbe3f86972f7)_)_
  * Discord Name and Avatar (also gifs) _(commit:_ [_3d586a95_](https://github.com/Alf-Melmac/slotbotServer/commit/3d586a953abd3f75080b9b8881a28e7a338dd9a8)_)_
  * Number of events participated _(commit:_ [_0a49896c_](https://github.com/Alf-Melmac/slotbotServer/commit/0a49896c6b536ac600cc61bdc812b644d5a6bacf)_)_
  * Logged-in users see the permissions assigned
  * Global Notification Settings (See below) _(commit:_ [_c327d351_](https://github.com/Alf-Melmac/slotbotServer/commit/c327d351915d54a71f537672742beda992c4ea0e)_)_
  * Can be embedded, for example, in Discord _(commit:_ [_51c580f2_](https://github.com/Alf-Melmac/slotbotServer/commit/51c580f2226bf019387df6ccce7b4f963afd351d)_)_
  * Forwarding to own profile via `/profile/me` _(commit:_ [_f7788f30_](https://github.com/Alf-Melmac/slotbotServer/commit/f7788f30fe8026cb2002e1f7dd0a3f469d701f6f)_)_
  * Display and edit the SteamId _(commit:_ [_961b384c_](https://github.com/Alf-Melmac/slotbotServer/commit/961b384c725c0212fe85e2669d3582d4c90efa0d)_)_
* **Event reminder** via Discord
  * Global setting to be reminded via Discord before each event at the specified time.
  * Multiple notifications can be configured before an event.
* Pictures of events with placeholders can now be loaded 17 times faster. _(commit:_ [_94055308_](https://github.com/Alf-Melmac/slotbotServer/commit/94055308520cd265cddece6e8280754321a1f0a9)_)_

## 🐞 Bug Fixes

* When navigating back to the calendar from an event with the back button of the browser, the loading circle does not disappear. (Really fixed this time) _(commit:_ [_7db5b285_](https://github.com/Alf-Melmac/slotbotServer/commit/7db5b285b9a6dc5a82aa52ce29972d72a64592d1)_)_
* The notifications for relocating within an event are no longer sent in the wrong order. _(commit:_ [_701abf0d_](https://github.com/Alf-Melmac/slotbotServer/commit/701abf0df462e200b694fd8a2cfc4883f6eadf84)_)_
* Fixed an incorrect configuration that prevented events from being saved with the new description size. `(Thanks Mäxo for tracking down this error)`
* The event date could not be changed if the new date specified a day that was not present in the old month. _(commit:_ [_30927b45_](https://github.com/Alf-Melmac/slotbotServer/commit/30927b4598c86f3b2a2ec7f7abc02676370df875)_)_
* mission.sqm Upload `(Thanks to Parrot for providing his mission files)`
  * A group without a group name prevented the entire upload. _(commit:_ [_e1f53627_](https://github.com/Alf-Melmac/slotbotServer/commit/e1f53627e59e76e4c0d1434e2118d6026d56dd6f)_)_
  * Leading blanks in a slot name caused the slot number to be transferred incorrectly. _(commit:_ [_38781d82_](https://github.com/Alf-Melmac/slotbotServer/commit/38781d82482374510127711765520b34017e9429)_)_

***

{% hint style="info" %}
Note on the notifications: Adjustments to the settings are only applied to new slottings in events. This can also be done by unslot and slot.
{% endhint %}

{% hint style="warning" %}
Note on the Steam ID: Currently, this is only used for transferring to external systems. In the future, it may be possible to log in using this ID. Please make sure to check the registered IDs and **only enter your own** Steam64 ID.
{% endhint %}
