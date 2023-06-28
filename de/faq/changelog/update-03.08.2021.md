# Update 03.08.2021

## 🗒️ Erwähnenswerte Änderungen

* Die Berechtigungen sind nun entkoppelt von den vorhandenen Rollen (Bspw. Creator und Moderator). Der Bot erstellt selbständig, falls noch nicht vorhanden, beim Start die benötigten Rollen. Diese steuern zukünftig die Berechtigungen. Diese Rollen sollten nicht umbenannt oder gelöscht werden. _(commit:_ [_4b436905_](https://github.com/Alf-Melmac/slotbotServer/commit/4b4369058565c3dcb3cebcd243fb04c7cbba492d)_)_

## ⭐ Neue Features

* Mehr **Slash-Commands** eingefügt. Die Befehle PostMessage, EventPing, RandomSlot, Swap, AddEventToChannel können nun über die neuen [Slash-Commands](https://support.discord.com/hc/en-us/articles/1500000368501-Slash-Commands-FAQ) verwendet werden. Nachricht mit einem !\[slash-emoji.png]\(/public/emojis/slash-emoji.png =20x) beginnen und die Erklärung und Validierung übernimmt Discord schon bei der Eingabe _(commit:_ [_446a9c58_](https://github.com/Alf-Melmac/slotbotServer/commit/446a9c586ae3c1a4330b38a85e2be5a4eddf7f84)_,_ [_f94607bd_](https://github.com/Alf-Melmac/slotbotServer/commit/f94607bd0f760a35ef9f8cebe05325f2e1514c3e)_,_ [_f476c0d3_](https://github.com/Alf-Melmac/slotbotServer/commit/f476c0d3af967cfaf64e58f11086525e2e94ced6)_,_ [_7b790452_](https://github.com/Alf-Melmac/slotbotServer/commit/7b7904521567b60e4cdbe7cb86a481f182b218a5)_)_
* Innerhalb der Reserve wird nun nicht mehr über einen Slotwechsel benachrichtigt. Jetzt versendet der Bot erst eine Nachricht, wenn es auch richtig los geht _(commit:_ [_8d6f8b2a_](https://github.com/Alf-Melmac/slotbotServer/commit/8d6f8b2a1ac2dca7d87f394da39f8b79f69b8de2)_)_
* Während der Eventerstellung wird nun auf die maximale Länge der einzelnen Felder hingewiesen _(commit:_ [_a0cd0836_](https://github.com/Alf-Melmac/slotbotServer/commit/a0cd08364565df8bddee4c787f22f8500357cb55)_)_
* Die Event-Details-Standards wurden für die neue Kampagne angepasst _(commit:_ [_2e1fa872_](https://github.com/Alf-Melmac/slotbotServer/commit/2e1fa8725374a9e7924741375cfcd4f094ad35cd)_)_

## 🐞 Fehlerbehebungen

* Fehlende Anführungsstriche in der Hilfebeschreibung des Befehls PostMessage ergänzt _(commit:_ [_f94607bd_](https://github.com/Alf-Melmac/slotbotServer/commit/f94607bd0f760a35ef9f8cebe05325f2e1514c3e)_)_
