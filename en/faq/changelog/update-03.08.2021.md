# Update 03.08.2021

## 🗒️ Noteworthy

* The permissions are now decoupled from the existing roles (e.g. creator and moderator). The bot automatically creates the required roles at the start, if they do not already exist. These will control the permissions in the future. These roles should not be renamed or deleted. _(commit:_ [_4b436905_](https://github.com/Alf-Melmac/slotbotServer/commit/4b4369058565c3dcb3cebcd243fb04c7cbba492d)_)_

## ⭐ New Features

* Added more **slash commands**. The commands PostMessage, EventPing, RandomSlot, Swap, AddEventToChannel can now be used via the new [slash commands](https://support.discord.com/hc/en-us/articles/1500000368501-Slash-Commands-FAQ). Start the message with a <img src="../../.gitbook/assets/slash-emoji.png" alt="" data-size="line"> and Discord will do the explanation and validation as you type. _(commit:_ [_446a9c58_](https://github.com/Alf-Melmac/slotbotServer/commit/446a9c586ae3c1a4330b38a85e2be5a4eddf7f84)_,_ [_f94607bd_](https://github.com/Alf-Melmac/slotbotServer/commit/f94607bd0f760a35ef9f8cebe05325f2e1514c3e)_,_ [_f476c0d3_](https://github.com/Alf-Melmac/slotbotServer/commit/f476c0d3af967cfaf64e58f11086525e2e94ced6)_,_ [_7b790452_](https://github.com/Alf-Melmac/slotbotServer/commit/7b7904521567b60e4cdbe7cb86a481f182b218a5)_)_
* Within the reserve, there is now no longer notification of a slot change. Now the bot only sends a message when things really get going. _(commit:_ [_8d6f8b2a_](https://github.com/Alf-Melmac/slotbotServer/commit/8d6f8b2a1ac2dca7d87f394da39f8b79f69b8de2)_)_
* During event creation, the maximum length of the individual fields is now indicated _(commit:_ [_a0cd0836_](https://github.com/Alf-Melmac/slotbotServer/commit/a0cd08364565df8bddee4c787f22f8500357cb55)_)_
* The event details standards have been adapted for the new campaign. _(commit:_ [_2e1fa872_](https://github.com/Alf-Melmac/slotbotServer/commit/2e1fa8725374a9e7924741375cfcd4f094ad35cd)_)_

## 🐞 Bug Fixes

* Missing quotation marks in the help description of the PostMessage command added. _(commit:_ [_f94607bd_](https://github.com/Alf-Melmac/slotbotServer/commit/f94607bd0f760a35ef9f8cebe05325f2e1514c3e)_)_
