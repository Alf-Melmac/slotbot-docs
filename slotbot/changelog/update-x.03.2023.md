---
description: Kommendes Update
---

# Update X.03.2023

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th data-hidden></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Slotbot-Server</strong></td><td>2.2.0 <img src="../../.gitbook/assets/Badge-New.png" alt="Neu" data-size="line"></td><td></td><td><a href="https://github.com/Alf-Melmac/slotbotServer/releases/tag/v2.2.0">https://github.com/Alf-Melmac/slotbotServer/releases/tag/v2.2.0</a></td></tr><tr><td><strong>Slotbot-Frontend</strong></td><td>1.2.0 <img src="../../.gitbook/assets/Badge-New.png" alt="Neu" data-size="line"></td><td></td><td><a href="https://github.com/Alf-Melmac/slotbot-frontend/releases/tag/v1.2.0">https://github.com/Alf-Melmac/slotbot-frontend/releases/tag/v1.2.0</a></td></tr></tbody></table>

## :star: Neue Features

* Die Mitgliederansicht einzelner Communities lädt durch Caching und Nachladen beim Durchscrollen deutlich schneller. _(commit:_ [_732a0837_](https://github.com/Alf-Melmac/slotbot-frontend/commit/732a0837a9730daecb82f7f536ae6af567a3b7bb)_,_ [_f139d7ce_](https://github.com/Alf-Melmac/slotbotServer/commit/f139d7cef90cca341480bf7f53704f0b7a78e3af)_)_
* Jedes Datum und jede Uhrzeit werden automatisch in die Zeitzone des Betrachters umgewandelt. Auch Eingaben werden direkt umgewandelt und für jeden Betrachter in der eigenen Zeitzone angezeigt. _(commit:_ [_d1e5c9db_](https://github.com/Alf-Melmac/slotbot-frontend/commit/d1e5c9db1811bd97004636541e819a098ccad740)_,_ [_470deda4_](https://github.com/Alf-Melmac/slotbotServer/commit/470deda4e8e951863ba0171208272ae5924be205)_,_ [_e4ea5b6d_](https://github.com/Alf-Melmac/slotbotServer/commit/e4ea5b6d24e54e5e6375a71dca65d254f7a3e956)_)_
* Der Trenner der in Discord ausgegebenen Event-Details kann für jede Community administrativ konfiguriert werden. _(commit:_ [_e2f67f1c_](https://github.com/Alf-Melmac/slotbotServer/commit/e2f67f1c79fd6a1a4bb66ef4f206d4d19245705e)_)_

## :lady\_beetle: Fehlerbehebungen

* Übersetzungen dürfen auch leer sein. Dadurch wird in den Event-Details die Uhrzeit im 12 Stunden Format nicht mehr mit am/pm und oClock angezeigt. _(commit:_ [_95901b6e_](https://github.com/Alf-Melmac/slotbot-frontend/commit/95901b6ec9c0f1e860c32d409fa6f942015a1ae6)_)_
