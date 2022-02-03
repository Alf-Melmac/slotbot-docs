# Teilnehmerverwaltung

Es existiert bereits ein Event, die ersten Teilnehmer tragen sich ein...

## Eintragen

#### Person auf dem Discord

Über den Befehl [forceslot.md](bot-befehle/forceslot.md "mention") kann eine Person mit der Rolle `Slotbot_Event_Manage` einen Discord-Nutzer eintragen. Der Befehl akzeptiert entweder die Person selbst (`@Name`) oder die Benutzer-ID ([Discord Support Artikel](https://support.discord.com/hc/de/articles/206346498-Wie-finde-ich-meine-Server-ID-), um die Benutzer-ID zu erhalten).

Oder noch besser, der Teilnehmer trägt sich einfach selbst ein [slot.md](bot-befehle/slot.md "mention")!

{% hint style="info" %}
Für das Umtragen einer Person auf einen anderen Slot muss nur die neue Slotnummer angegeben werden. Der alte Slot wird automatisch freigegeben.
{% endhint %}

#### Andere Person/Platzhalter/Slot sperren

Über den Befehl [blockslot.md](bot-befehle/blockslot.md "mention") kann an einen Slot ein beliebiger Freitext eingetragen werden. Dies verhindert, dass sich ein Interessent auf diesen Platz eintragen kann.

## Austragen

#### Person austragen, Platzhalter entfernen, Slot entsperren

Die Belegung eines Platzes in einem Event kann über den Befehl [forceunslot.md](bot-befehle/forceunslot.md "mention") aufgehoben werden. Dabei spielt es keine Rolle, ob die Belegung eine Person oder nur ein Platzhalter-Text ist.

Jeder Teilnehmer kann sich selbst jederzeit über den [unslot.md](bot-befehle/unslot.md "mention") Befehlt austragen.
