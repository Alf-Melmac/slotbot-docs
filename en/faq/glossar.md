---
description: Find answers to some of the most frequently asked questions
---

# FAQs

## What is a Guild?

A Discord server. Usually synonymous with a community or clan.

An event has exactly one owner guild. A user can be assigned to several guilds.

## What is a Squad?

A group in an event. Contains one or more slots.

## What is a Slot?

A single slot in an event. A single participant registers for a slot, which indicates their interest or agreement to participate.



## Why does the Discord Bot need administrator permissions?

In order for the Discord Bot to perform its various functions as easily and smoothly as possible, it requires administrator privileges. The following actions are performed with them:

* Read and write permissions in all channels to [output events](../integrations/discord/bot-befehle/event-hinzufuegen.md) (including private channels), send other messages (e.g. [event-ping.md](../integrations/discord/bot-befehle/event-ping.md "mention")) and archive events.
* Delete messages that interact with the old [#text-commands](../integrations/discord/bot-befehle/#text-commands "mention"). This keeps the usage invisible, similar to the [#slash-command](../integrations/discord/bot-befehle/#slash-command "mention") interactions.
* Deleted messages and channels are monitored for automatic unlinking of events and archive channels.
* Create roles for [permission control](../integrations/discord/recommended-configuration.md).
* There is **no logging of messages** that are not valid text commands.
* **No settings are changed** or read from the server itself. Only the Slotbot\_ roles will be created.

#### How can I be sure that no further actions will be taken?

All of the bot's source code is open source. This allows you to see which listeners are active and what interactions are taking place. Particularly relevant are the classes below [`de.webalf.slotbot.service.bot`](https://github.com/Alf-Melmac/slotbotServer/tree/master/src/main/java/de/webalf/slotbot/service/bot).
