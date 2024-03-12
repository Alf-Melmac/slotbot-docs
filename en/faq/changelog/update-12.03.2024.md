# Update 1?.03.2024

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Slotbot-Server</strong></td><td>2.10.0 <img src="../../.gitbook/assets/Badge-New.png" alt="Neu" data-size="line"></td><td><a href="https://github.com/Alf-Melmac/slotbotServer/releases/tag/v2.10.0">https://github.com/Alf-Melmac/slotbotServer/releases/tag/v2.10.0</a></td></tr><tr><td><strong>Slotbot-Frontend</strong></td><td>1.8.0 <img src="../../.gitbook/assets/Badge-New.png" alt="Neu" data-size="line"></td><td><a href="https://github.com/Alf-Melmac/slotbot-frontend/releases/tag/v1.8.0">https://github.com/Alf-Melmac/slotbot-frontend/releases/tag/v1.8.0</a></td></tr></tbody></table>

## ⭐ New Features

* Major updates in the component library also have a big impact _(_[_#426_](https://github.com/Alf-Melmac/slotbot-frontend/pull/426)_)_
  * In my non-representative test, the TTT calendar was accelerated by 50% (500ms vs. 1 Sekunde) and the community overview by three times as much (180ms vs. 560ms). The required download size has also been almost halved.
  * All sizes are now relative to the font size set in the browser.
  * Many spacings and colours have been adjusted to improve clarity and visibility. Especially in mobile use, information is given the space it needs.
* Event types can now also be created while an event is being edited.
* By default, the username of the currently logged in user is inserted when an event is created. _(commit:_ [_c8ffc4c2_](https://github.com/Alf-Melmac/slotbot-frontend/commit/c8ffc4c2a762fcec7373b7c974b1a7e20001f12e)_)_
* Text [formatting.md](../../event-creation/formatting.md "mention") can now be escaped with backslashes as in Discord.. ([#70](https://github.com/Alf-Melmac/slotbotServer/pull/70)) by [_@TheConen_](https://github.com/TheConen), [@Alf-Melmac](https://github.com/Alf-Melmac)

## 🐞 Bug Fixes

* Newly created event types were no longer displayed after leaving the first page of the event wizard. _(commit:_ [_c61c516d_](https://github.com/Alf-Melmac/slotbot-frontend/commit/c61c516d165ad1d93440c0068dad021f8e4e8ee0)_)_
* Chromium browsers (e.g. Chrome or Edge) no longer display a small white rectangle next to the breadcrumb. _(commit:_ [_728dde89_](https://github.com/Alf-Melmac/slotbot-frontend/commit/728dde89b4829851c7d46b78142a61132ad0a757)_)_
* The yes/no values for the event details are taken from the standards and the event to be processed with the correct values. _(commit:_ [_74d24b9b_](https://github.com/Alf-Melmac/slotbot-frontend/commit/74d24b9bda64d505736c0779f961b0099ccc2d12)_)_

## 🔨 Technical

* Update from Java 17 to Java 21. _(_[_#74_](https://github.com/Alf-Melmac/slotbotServer/pull/74)_) by_ [_@TheConen_](https://github.com/TheConen)
