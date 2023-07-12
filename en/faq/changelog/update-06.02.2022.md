# Update 06.02.2022

## ⭐ New Features

* **Guilds** can now be configured centrally. _(commit:_ [9645529e](https://github.com/Alf-Melmac/slotbotServer/commit/9645529e5f4fcc277184cf0a9c4d5c7df5465d04)_)_
  * Customised styling of the website for each Guild. _(Zusätzlicher commit:_ [_aa3c88db_](https://github.com/Alf-Melmac/slotbotServer/commit/aa3c88db8790def03fa6e4c740a4c77d259e2a29)_)_
  * API tokens only authorise for one guild, not for the entire application. Excepted from this is publicly accessible information from other Guilds. _(commit:_ [_e3191a5f_](update-06.02.2022.md#erwaehnenswerte-aenderungen)_)_
  * Users can be assigned to multiple guilds to **reserve squads and slots** for guilds. _(commit:_ [_993ad4e9_](https://github.com/Alf-Melmac/slotbotServer/commit/993ad4e910ec16fd5e23f5d81b504d8758f37409)_, Event creation and editing_ [_3f1b572f_](https://github.com/Alf-Melmac/slotbotServer/commit/3f1b572f5f7b4061f20cf0152403e048dfb22492)_,_ [_daa2447e_](https://github.com/Alf-Melmac/slotbotServer/commit/daa2447e09b6dc8ef4df679c90a00477e99e9788)_,_ [_8b9bbf57_](https://github.com/Alf-Melmac/slotbotServer/commit/8b9bbf57383298964297da7fc00cd14248b6a723)_,_ [_fd1d671d_](https://github.com/Alf-Melmac/slotbotServer/commit/fd1d671d1105e5f5088d16f66caba4beea40e310)_,_ [_148bbb97_](https://github.com/Alf-Melmac/slotbotServer/commit/148bbb97b36c250675280f560794394bd7b3030c)_,_ [_8205c278_](https://github.com/Alf-Melmac/slotbotServer/commit/8205c278720965d8a3a4bbf69bbe31370d42dc7b)_,_ [_9ae69523_](https://github.com/Alf-Melmac/slotbotServer/commit/9ae69523f18e6a94577dfd910189fc361da03fbe)_, Event Duplication_ [_85857ac2_](https://github.com/Alf-Melmac/slotbotServer/commit/85857ac2f0f65df1c2a5023c7f654eb283e2e241)_, Display_ [_65de3ac6_](https://github.com/Alf-Melmac/slotbotServer/commit/65de3ac6a97b85c7c28252bec6fd8a9ee76bca4f)_,_ [_913242fb_](https://github.com/Alf-Melmac/slotbotServer/commit/913242fb1f47d5158cf811fdf5e63670da7c8cbf)_)_
    * Events that contain a reservation do not need to be shared, but are automatically added to the calendar for reserved Guilds and can be added to Discord. _(commit:_ [_45567392_](https://github.com/Alf-Melmac/slotbotServer/commit/455673925ec872b8af9a2b2ed45a87c28424b640)_)_
* Arma 3 modset autocomplete and map selection has been updated to the new [January 2022 modset from AMB](https://wiki.armamachtbock.de/de/Spieler/Mitmachen/Modset). _(commit:_ [_f039b1f4_](https://github.com/Alf-Melmac/slotbotServer/commit/f039b1f4bc118c964a15ba1b7c98db01d1556537)_,_ [_0e2320e1_](https://github.com/Alf-Melmac/slotbotServer/commit/0e2320e1935e414be6cee842b70a53e670eacd17)_)_
* Even more characters are saved in the Discord Slotlist message. _(commit:_ [_993ad4e9_](https://github.com/Alf-Melmac/slotbotServer/commit/993ad4e910ec16fd5e23f5d81b504d8758f37409)_)_
* When attempting to register for a blocked or reserved slot, the participant will now remain in their existing slot and will not be removed from the event. _(commit:_ [_347fc559_](https://github.com/Alf-Melmac/slotbotServer/commit/347fc559a54e1d61c7cd38648f69b972f950dbff)_)_
* Newly sent private messages about signing in or out of an event show the date of the event in the user's time zone and have been supplemented with the start time. _(commit:_ [_ece6be91_](https://github.com/Alf-Melmac/slotbotServer/commit/ece6be91e692369a94e8ca51bf575175c1a12137)_)_

## 🐞 Bug Fixes

* It is now ensured that the hint about a pinned message is always removed after the slot list has been issued. _(commit:_ [a72eebaf](https://github.com/Alf-Melmac/slotbotServer/commit/a72eebaf44b4a7ae153c50397212df9ade163275)_)_
* Renaming slots no longer sends DMs describing that the participant has been removed from the event. (Sorry for the confusion) _(commit:_ [_c62c4fd5_](https://github.com/Alf-Melmac/slotbotServer/commit/c62c4fd562b67418150ddd55603d04dad51a9f2c)_)_

## 🔨 Technical

* The newly created robots.txt now excludes the page from some web crawlers that should not necessarily scan the page. _(commit:_ [_d74ce495_](https://github.com/Alf-Melmac/slotbotServer/commit/d74ce495ef4faaeaec6107468fc24e292fbd5e8f)_)_
* Every incoming API request is now documented in the log. _(commit:_ [_d0d8f68a_](https://github.com/Alf-Melmac/slotbotServer/commit/d0d8f68a633936f6297b83df27e19ec58cbeb730)_)_

{% hint style="info" %}
Some of the changes listed here were already installed before 06.02. for security reasons.
{% endhint %}
