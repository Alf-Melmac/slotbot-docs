---
description: All update messages before May 21 that could still be found
---

# Before 05.2021

## 10.08.2020

Hello World!

## 14.08.2020

> Slot list will now be pinned

## 17.08.2020

> New features: addSlot and delSlot

## 21.08.2020

> New feature swap

## 11.09.2020

> Reserve now works more reliably.
>
> Worked through the entire bug stack, should now be resistant to everything.
>
> Preparation to enable unslot via the slot number, JavaScript is still playing tricks

## 20.09.2020

> Unslot now also works with slot numbers. I have also fixed some bugs with incorrect use of the slot, unslot and swap commands.

## 21.09.2020

> New features:
>
> * renameSlot
> * delEvent
> * For adding and renaming slots, " can now be used to enable names with spaces
> * The slot list is now, on request, more similar to the current one
>
> Big fix:
>
> * A swap request could sometimes not be executed, this has been fixed. Spam protection has also been improved in this regard

## 25.09.2020

> An event can now hold much more information. All new fields are completely optional. The event info output has been completely revised
>
> We now also benefit from increased security so that unauthorised changes can no longer be made from outside via the API

## 30.09.2020

> New features:
>
> * Revised slot list
> * blockSlot
>
> Bug fix:
>
> * delSlot no longer removes an entire squad

## 24.10.2020

> Website has made good progress today.
>
> * I have replaced the launcher entry with the login
> * Login prettified
> * The login is now actually enforced on deeper pages
> * Event calendar
> * The events are already displayed in the event calendar (click until January/December or create new ones)
> * armamachtbock.de points to the existing page, but unfortunately the certificate doesn't work yet. I'll see how I can solve this

## 25.10.2020

> Website:
>
> * Error handling for login
> * Tooltip of an event now shows its description

## 28.10.2020

> Website:
>
> * NEW: Event Wizard
> * Event hover in calendar revised
> * NEW: Click on an event in the calendar to view its details

## 30.10.2020

> Website:
>
> * After creating the event, you will be redirected to the details page
> * You can access the calendar/overview from the event details via the navigation
> * Logo size adjusted, not even 1/10 of the original size, should noticeably improve loading times
> * Home page now loads faster because the game images have been at least halved
> * Known modpacks (AMB and Joint Ops) can now be downloaded in the event details
> * People who are logged in are now assigned roles based on the Discord roles. To open the Event Wizard, you now need the Creator role (or higher)
> * Fixed display problem in the calendar if an event has no description

## 31.10.2020

> General:
>
> * Events without a slot list no longer have a reserve
>
> Website:
>
> * The appropriate Discord channel can now be opened directly from the event details
> * For Creator or higher, there is now a button in events that have not yet been assigned to a channel (this serves as preparation, the bot must first be expanded for this)
> * Authentication now runs via the Slotbot here and no longer via the OAuth test

## 04.11.2020

> Event images are now supported. These can be set both via the website and the bot and are displayed on the corresponding page. The current default is the AMB logo if no image url has been specified
>
> You can now click on the title in the Discord channel and the event will open in the browser
>
> There is now a bot command to add an event created in the wizard to a channel.

## 05.11.2020

> Website:
>
> Squad numbers are now checked for uniqueness. You will be notified in the wizard when you click on Save if there are duplicate slot numbers
>
> You can now move squads to change their position even after filling the fields
>
> Bot:
>
> Has received several version updates and is running smoothly again

## 13.11.2020

> Just the most important things, because a lot has happened:
>
> * There are no longer so many mandatory fields in the wizard
> * Events can now be edited from Creator or higher. There is a pencil icon to click on in the details
> * The Discord API was acting up, now I (hopefully) prevent problems before they occur and have increased the speed by caching
> * The event details are now formatted as in the Discord
> * And of course the funny 404 and 403 (Not Found and Permission Denied) pages :eyes: [https://discordapp.com/channels/706254758721224707/707360356887953520/776591997372465223](https://discordapp.com/channels/706254758721224707/707360356887953520/776591997372465223)
>
>
>
> I also refreshed and improved all kinds of texts, especially the bot's help, and made them ready for launch

## 23.01.2021

> Hotfix for the event date display and the new modpack.

## 22.02.2021

> I have fixed some nasty bugs in the Discord Bot. The most notable ones are the unreliable modpack linking and slipping in the reserve. Both are now working as intended again and you might even find some new commands under `!help` :wink:

## 16.03.2021

> **Hotifx time** :tools:
>
> Our bot had a problem when several new players wanted to slot into the same event at the same time. This bug has now been fixed.
