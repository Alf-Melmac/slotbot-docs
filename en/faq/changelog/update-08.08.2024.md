# Update 08.08.2024

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Slotbot-Server</strong></td><td>2.13.0 <img src="../../.gitbook/assets/Badge-New.png" alt="Neu" data-size="line"></td><td><a href="https://github.com/Alf-Melmac/slotbotServer/releases/tag/v2.13.0">https://github.com/Alf-Melmac/slotbotServer/releases/tag/v2.13.0</a></td></tr><tr><td><strong>Slotbot-Frontend</strong></td><td>1.11.0 <img src="../../.gitbook/assets/Badge-New.png" alt="Neu" data-size="line"></td><td><a href="https://github.com/Alf-Melmac/slotbot-frontend/releases/tag/v1.11.0">https://github.com/Alf-Melmac/slotbot-frontend/releases/tag/v1.11.0</a></td></tr></tbody></table>

## ⭐ New Features

* The entire application now handles long event names better. _(commit:_ [_35908d13_](https://github.com/Alf-Melmac/slotbot-frontend/commit/35908d134a11f0725e7f50b86d4dbc26fd74b2f7)_)_
* Event templates are now available to everyone without having to contact Alf. Community administrators can create these templates in the Community Administration to help event authors create events by type. _(commit:_ [_e9e4dc5b_](https://github.com/Alf-Melmac/slotbot-frontend/commit/e9e4dc5be735bafc6cb71c2c74700a4211c0ae74)_,_ [_dcbab0cd_](https://github.com/Alf-Melmac/slotbotServer/commit/dcbab0cd364f10e345d5424c0fc49e45dfe94bf0)_)_
* Event descriptions can now contain numbered and unnumbered lists. _(commit:_ [_c7d0ea29_](https://github.com/Alf-Melmac/slotbot-frontend/commit/c7d0ea296416cba33e9daddf84f320a7b88e2830)_,_ [_01e466c0_](https://github.com/Alf-Melmac/slotbotServer/commit/01e466c021ed9364c0ad9356e0036b78b6302f52)_)_
* Event descriptions can now contain small subtexts. _(commit:_ [_fbc8e5ed_](https://github.com/Alf-Melmac/slotbot-frontend/commit/fbc8e5ed2f638397e2daa6d9356f0ce05fa53450)_,_ [_85d57d6a_](https://github.com/Alf-Melmac/slotbotServer/commit/85d57d6a4fe7823d0ed5d1cdf2489c127f4afadd)_)_

## 🐞 Bug Fixes

* \#s at the beginning of an event description will only be escaped with a backslash in the Discord output if they are followed by a space. Another few precious characters saved. _(commit:_ [_c7d0ea29_](https://github.com/Alf-Melmac/slotbot-frontend/commit/c7d0ea296416cba33e9daddf84f320a7b88e2830)_,_ [_01e466c0_](https://github.com/Alf-Melmac/slotbotServer/commit/01e466c021ed9364c0ad9356e0036b78b6302f52)_)_

## 🔨 Technical

* In this release, the duration of a valid login is extended as a test and therefor new session security mechanisms are introduced.
