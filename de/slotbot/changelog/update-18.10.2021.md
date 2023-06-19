# Update 18.10.2021

## 🗒️ Erwähnenswerte Änderungen

* Nun verfügbar für mehr Communitys. Mit der größten Änderung dieses Updates kann der Slotbot nun mehrere Discord Server und sogar Kalender unterstützen.
* Einige Features sind aus dem Slotbot in den neuen Discord-Bot [Seymour](https://github.com/Alf-Melmac/Seymour) umgezogen. Dieser enthält zukünftig alle Discord-Allgemeinen-Features, die nicht die Eventplanung betreffen. Davon verspreche ich mir einfachere und schnellere Updates und Wiederverwendbarkeit.

## ⭐ Neue Features

* Der Befehl `EventPrint` ist weg gefallen. Die Events werden nun direkt nachdem sie einem Kanal zugeordnet wurden ausgegeben. _(commit:_ [_d91d1c59_](https://github.com/Alf-Melmac/slotbotServer/commit/d91d1c5984014d568bcc762cbecb91313645bbdf)_)_
* Der Slotbot ist nun fitt für die Deutsche Arma Allianz. Mit diesem Schritt ist die Anwendung nicht mehr auf einen Discord Server, insbesondere AMB beschränkt, sondern ist beliebig erweiterbar und kann in mehr Communitys ein einheitliches Slotsystem bieten. _(commit:_ [_f67be663_](https://github.com/Alf-Melmac/slotbotServer/commit/f67be6631dbe28b0e2b75598c46e809560b5b573)_)_
  * Events können geteilt werden. Das bedeutet, dass andere Communitys, die den Slotbot verwenden, dieses Event in ihren Discord übernehmen und sich darüber slotten können. (Beispiel: DAA erstellt das Event, AMB kann es ohne kopieren zu müssen im eigenen Discord verwenden und bleibt jederzeit auf neuestem Stand) _(commit:_ [_6bcab1f0_](https://github.com/Alf-Melmac/slotbotServer/commit/6bcab1f08986622269c3f34d280212b75169e216)_,_ [_f8ecd323_](https://github.com/Alf-Melmac/slotbotServer/commit/f8ecd323b645aa13e599980c13a3f178a4f61a8c)_)_
  * Authentifizierung über die API, wie auch im Web, basiert auf Berechtigungen jeder einzelner Community. _(commit:_ [_c49afe75_](https://github.com/Alf-Melmac/slotbotServer/commit/c49afe755cd56522e0e3f6bff6087150c1011ab2)_)_
  * DAA hat eine eigene Designanpassung für den eigenen Bereich erhalten. _(commit:_ [_f67be663_](https://github.com/Alf-Melmac/slotbotServer/commit/f67be6631dbe28b0e2b75598c46e809560b5b573)_,_ [_0255cfbc_](https://github.com/Alf-Melmac/slotbotServer/commit/0255cfbc02420bb7c66db39585dd59c415894bf5)_)_

## 🐞 Fehlerbehebungen

* Eine fehlgeschlagene Authentifizierung über die API aufgrund eines falschen Tokens antwortet nun mit der korrekten Statusmeldung und nicht länger mit einem internen Serverfehler. _(commit:_ [_4e17a02d_](https://github.com/Alf-Melmac/slotbotServer/commit/4e17a02d290219553b0035d2ff593f1165910308)_)_
* Das Löschen der "Es wurde eine Nachricht angepinnt"-Nachricht während der Eventausgabe im Discord wurde zuverlässiger gemacht. _(commit:_ [_120d5815_](https://github.com/Alf-Melmac/slotbotServer/commit/120d5815f03582dfc9ac9a1ce75270c9adff876d)_)_

## 🔨 Aktualisierte Abhängigkeiten

* Die neue Fontawesome Version bringt das neue Discord Logo mit _(commit:_ [_870ceecf_](https://github.com/Alf-Melmac/slotbotServer/commit/870ceecf4ccfdac655303cdb44691f7cce5da656)_)_
