# Update 13.06.2023

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th data-hidden></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Slotbot-Server</strong></td><td>2.4.0 <img src="../../.gitbook/assets/Badge-New.png" alt="Neu" data-size="line"></td><td></td><td><a href="https://github.com/Alf-Melmac/slotbotServer/releases/tag/v2.4.0">https://github.com/Alf-Melmac/slotbotServer/releases/tag/v2.4.0</a></td></tr><tr><td><strong>Slotbot-Frontend</strong></td><td>1.4.0 <img src="../../.gitbook/assets/Badge-New.png" alt="Neu" data-size="line"></td><td></td><td><a href="https://github.com/Alf-Melmac/slotbot-frontend/releases/tag/v1.4.0">https://github.com/Alf-Melmac/slotbot-frontend/releases/tag/v1.4.0</a></td></tr></tbody></table>

## ⭐ New Features

* The format of an event image URL is now validated directly on entry. _(commit:_ [_9f09f8ca_](https://github.com/Alf-Melmac/slotbot-frontend/commit/9f09f8ca4e4a3ada7bf8223ce888b452bdca7c4b)_,_ [_0fc2c9e7_](https://github.com/Alf-Melmac/slotbotServer/commit/0fc2c9e7cdf1f22687f1d52d4453f26aad609991)_)_
* All pages display information faster during navigation to other pages, because static elements, such as the header, are no longer reloaded. These static elements are also no longer hidden for a short time during loading, but remain visible. Navigation feels much smoother as a result. _(commit:_ [_71aae4af_](https://github.com/Alf-Melmac/slotbot-frontend/commit/71aae4afe2d05f118eb39aa4f8386f3ef8492f61)_)_
* The community pages can handle unexpected errors much better and show the specific problem. In addition, the loading process is visibly displayed. _(commit:_ [_71aae4af_](https://github.com/Alf-Melmac/slotbot-frontend/commit/71aae4afe2d05f118eb39aa4f8386f3ef8492f61)_)_
* Many event changes, especially to the slot list, will be reflected more quickly in the Discord output in the future. _(commit:_ [_1750d9fe_](https://github.com/Alf-Melmac/slotbotServer/commit/1750d9fe6f3dca862ee244f4b265a14ba251cc1d)_)_
* All API endpoints have been revised and cleanly modeled. The objects and error message now contain all relevant information and fewer spelling errors. The documentation is now available here: [api-dokumentation.md](../../integrations/api-dokumentation.md "mention"). _(commit:_ [_a797c7a4_](https://github.com/Alf-Melmac/slotbotServer/commit/a797c7a4c184cccc05706dceaf783a2e00a93b7e)_,_ [_4a30ca60_](https://github.com/Alf-Melmac/slotbotServer/commit/4a30ca60d6a888767f846408291dd473b9a4a8ab)_)_

## 🐞 Bug Fixes

* Event notifications are sent again and at the right time. `(Thanks Mäxo for letting me know)` _(commit:_ [_9742b822_](https://github.com/Alf-Melmac/slotbotServer/commit/9742b8229f8b1ef61849f868301b1dbf6343b092)_)_
* Previously blocked slots no longer retain the old blocking text if a new one is not specified. Instead, the default fallback ("Gesperrt") is used. _(commit:_ [_06cc9d1e_](https://github.com/Alf-Melmac/slotbotServer/commit/06cc9d1e24bd6be7cf1882b63ecb38357a320252)_)_

## 🔨 Technical

* Support for the [new Discord usernames](https://discord.com/blog/usernames). _(commit:_ [_7f6fbc6e_](https://github.com/Alf-Melmac/slotbotServer/commit/7f6fbc6e507bf0a55b542809da7e3464a77142ff)_)_
* The scope of the `JSESSIONID` cookie that is generated at login has been restricted. This provides a bit more protection against CSRF attacks. _(commit:_ [_2b48202b_](https://github.com/Alf-Melmac/slotbotServer/commit/2b48202b2c37effc2f122a22079fc4bdb62a0041)_)_
