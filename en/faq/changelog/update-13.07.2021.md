# Update 13.07.2021

## ⭐ New Features

* **Larger slot list**. Discord only allows 2000 characters in a message. For some events this was simply too little. Now there are two slotlist messages into which the slotlist is split up. _(commit:_ [_9401fb48_](https://github.com/Alf-Melmac/slotbotServer/commit/9401fb488f1bb96e939b1b7aab01938c18526b3c)_)_
* Event time is now displayed in the user's time zone. _(commit:_ [_e3785962_](https://github.com/Alf-Melmac/slotbotServer/commit/e37859629a089f05e04f5aab04e91f590e7b725b)_)_
* Donation acknowledgement can now be completed via the bot. _(commit:_ [_a05e441f_](https://github.com/Alf-Melmac/slotbotServer/commit/a05e441f6812c74ce2d8eaec692dda1deb9afb52)_)_
* "Help" now also outputs the aliases for each command, if available. _(commit:_ [_9783bd8c_](https://github.com/Alf-Melmac/slotbotServer/commit/9783bd8c8af11e2c5aac7fdd072aa158306a5856)_)_
* Events can now be archived via a command. Archiving adds the most important information to a central channel and deletes the event channel. _(commit:_ [_2b9e06af_](https://github.com/Alf-Melmac/slotbotServer/commit/2b9e06af1683bf3cffcdda2231eb4cbb59d63b1e)_)_
* `rebuildArchive` sends the entire archive to the configured channel. _(commit:_ [_02d24bd1_](https://github.com/Alf-Melmac/slotbotServer/commit/02d24bd13fe6bc4c06af65c389d55b13c1ca64bb)_)_

## 🐞 Bug Fixes

* A slot with an invalid User ID entered was shown as empty on the website. _(commit:_ [_1e8931f5_](https://github.com/Alf-Melmac/slotbotServer/commit/1e8931f5ffb57f76dedeaa4dd9fac9d1bcda836c)_)_
* A message with only the prefix, in the default `!` led to an internal error. _(commit:_ [_fe49fd7e_](https://github.com/Alf-Melmac/slotbotServer/commit/fe49fd7e2dcb5ba45263d9d0c8b0b0882a0d76e5)_)_
