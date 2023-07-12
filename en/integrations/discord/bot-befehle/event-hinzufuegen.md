---
description: Select an event and assign it to the current channel.
---

# Add event to channel

![](../../../.gitbook/assets/Slotbot-AddEventToChannel.gif)

## Command

/add\_event\_to\_channel

\-> Event selection

## Process

Adds a previously created event to the current channel and outputs it.

## Answer

{% hint style="success" %}
Event is output.
{% endhint %}

{% hint style="danger" %}
* An event is already assigned to this channel.
* No unassigned event found in the future.
* Someone beat you to it. The event is already assigned to {}.
{% endhint %}
