# Participant management

There is already an event, the first participants are registering...

## Register

#### Person on Discord

The command [slot-erzwingen.md](bot-befehle/slot-erzwingen.md "mention") allows a person with the role `Slotbot_Event_Manage` to enter a Discord user. The command accepts either the person itself (`@Name`) or the user id ([Discord Support article](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) to get the user id).

Or even better, the participant simply registers him/herself [slot.md](bot-befehle/slot.md "mention")!

{% hint style="info" %}
To move a person to a different slot, simply enter the new slot number. The old slot will automatically be released.
{% endhint %}

#### Other Persons/Placeholders/Block Slots

Using the command [slot-blockieren.md](bot-befehle/slot-blockieren.md "mention"), any free text can be antered at a slot. This will prevent anyone from registering for that slot.

## Deregister

#### Sign out person, remove placeholder, unlock slot

The assignment of a slot in an event can be cancelled using the command [unslot-erzwingen.md](bot-befehle/unslot-erzwingen.md "mention"). It does not matter whether the assignment is to a person or if it is just a placeholder text (blocked slot).

Each participant can unslot himself/herself at any time using the [unslot.md](bot-befehle/unslot.md "mention") command.
