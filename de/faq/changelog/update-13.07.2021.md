# Update 13.07.2021

## ⭐ Neue Features

* **Größere Slotliste**. Discord erlaubt in einer Nachricht nur 2000 Zeichen. Für einige Events war das einfach zu wenig. Jetzt gibt es zwei Slotlist-Nachrichten in die die Slotliste aufgeteilt wird _(commit:_ [_9401fb48_](https://github.com/Alf-Melmac/slotbotServer/commit/9401fb488f1bb96e939b1b7aab01938c18526b3c)_)_
* Eventzeitpunkt wird nun in der Zeitzone des Nutzers angezeigt _(commit:_ [_e3785962_](https://github.com/Alf-Melmac/slotbotServer/commit/e37859629a089f05e04f5aab04e91f590e7b725b)_)_
* Spenden-Danksagung kann nun über den Bot vollzogen werden _(commit:_ [_a05e441f_](https://github.com/Alf-Melmac/slotbotServer/commit/a05e441f6812c74ce2d8eaec692dda1deb9afb52)_)_
* "Help" gibt nun auch die Aliase für jeden Befehl aus, wenn verfügbar _(commit:_ [_9783bd8c_](https://github.com/Alf-Melmac/slotbotServer/commit/9783bd8c8af11e2c5aac7fdd072aa158306a5856)_)_
* Events können nun über einen Befehl archiviert werden. Die Archivierung fügt die wichtigsten Informationen in einen zentralen Kanal und löscht den Event-Kanal _(commit:_ [_2b9e06af_](https://github.com/Alf-Melmac/slotbotServer/commit/2b9e06af1683bf3cffcdda2231eb4cbb59d63b1e)_)_
* `rebuildArchive` schickt das gesamte Archiv in den konfigurierten Kanal _(commit:_ [_02d24bd1_](https://github.com/Alf-Melmac/slotbotServer/commit/02d24bd13fe6bc4c06af65c389d55b13c1ca64bb)_)_

## 🐞 Fehlerbehebungen

* Ein Slot mit einer ungültigen eingetragenen User-ID wurde auf der Website als leer angezeigt. _(commit:_ [_1e8931f5_](https://github.com/Alf-Melmac/slotbotServer/commit/1e8931f5ffb57f76dedeaa4dd9fac9d1bcda836c)_)_
* Eine Nachricht mit nur dem Prefix, im Standard `!` führte zu einem internen Fehler _(commit:_ [_fe49fd7e_](https://github.com/Alf-Melmac/slotbotServer/commit/fe49fd7e2dcb5ba45263d9d0c8b0b0882a0d76e5)_)_
