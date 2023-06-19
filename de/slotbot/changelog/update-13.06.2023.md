# Update 13.06.2023

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th data-hidden></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Slotbot-Server</strong></td><td>2.4.0 <img src="../../.gitbook/assets/Badge-New.png" alt="Neu" data-size="line"></td><td></td><td><a href="https://github.com/Alf-Melmac/slotbotServer/releases/tag/v2.4.0">https://github.com/Alf-Melmac/slotbotServer/releases/tag/v2.4.0</a></td></tr><tr><td><strong>Slotbot-Frontend</strong></td><td>1.4.0 <img src="../../.gitbook/assets/Badge-New.png" alt="Neu" data-size="line"></td><td></td><td><a href="https://github.com/Alf-Melmac/slotbot-frontend/releases/tag/v1.4.0">https://github.com/Alf-Melmac/slotbot-frontend/releases/tag/v1.4.0</a></td></tr></tbody></table>

## ⭐ Neue Features

* Das Format einer Event-Bild-URL wird nun direkt bei der Eingabe validiert. _(commit:_ [_9f09f8ca_](https://github.com/Alf-Melmac/slotbot-frontend/commit/9f09f8ca4e4a3ada7bf8223ce888b452bdca7c4b)_,_ [_0fc2c9e7_](https://github.com/Alf-Melmac/slotbotServer/commit/0fc2c9e7cdf1f22687f1d52d4453f26aad609991)_)_
* Alle Seiten zeigen während der Navigation zu anderen Seiten die Informationen schneller an, da statische Elemente, wie die Kopfzeile, nicht mehr neu geladen werden. Diese statischen Elemente werden beim Laden auch nicht mehr kurzzeitig ausgeblendet, sondern bleiben sichtbar. Die Navigation fühlt sich dadurch deutlich flüssiger an. _(commit:_ [_71aae4af_](https://github.com/Alf-Melmac/slotbot-frontend/commit/71aae4afe2d05f118eb39aa4f8386f3ef8492f61)_)_
* Die Community-Seiten können mit unerwarteten Fehlern wesentlich besser umgehen und zeigen das konkrete Problem an. Zudem wird der Ladevorgang sichtbar dargestellt. _(commit:_ [_71aae4af_](https://github.com/Alf-Melmac/slotbot-frontend/commit/71aae4afe2d05f118eb39aa4f8386f3ef8492f61)_)_
* Viele Event-Änderungen, insbesondere an der Slotliste, spiegeln sich zukünftig schneller in der Discord Ausgabe wider. _(commit:_ [_1750d9fe_](https://github.com/Alf-Melmac/slotbotServer/commit/1750d9fe6f3dca862ee244f4b265a14ba251cc1d)_)_
* Alle API-Endpunkte wurden überarbeitet und sauber modelliert. Die Objekte und Fehlermeldung enthalten nun alle relevanten Informationen und weniger Rechtsschreibfehler. Die Dokumentation ist ab sofort hier verfügbar: [api-dokumentation.md](../api-dokumentation.md "mention"). _(commit:_ [_a797c7a4_](https://github.com/Alf-Melmac/slotbotServer/commit/a797c7a4c184cccc05706dceaf783a2e00a93b7e)_,_ [_4a30ca60_](https://github.com/Alf-Melmac/slotbotServer/commit/4a30ca60d6a888767f846408291dd473b9a4a8ab)_)_

## 🐞 Fehlerbehebungen

* Event-Benachrichtigungen werden wieder und zur richtigen Zeit versendet. `(Danke Mäxo fürs Bescheid geben)` _(commit:_ [_9742b822_](https://github.com/Alf-Melmac/slotbotServer/commit/9742b8229f8b1ef61849f868301b1dbf6343b092)_)_
* Zuvor blockierte Slots behalten nicht mehr den alten Blockierungstext, wenn kein neuer angegeben wird. Stattdessen wird der Standard-Fallback ("Gesperrt") verwendet. _(commit:_ [_06cc9d1e_](https://github.com/Alf-Melmac/slotbotServer/commit/06cc9d1e24bd6be7cf1882b63ecb38357a320252)_)_

## 🔨 Technisches

* Unterstützung der [neuen Discord-Benutzernamen](https://discord.com/blog/usernames). _(commit:_ [_7f6fbc6e_](https://github.com/Alf-Melmac/slotbotServer/commit/7f6fbc6e507bf0a55b542809da7e3464a77142ff)_)_
* Der Wirkungsbereich des `JSESSIONID`-Cookies, das beim Login erzeugt wird, wurde eingeschränkt. Dies bietet etwas mehr Schutz gegen CSRF-Angriffe. _(commit:_ [_2b48202b_](https://github.com/Alf-Melmac/slotbotServer/commit/2b48202b2c37effc2f122a22079fc4bdb62a0041)_)_
