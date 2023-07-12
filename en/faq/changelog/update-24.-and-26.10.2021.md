# Update 24. & 26.10.2021

## ⭐ New Features

* Shared events that have been added to the own server are now also displayed in the calendar. _(commit:_ [_7ae496ba_](https://github.com/Alf-Melmac/slotbotServer/commit/7ae496bab535b933cc0cf1ee279f0b24c150dfc2)_)_
* The shareability of an event can no longer be changed if the event has already been added to another Discord server. _(commit:_ [_66ee998a_](https://github.com/Alf-Melmac/slotbotServer/commit/66ee998a3b7e79acc1fea56a999f151a540a0fe7)_)_
* Leading and trailing spaces are now also automatically removed in the event description, mission length, event image url, event details field name and description. _(commit:_ [_6096671b_](https://github.com/Alf-Melmac/slotbotServer/commit/6096671b3a9669a40e677077f144b039529f46fb)_,_ [_db1c1b3a_](https://github.com/Alf-Melmac/slotbotServer/commit/db1c1b3ae40d16b6a82973164e3200817edb3f0c)_)_
* Texts within the DAA design are easier to read due to less yellow. A new slot list separator has been introduced for DAA. _(commit:_ [_cb60303a_](https://github.com/Alf-Melmac/slotbotServer/commit/cb60303a9f12c39e2598dcd9e55a8d79b892d290)_,_ [_8218166c_](https://github.com/Alf-Melmac/slotbotServer/commit/8218166ca56a9c626d3afbc5f1f2ea2f2ebb2d3f)_)_
* The "Add Channel" button in the event details is back and will be displayed as long as the owners of an event have not added it to their Discord. _(commit:_ [_67398586_](https://github.com/Alf-Melmac/slotbotServer/commit/6739858602a2aeba80c95822efd8c7c5dd663caf)_)_
* The display text of a blocked slot can be overwritten by blocking it again. _(commit:_ [_04851765_](https://github.com/Alf-Melmac/slotbotServer/commit/04851765030a1fad19a3dbfefbbdc2cb2dbce3de)_)_
* Events of the type "Deutsche Arma Allianz" can now be created with pre-filled details. _(commit:_ [_865506b3_](https://github.com/Alf-Melmac/slotbotServer/commit/865506b33b8012eeeb84b4e3ea383733e0d59447)_)_

## 🐞 Bug Fixes

* Reserve slots no longer receive duplicate slot numbers if the slot list contains slot number 100. _(commit:_ [_07fec89c_](https://github.com/Alf-Melmac/slotbotServer/commit/07fec89c9c469760c5d0149ee79d58454b0c9b0b)_)_
* Event notifications and logging times should now be executed at correct times or display the correct data. _(commit:_ [_2dfefeb1_](https://github.com/Alf-Melmac/slotbotServer/commit/2dfefeb1572b4819588a891bf8b415afb8c68189)_,_ [_ef377b9f_](https://github.com/Alf-Melmac/slotbotServer/commit/ef377b9f1307f4f3c91fa5bf1f674406c8573115)_,_ [_1d85ddd8_](https://github.com/Alf-Melmac/slotbotServer/commit/1d85ddd870ba2fbd06fb9029cd5782774bc6f238)_)_
* Event details are copied again when duplicating an event. _(commit:_ [_1b42b6cc_](https://github.com/Alf-Melmac/slotbotServer/commit/1b42b6cc88ea1d993c905d1707528f8cf3320863)_)_
* The visibility, shareability and display texts of blocked slots of an event are no longer overwritten with the default values with every update. _(commit:_ [_8430dc36_](https://github.com/Alf-Melmac/slotbotServer/commit/8430dc36bd20cd64cd968f942004d6a43bb88a31)_,_ [_04851765_](https://github.com/Alf-Melmac/slotbotServer/commit/04851765030a1fad19a3dbfefbbdc2cb2dbce3de)_)_
