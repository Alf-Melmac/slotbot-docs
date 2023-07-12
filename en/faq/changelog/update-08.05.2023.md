# Update 08.05.2023

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th data-hidden></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Slotbot-Server</strong></td><td>2.3.0 <img src="../../.gitbook/assets/Badge-New.png" alt="Neu" data-size="line"></td><td></td><td><a href="https://github.com/Alf-Melmac/slotbotServer/releases/tag/v2.3.0">https://github.com/Alf-Melmac/slotbotServer/releases/tag/v2.3.0</a></td></tr><tr><td><strong>Slotbot-Frontend</strong></td><td>1.3.0 <img src="../../.gitbook/assets/Badge-New.png" alt="Neu" data-size="line"></td><td></td><td><a href="https://github.com/Alf-Melmac/slotbot-frontend/releases/tag/v1.3.0">https://github.com/Alf-Melmac/slotbot-frontend/releases/tag/v1.3.0</a></td></tr></tbody></table>

## ⭐ New Features

* All user profile pages can now be accessed much faster. _(commit:_ [_7ae0e12d_](https://github.com/Alf-Melmac/slotbotServer/commit/7ae0e12dab4eb755493b68839d255b113f1fd5d4)_)_
* If a Discord message of the event output is deleted, the event link is removed and a warning message is displayed that no further updates will be displayed. The event can then be added again in the same or other channels. _(commit:_ [_9abffefd_](https://github.com/Alf-Melmac/slotbotServer/commit/9abffefde4628c9e739466b15f6b46f44b41011b)_)_
* In the event details on the website
  * the own slot is highlighted in colour. _(commit:_ [_0b2f093b_](https://github.com/Alf-Melmac/slotbot-frontend/commit/0b2f093bd030f4c4184eede7b698b980fa1a80b2)_,_ [_de5d4033_](https://github.com/Alf-Melmac/slotbotServer/commit/de5d4033c99b39884155a2f38913c783094e1562)_)_
  * you can sign up for available slots in future events. _(commit:_ [_40340230_](https://github.com/Alf-Melmac/slotbot-frontend/commit/4034023028616658bcee71b5039afa985ad36579)_,_ [_c08087ce_](https://github.com/Alf-Melmac/slotbot-frontend/commit/c08087ce158d75157b4a5cc8a172703eaf73c420)_,_ [_98d01151_](https://github.com/Alf-Melmac/slotbotServer/commit/98d01151327df22d4ad6488fde91ea9523270876)_,_ [_a461fbfc_](https://github.com/Alf-Melmac/slotbotServer/commit/a461fbfcebcb6ad06dedd8c3530120ca5fd94204)_)_
  * you can unslot. _(commit:_ [_c389e010_](https://github.com/Alf-Melmac/slotbot-frontend/commit/c389e0102cb58da1eb2fde020ba66b3555482c7e)_,_ [_2f3a578f_](https://github.com/Alf-Melmac/slotbotServer/commit/2f3a578f9350ee43b8c299d0108986494e5c019d)_)_
  * the reservation displays redirect to the group overview pages when clicked. _(commit:_ [_e948354f_](https://github.com/Alf-Melmac/slotbot-frontend/commit/e948354ffe440feb49d1054e099a6dd12c88310f)_)_
* When copying an event, a loading animation is displayed as long as the information to be copied is still being loaded. _(commit:_ [_ef702fb0_](https://github.com/Alf-Melmac/slotbot-frontend/commit/ef702fb03004417bd27b898804512ded900adfb3)_,_ [_877df68a_](https://github.com/Alf-Melmac/slotbot-frontend/commit/877df68a6661825c0712e516cf0495123c91a6d5)_)_

## 🐞 Bug Fixes

* The generation of error messages could fail under certain circumstances. _(commit:_ [_ddbea280_](https://github.com/Alf-Melmac/slotbotServer/commit/ddbea280550863883ed3cc82f6e8656c1409e8be)_)_
* The [archiv-neu-aufbauen.md](../../integrations/discord/bot-befehle/archiv-neu-aufbauen.md "mention") command only displays the events, or those with participation, of the own guild. _(commit:_ [_28f2f554_](https://github.com/Alf-Melmac/slotbotServer/commit/28f2f5548ecf5bb09f5852fae3da081343d459c8)_)_
* When copying an event, the newly entered information is no longer overwritten when the browser window is refocused. _(commit:_ [_877df68a_](https://github.com/Alf-Melmac/slotbot-frontend/commit/877df68a6661825c0712e516cf0495123c91a6d5)_)_

## 🔨 Technical

* If an event channel is deleted without archiving, the link is automatically removed. Afterwards, this event can be assigned to a new channel. _(commit:_ [_f25b1417_](https://github.com/Alf-Melmac/slotbotServer/commit/f25b14174e68f578104132520646bd55a06d9e5d)_)_
