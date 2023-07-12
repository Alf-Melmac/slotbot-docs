# Update 18.10.2021

## 🗒️ Noteworthy

* Now available for more communities. With the biggest change of this update, Slotbot can now support multiple Discord servers and even calendars.
* Some features have been moved from the Slotbot to the new Discord bot [Seymour](https://github.com/Alf-Melmac/Seymour). In future, this will contain all Discord general features that do not relate to event planning. I hope that this will make updates easier and faster, and that it will be reusable.

## ⭐ New Features

* The `EventPrint` command has been dropped. The events are now printed directly after they have been assigned to a channel. _(commit:_ [_d91d1c59_](https://github.com/Alf-Melmac/slotbotServer/commit/d91d1c5984014d568bcc762cbecb91313645bbdf)_)_
* The Slotbot is now ready for the Deutsche Arma Allianz. With this step, the application is no longer limited to one Discord server, especially AMB, but can be extended as desired and can offer a uniform slot system in more communities. _(commit:_ [_f67be663_](https://github.com/Alf-Melmac/slotbotServer/commit/f67be6631dbe28b0e2b75598c46e809560b5b573)_)_
  * Events can be shared. This means that other communities that use the slotbot can copy this event into their Discord and slot about it. (Example: DAA creates the event, AMB can use it in its own Discord without having to copy it and remains up-to-date at all times). _(commit:_ [_6bcab1f0_](https://github.com/Alf-Melmac/slotbotServer/commit/6bcab1f08986622269c3f34d280212b75169e216)_,_ [_f8ecd323_](https://github.com/Alf-Melmac/slotbotServer/commit/f8ecd323b645aa13e599980c13a3f178a4f61a8c)_)_
  * Authentication via the API, as on the web, is based on permissions of each individual community. _(commit:_ [_c49afe75_](https://github.com/Alf-Melmac/slotbotServer/commit/c49afe755cd56522e0e3f6bff6087150c1011ab2)_)_
  * DAA has received its own design adaptation for its own area. _(commit:_ [_f67be663_](https://github.com/Alf-Melmac/slotbotServer/commit/f67be6631dbe28b0e2b75598c46e809560b5b573)_,_ [_0255cfbc_](https://github.com/Alf-Melmac/slotbotServer/commit/0255cfbc02420bb7c66db39585dd59c415894bf5)_)_

## 🐞 Bug Fixes

* A failed authentication via the API due to an incorrect token now responds with the correct status message and no longer with an internal server error. _(commit:_ [_4e17a02d_](https://github.com/Alf-Melmac/slotbotServer/commit/4e17a02d290219553b0035d2ff593f1165910308)_)_
* Made deleting the "A message has been pinned" message during event output in Discord more reliable. _(commit:_ [_120d5815_](https://github.com/Alf-Melmac/slotbotServer/commit/120d5815f03582dfc9ac9a1ce75270c9adff876d)_)_

## 🔨 Dependency Upgrades

* The new Fontawesome version comes with the new Discord logo. _(commit:_ [_870ceecf_](https://github.com/Alf-Melmac/slotbotServer/commit/870ceecf4ccfdac655303cdb44691f7cce5da656)_)_
