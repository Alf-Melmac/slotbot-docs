# Update 12.03.2024

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Slotbot-Server</strong></td><td>2.10.0 <img src="../../.gitbook/assets/Badge-New.png" alt="Neu" data-size="line"></td><td><a href="https://github.com/Alf-Melmac/slotbotServer/releases/tag/v2.10.0">https://github.com/Alf-Melmac/slotbotServer/releases/tag/v2.10.0</a></td></tr><tr><td><strong>Slotbot-Frontend</strong></td><td>1.8.0 <img src="../../.gitbook/assets/Badge-New.png" alt="Neu" data-size="line"></td><td><a href="https://github.com/Alf-Melmac/slotbot-frontend/releases/tag/v1.8.0">https://github.com/Alf-Melmac/slotbot-frontend/releases/tag/v1.8.0</a></td></tr></tbody></table>

## ⭐ Neue Features

* Große Updates in der Komponentenbibliothek bewirken auch viel _(_[_#426_](https://github.com/Alf-Melmac/slotbot-frontend/pull/426)_)_
  * In meinem nicht repräsentativen Test wurde der TTT-Kalender um 50% beschleunigt (500ms vs. 1 Sekunde) und die Community-Übersicht sogar um das Dreifache (180ms vs. 560ms). Auch die benötigte Download-Größe wurde fast halbiert.
  * Alle Größen sind jetzt relativ zu der Schriftgröße, die im Browser eingestellt wurde.
  * Viele Abstände und Farben wurden angepasst, um die Übersichtlichkeit und Sichtbarkeit zu verbessern. Gerade in der mobilen Nutzung bekommen Informationen den Platz, den sie brauchen.
* Event-Typen können nun auch während der Bearbeitung eines Events erstellt werden.
* Standardmäßig wird für den Ersteller eines Events der Benutzername des aktuell angemeldeten Benutzers eingetragen. _(commit:_ [_c8ffc4c2_](https://github.com/Alf-Melmac/slotbot-frontend/commit/c8ffc4c2a762fcec7373b7c974b1a7e20001f12e)_)_
* Text-[formatierung.md](../../eventerstellung/formatierung.md "mention")en können nun wie in Discord mit Backslashes escaped werden. _(_[_#70_](https://github.com/Alf-Melmac/slotbotServer/pull/70)_) von_ [_@TheConen_](https://github.com/TheConen)_,_ [_@Alf-Melmac_](https://github.com/Alf-Melmac)

## 🐞 Fehlerbehebungen

* Neu angelegte Event-Typen wurden nach dem Verlassen der ersten Seite des Event-Wizards nicht mehr angezeigt. _(commit:_ [_c61c516d_](https://github.com/Alf-Melmac/slotbot-frontend/commit/c61c516d165ad1d93440c0068dad021f8e4e8ee0)_)_
* Chromium-Browser (z.B. Chrome oder Edge) zeigen neben der Breadcrumb kein kleines weißes Rechteck mehr an. _(commit:_ [_728dde89_](https://github.com/Alf-Melmac/slotbot-frontend/commit/728dde89b4829851c7d46b78142a61132ad0a757)_)_
* Die Ja/Nein-Werte für die Event-Details werden aus den Standards und dem zu bearbeitenden Event mit den korrekten Werten übernommen. _(commit:_ [_74d24b9b_](https://github.com/Alf-Melmac/slotbot-frontend/commit/74d24b9bda64d505736c0779f961b0099ccc2d12)_)_

## 🔨 Technisches

* Aktualisierung von Java 17 auf Java 21. _(_[_#74_](https://github.com/Alf-Melmac/slotbotServer/pull/74)_) von_ [_@TheConen_](https://github.com/TheConen)
