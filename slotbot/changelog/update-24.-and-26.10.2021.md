# Update 24. & 26.10.2021

## ⭐ Neue Features

* Geteilte Events, die dem eigenen Server hinzugefügt wurden, werden nun auch im Kalender angezeigt. _(commit:_ [_7ae496ba_](https://github.com/Alf-Melmac/slotbotServer/commit/7ae496bab535b933cc0cf1ee279f0b24c150dfc2)_)_
* Die Teilbarkeit eines Events kann nicht länger verändert werden, wenn das Event bereits einem Anderen Discord Server hinzugefügt wurde. _(commit:_ [_66ee998a_](https://github.com/Alf-Melmac/slotbotServer/commit/66ee998a3b7e79acc1fea56a999f151a540a0fe7)_)_
* Führende und Folgende Leerzeichen werden ab sofort auch in der Eventbeschreibung, Missionslänge, Event-Bild-Url, Event-Details-Feld-Name und -Beschreibung automatisch entfernt. _(commit:_ [_6096671b_](https://github.com/Alf-Melmac/slotbotServer/commit/6096671b3a9669a40e677077f144b039529f46fb)_,_ [_db1c1b3a_](https://github.com/Alf-Melmac/slotbotServer/commit/db1c1b3ae40d16b6a82973164e3200817edb3f0c)_)_
* Texte innerhalb des DAA-Designs sind durch weniger gelb besser lesbar. Ein neuer Slotlisten-Trenner wurde für DAA eingeführt. _(commit:_ [_cb60303a_](https://github.com/Alf-Melmac/slotbotServer/commit/cb60303a9f12c39e2598dcd9e55a8d79b892d290)_,_ [_8218166c_](https://github.com/Alf-Melmac/slotbotServer/commit/8218166ca56a9c626d3afbc5f1f2ea2f2ebb2d3f)_)_
* Der Button "Kanal hinzufügen" in den Event-Details ist wieder da und wir solange angezeigt, wie die Besitzer eines Events dieses nicht ihrem Discord hinzugefügt haben. _(commit:_ [_67398586_](https://github.com/Alf-Melmac/slotbotServer/commit/6739858602a2aeba80c95822efd8c7c5dd663caf)_)_
* Der Anzeigetext eines blockierten Slots kann durch erneutes Blockieren überschrieben werden. _(commit:_ [_04851765_](https://github.com/Alf-Melmac/slotbotServer/commit/04851765030a1fad19a3dbfefbbdc2cb2dbce3de)_)_
* Events des Typen "Deutsche Arma Allianz" können nun mit voraugefüllten Details erstellt werden. _(commit:_ [_865506b3_](https://github.com/Alf-Melmac/slotbotServer/commit/865506b33b8012eeeb84b4e3ea383733e0d59447)_)_

## 🐞 Fehlerbehebungen

* Reserve-Slots erhalten nun keine doppelten Slotnummern mehr, wenn die Slotliste die Slotnummer 100 enthält. _(commit:_ [_07fec89c_](https://github.com/Alf-Melmac/slotbotServer/commit/07fec89c9c469760c5d0149ee79d58454b0c9b0b)_)_
* Eventbenachrichtigungen und Logging-Zeiten sollten nun zu korrekten Zeiten ausgeführt werden bzw. die korrekte Daten anzeigen. _(commit:_ [_2dfefeb1_](https://github.com/Alf-Melmac/slotbotServer/commit/2dfefeb1572b4819588a891bf8b415afb8c68189)_,_ [_ef377b9f_](https://github.com/Alf-Melmac/slotbotServer/commit/ef377b9f1307f4f3c91fa5bf1f674406c8573115)_,_ [_1d85ddd8_](https://github.com/Alf-Melmac/slotbotServer/commit/1d85ddd870ba2fbd06fb9029cd5782774bc6f238)_)_
* Event-Details werden bei beim Duplizieren eines Events wieder mitkopiert. _(commit:_ [_1b42b6cc_](https://github.com/Alf-Melmac/slotbotServer/commit/1b42b6cc88ea1d993c905d1707528f8cf3320863)_)_
* Die Sichbarkeit, Teilbarkeit und Anzeigetexte blockierter Slots eines Events werden nicht länger bei jedem Update mit den Standardwerten überschrieben. _(commit:_ [_8430dc36_](https://github.com/Alf-Melmac/slotbotServer/commit/8430dc36bd20cd64cd968f942004d6a43bb88a31)_,_ [_04851765_](https://github.com/Alf-Melmac/slotbotServer/commit/04851765030a1fad19a3dbfefbbdc2cb2dbce3de)_)_
