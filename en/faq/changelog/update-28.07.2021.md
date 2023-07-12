# Update 28.07.2021

## ⭐ New Features

* Event descriptions may now contain 4096 characters. _(commit:_ [_9f76eec7_](https://github.com/Alf-Melmac/slotbotServer/commit/9f76eec7713396eea02e8b9c9b74f3047c70d190)_)_
* The PostMessage and EditMessage commands may now also be used by mission builders. _(commit:_ [_8037327a_](https://github.com/Alf-Melmac/slotbotServer/commit/8037327a2a359e06bb52f7334fcd92d37466bf0e)_)_
* First **slash commands** added. The commands Slot, Unslot and BlockSlot can now be used via the new [slash commands](https://support.discord.com/hc/en-us/articles/1500000368501-Slash-Commands-FAQ).
* Erste **Slash-Commands** eingefügt. Die Befehle Slot, Unslot und BlockSlot können nun über die neuen [Slash-Commands](https://support.discord.com/hc/en-us/articles/1500000368501-Slash-Commands-FAQ) verwendet werden. Start the message with a <img src="../../.gitbook/assets/slash-emoji.png" alt="" data-size="line"> and Discord will do the explanation and validation as you type. `(Greetings to Kalle)` _(commit:_ [_62a576a0_](https://github.com/Alf-Melmac/slotbotServer/commit/62a576a01df2f5bca8e1c319a2dae0fc4a584ab3)_,_ [_87421c01_](https://github.com/Alf-Melmac/slotbotServer/commit/87421c0131fc1567b0f801bf2c77f516c1295226)_,_ [_03279756_](https://github.com/Alf-Melmac/slotbotServer/commit/032797564fa0a995853de79e12ba45acda2daade)_)_

## 🐞 Bug Fixes

* Fixed spelling error in the description of the command RebuildArchive. _(commit:_ [_f120dfc1_](https://github.com/Alf-Melmac/slotbotServer/commit/f120dfc1ae0b1558e06318f323d9bfd943fc1dfa)_)_
* New event types can be created again `(Thanks Mäxo for the follow-up)` _(commit:_ [_6794ebb2_](https://github.com/Alf-Melmac/slotbotServer/commit/6794ebb28c6b1ef9b3e85e9fa56b49212a33525a)_)_
* If no image was specified when an event was created, the URL of the default image was displayed in edit mode. _(commit:_ [_e4410911_](https://github.com/Alf-Melmac/slotbotServer/commit/e4410911db49bcab15a8390ddfcd84c3ad447abe)_)_

{% hint style="info" %}
Note on the slash commands: The use of the commands is only visible to you. After you have executed a command, you can remove the bot's message by pressing the "Discard Message" button. Alternatively, all these messages are deleted after a Discord restart.
{% endhint %}
