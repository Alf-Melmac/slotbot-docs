# Update 28.07.2021

## ⭐ Neue Features

* Event-Beschreibungen dürfen jetzt 4096 Zeichen enthalten _(commit:_ [_9f76eec7_](https://github.com/Alf-Melmac/slotbotServer/commit/9f76eec7713396eea02e8b9c9b74f3047c70d190)_)_
* Die Befehle PostMessage und EditMessage dürfen nun auch von den Missionsbauern verwendet werden _(commit:_ [_8037327a_](https://github.com/Alf-Melmac/slotbotServer/commit/8037327a2a359e06bb52f7334fcd92d37466bf0e)_)_
* Erste **Slash-Commands** eingefügt. Die Befehle Slot, Unslot und BlockSlot können nun über die neuen [Slash-Commands](https://support.discord.com/hc/en-us/articles/1500000368501-Slash-Commands-FAQ) verwendet werden. Nachricht mit einem !\[slash-emoji.png]\(/public/emojis/slash-emoji.png =20x) beginnen und die Erklärung und Validierung übernimmt Discord schon bei der Eingabe (Grüße an Kalle) _(commit:_ [_62a576a0_](https://github.com/Alf-Melmac/slotbotServer/commit/62a576a01df2f5bca8e1c319a2dae0fc4a584ab3)_,_ [_87421c01_](https://github.com/Alf-Melmac/slotbotServer/commit/87421c0131fc1567b0f801bf2c77f516c1295226)_,_ [_03279756_](https://github.com/Alf-Melmac/slotbotServer/commit/032797564fa0a995853de79e12ba45acda2daade)_)_

## 🐞 Fehlerbehebungen

* Rechtschreibfehler in der Beschreibung des Befehls RebuildArchive behoben _(commit:_ [_f120dfc1_](https://github.com/Alf-Melmac/slotbotServer/commit/f120dfc1ae0b1558e06318f323d9bfd943fc1dfa)_)_
* Es können wieder Event-Typen neu angelegt werden `(Danke Mäxo für das Nachhaken)` _(commit:_ [_6794ebb2_](https://github.com/Alf-Melmac/slotbotServer/commit/6794ebb28c6b1ef9b3e85e9fa56b49212a33525a)_)_
* Wurde bei der Anlage eines Events kein Bild festgelegt, wurde im Editiermodus die URL des Standard-Bildes angezeigt _(commit:_ [_e4410911_](https://github.com/Alf-Melmac/slotbotServer/commit/e4410911db49bcab15a8390ddfcd84c3ad447abe)_)_



{% hint style="info" %}
Hinweis zu den Slash-Commands: Die Verwendung der Befehle ist nur für euch sichtbar. Nachdem ihr einen Befehl ausgeführt habt, könnt ihr die Nachricht des Bots über den Knopf "Nachricht verwerfen" entfernen. Alternativ sind alle diese Nachrichten nach einem Discord-Neustart gelöscht.
{% endhint %}
