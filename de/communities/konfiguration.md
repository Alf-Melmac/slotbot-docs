---
icon: gear
---

# Konfiguration

{% hint style="info" %}
B**erechtigungen**

Um eine Community zu konfigurieren, ist die Rolle `Admin` erforderlich.
{% endhint %}

## Discord Integration

### Sprache

Nicht alle Integrationen erlauben die Anzeige in der vom Benutzer bevorzugten Sprache. Für statische Texte, wie z.B. Event-Details in Discord, kann eine Sprache konfiguriert werden.

<figure><img src="../.gitbook/assets/Slotbot-Guild-Language.png" alt=""><figcaption></figcaption></figure>



Die folgenden Einstellungen können ausschließlich nach Beitritt des Bots auf dem Server vorgenommen werden.

<figure><img src="../.gitbook/assets/Slotbot-Guild-MissingInvite.png" alt=""><figcaption></figcaption></figure>

### Archivierungskanal

Nach Abschluss von Events besteht die Möglichkeit, diese in einem Archivkanal zu sammeln.

{% content-ref url="../integrationen/discord/archiv.md" %}
[archiv.md](../integrationen/discord/archiv.md)
{% endcontent-ref %}

### Synchronisierung der Mitgliederrollen

Die drei Berechtigungsrollen können mit Discord-Rollen verknüpft werden. Wird anschließend einer Person eine neue Rolle zugeordnet, wird diese automatisch mit der entsprechenden Discord-Rolle versehen. Dies funktioniert auch umgekehrt: Wird die verknüpfte Discord-Rolle vergeben, wird die Rolle automatisch angepasst.

<figure><img src="../.gitbook/assets/Slotbot-Guild-RoleSync.png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
Es können nur Rollen unterhalb der Slotbot-Integrationsrolle ausgewählt werden. Die Reihenfolge der Rollen kann in Discord in den Servereinstellungen unter Rollen angepasst werden.
{% endhint %}

{% hint style="success" %}
Tipp: Wenn ihr Discord-Rollen konfiguriert, konfiguriert diese auch für die [Slash-Befehle](../integrationen/discord/empfohlene-konfiguration.md).
{% endhint %}

## Event-Typen

Hier werden alle verfügbaren Event-Typen angezeigt. Die als "Global" markierten Typen sind vorgegebene Standards. Alle anderen sind privat für deine Community.

<figure><img src="../.gitbook/assets/Slotbot-Guild-EventTypes.png" alt=""><figcaption></figcaption></figure>

Für alle Typen können Vorlagen konfiguriert werden. Lerne hier mehr darüber:

{% content-ref url="event-standards.md" %}
[event-standards.md](event-standards.md)
{% endcontent-ref %}
