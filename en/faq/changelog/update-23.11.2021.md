# Update 23.11.2021

## 🗒️ Noteworthy

* The calendar export is here! You will find the URL for the import into your calendar in your [user profile](https://armamachtbock.de/profile/me) after the one-time activation.

## ⭐ New Features

* **Calendar export** in iCal format. [calendar-sync.md](../../integrations/calendar-sync.md "mention")
  * Group calendar not only on the website, but also in the private calendar.
  * URL shortcuts for manually typing the group calendar URLs.
  * Own calendar with all events in which you are slotted.
* The Arma mission upload (see [arma-3-slotlist-generation.md](../../event-creation/eventerstellung/arma-3-slotlist-generation.md "mention")) is now also possible while editing an empty event.
* The DAA standard fields now map the [new scheduling](https://wiki.deutsche-arma-allianz.de/organisation/missionen#zeitplan). _(commit:_ [_83a8f779_](https://github.com/Alf-Melmac/slotbotServer/commit/83a8f779e0205ca9bce54f55242ffbefb1d9d7ac)_)_
* Better use of Discord slotlist messages. Now not only groups but slots are separated directly and some unnecessary paragraphs and spaces are omitted. _(commit:_ [_547a0b21_](https://github.com/Alf-Melmac/slotbotServer/commit/547a0b2139aa0e169f5179ac7f402c4ccb2dd89b)_)_

## 🐞 Bug Fixes

* The blocking of occupied slots looked like it could be changed during event editing. _(commit:_ [_e4330ec2_](https://github.com/Alf-Melmac/slotbotServer/commit/e4330ec214588835027b6dc406f0a8d4c0a72432)_)_
* The favicons of the pages "Not found" (404) and "Not allowed" (403) could not be found. _(commit:_ [_61659546_](https://github.com/Alf-Melmac/slotbotServer/commit/616595460ba4b65d0c7fdd1c54142bac6519314e)_)_
* The mission.sqm upload failed if the file exceeded 1MB. This limit has been raised to 2MB.
