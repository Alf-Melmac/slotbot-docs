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

## What permissions does the Discord Bot require?

In order to make the various functions available as easily and smoothly as possible, the Discord Bot requires certain rights. The following actions are carried out with them. "Channels" include the standard text channels as well as threads and forum posts.

* **View channel** and **Send messages (in Threads)** to [output](../integrations/discord/bot-befehle/event-hinzufuegen.md) and update events and send [messages to event participants](../integrations/discord/bot-befehle/event-ping.md). To send [archive messages](../integrations/discord/archive.md), the bot must also have access to the archive channel. Selection options can also be offered when configuring the archive channel if the permission to view channels is given.
* **Embed links** to output the event details and the event separator.
* (Optional) **Manage messages** to pin the slot list in the event channel.
* (Optional) **Read message history** to remove the information for pinning the event details between or below the slot list.
  * With this permission, the bot cannot read the content of other users' messages. It only receives information about the meta information of the messages. (More on this in the [Discord FAQ](https://support-dev.discord.com/hc/en-us/articles/4404772028055))

This additional information is forwarded to the bot by Discord (Intents [https://discord.com/developers/docs/topics/gateway#list-of-intents](https://discord.com/developers/docs/topics/gateway#list-of-intents)):

* Interactions with the bot via slash commands.
* Information about the members of a Discord server to automatically assign or revoke permissions when they change roles or leave a community. (`GUILD_MEMBERS`)
* Deleted channels and Deleted messages to automatically delete event and archive channel links. (`GUILD_MESSAGES`)

#### How can I be sure that no further actions will be taken?

All of the bot's source code is open source. This allows you to see which listeners are active and what interactions are taking place. Particularly relevant are the classes below [`de.webalf.slotbot.service.bot`](https://github.com/Alf-Melmac/slotbotServer/tree/master/src/main/java/de/webalf/slotbot/service/bot).
