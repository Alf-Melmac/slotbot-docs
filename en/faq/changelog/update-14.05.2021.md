# Update 14.05.2021

## 🗒️ Noteworthy

* The URL for event editing has changed from`/edit/{id}` to `/{id}/edit`. _(commit:_ [_9acc42b6_](https://github.com/Alf-Melmac/slotbotServer/commit/9acc42b67925ce07e30c2d6afacb7ca5e00c96a1)_)_
* In the course of the event system changeover, the API outputs regarding the event details have changed. Since no system processes the details of an event so far, there is no new API version.

## ⭐ New Features

* **New command RandomSlot**. _(commit:_ [_4dedaa7e_](https://github.com/Alf-Melmac/slotbotServer/commit/4dedaa7ed9c77e73667e25310a7c25d87f96db0a)_)_
* Invalid API requests due to missing arguments, for example, are now rejected with a meaningful error message. _(commit:_ [_85fa8837_](https://github.com/Alf-Melmac/slotbotServer/commit/85fa8837567a0ab692d2559cd2cd03eef189dfad)_)_
* **Entire event system converted**. Events are now general and not only Arma-related.
  * "Event types" now group events. These describe the game and any details about it. These are displayed in the event details at the top and in the Discord in the footer of the events.
  * 23 "Event fields" describe game-related details that are determined by the mission builder.
  * The Event Wizard has therefore received a complete overhaul and now contains the detail fields on the second page.
  * Standard details for the type "Arma 3" have been inserted as an example.
* **Colours for events**.
  * Depending on the event type set, selected colours are now displayed both on the website and in Discord.
* In the event details there is now a back button to get to the calendar. _(commit:_ [_b9f7ca16_](https://github.com/Alf-Melmac/slotbotServer/commit/b9f7ca166454b2ace055e8232881a1cf0c2013f1)_)_
* The creator of a mission is now displayed in the event details.
* The description of an event now opens below the image, making longer texts easier to read.
* In the event calendar, the name of the event is now also displayed when hovering over an event. _(commit:_ [_f7ee902a_](https://github.com/Alf-Melmac/slotbotServer/commit/f7ee902ad47b12477e2b776d18f156cc4333ff09)_)_
* The reference to the "Impressum & Datenschutzerklärung" in the footer has been reduced in size. _(commit:_ [_7dd08e52_](https://github.com/Alf-Melmac/slotbotServer/commit/7dd08e5237d11b70107e86ff0d3ec5152ed00297)_)_
* Superfluous spaces before and after entries in events are now removed. `(Greetings to Teshaz)` _(commit:_ [_da3c8b43_](https://github.com/Alf-Melmac/slotbotServer/commit/da3c8b43a4d0b0dc9eddcbdb7f976df417790f73)_,_ [_79d66e43_](https://github.com/Alf-Melmac/slotbotServer/commit/79d66e43776c0bc72d16ed040951765d6b4c5450)_)_

## 🐞 Bug Fixes

* In the expected error case, a 500 status code was mistakenly sent instead of a 400. _(commit:_ [_1507870d_](https://github.com/Alf-Melmac/slotbotServer/commit/1507870d9d261ebeebc7db7b12a1695d91bd9882)_)_
* In rare cases, the slot list is deleted instead of the pin information. `(Thanks Ossi for pointing out this problem)` _(commit:_ [_def26af4_](https://github.com/Alf-Melmac/slotbotServer/commit/def26af483d329fa9941644307dd9513b27ff218)_)_
* If you navigate back to the calendar from an event using the browser's Back button, the loading circle does not disappear. `(Thanks to Nameless for finding this bug)` _(commit:_ [_4e415ccd_](https://github.com/Alf-Melmac/slotbotServer/commit/4e415ccd863b3dd5ef2f625414bc357a6d8c7deb)_)_
* During event creation, it was not possible to navigate within text fields using the arrow keys, as jumping between wizard steps was preffered. _(commit:_ [_a8f15b56_](https://github.com/Alf-Melmac/slotbotServer/commit/a8f15b56fcb509901a0bd7f0a5e4720c5054e87d)_)_
* If the external server is not available for filling the administrative server administration, an error was thrown. `(Thanks to Phil for turning off the server)` _(commit:_ [_ea1d3e56_](https://github.com/Alf-Melmac/slotbotServer/commit/ea1d3e56e9dc718ad0595cdb552b13e169f23c10)_)_
* Corrected spelling errors in bot responses and command aliases. _(commit:_ [_e1ecdef4_](https://github.com/Alf-Melmac/slotbotServer/commit/e1ecdef402179e0582ad046d7e097938a6fd751d)_)_
