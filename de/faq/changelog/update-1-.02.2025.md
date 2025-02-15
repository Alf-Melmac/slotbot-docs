# Update 1?.02.2025

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Slotbot-Server</strong></td><td>2.16.0 <img src="../../.gitbook/assets/Badge-New.png" alt="Neu" data-size="line"></td><td><a href="https://github.com/Alf-Melmac/slotbotServer/releases/tag/v2.16.0">https://github.com/Alf-Melmac/slotbotServer/releases/tag/v2.16.0</a></td></tr><tr><td><strong>Slotbot-Frontend</strong></td><td>1.15.0 <img src="../../.gitbook/assets/Badge-New.png" alt="Neu" data-size="line"></td><td><a href="https://github.com/Alf-Melmac/slotbot-frontend/releases/tag/v1.15.0">https://github.com/Alf-Melmac/slotbot-frontend/releases/tag/v1.15.0</a></td></tr></tbody></table>

## ⭐ Neue Features

* In den Event-Details werdem dem Nutzenden Details dazu angezeigt, warum eine Anmeldung für einen Slot nicht möglich ist. Gründe dafür können fehlende Community-Mitgliedschaft für reservierte Plätze, Ausschluss aus einer Community oder fehlende Voraussetzungen durch die Einstellungen in der Feature-Vorschau sein. (commit: [5ea09384](https://github.com/Alf-Melmac/slotbot-frontend/commit/5ea0938463838d514e23a6d3c025fa75a479c0ba), [#118](https://github.com/Alf-Melmac/slotbotServer/pull/118))
* Happy New Year! 🎉 (commit: [59951b1b](https://github.com/Alf-Melmac/slotbot-frontend/commit/59951b1bac31f572f6ebfc8cb08e2855dce1ee00))
* Eigenes Styling für GTO. (commit: [180a382d](https://github.com/Alf-Melmac/slotbot-frontend/commit/180a382d4075efe7dc78ef2dc6fd102b6ea1ade5))
* Bei Reservierungen für Gruppen wird nun immer der Name in einem Tooltip angezeigt, auch wenn die Community ein eigenes Logo hat. (commit: [a6652996](https://github.com/Alf-Melmac/slotbot-frontend/commit/a6652996e220247dae7c628b4c8e14b224256fbd))
* Durch den Umzug der Community-Verwaltung auf eine eigene Seite ([update-09.12.2024.md](update-09.12.2024.md "mention")) kann die Mitgliederübersicht mehr vertikalen Platz einnehmen. (commit: [912d38ac](https://github.com/Alf-Melmac/slotbot-frontend/commit/912d38ac86b1b6a995253b290dc7d2a732f4f904))

## 🐞 Fehlerbehebungen

* Reservisten rücken nicht mehr auf Slots vor, die für sie nicht verfügbar sind. Auch der /random\_slot Befehl wählt nur noch verfügbare Slots aus. (commit: [50fec8c6](https://github.com/Alf-Melmac/slotbotServer/commit/50fec8c692de827391a955f512db6f74e67e6b3e))
* Wenn ein Nutzender von einer Community gesperrt wurde, konnte er sich in keiner anderen Community mehr slotten. (commit: [edd0e7d1](https://github.com/Alf-Melmac/slotbotServer/commit/edd0e7d1a7ddbb869ff63bd2a93c0e4646037385))

## 🔮 Feature-Vorschau

* Der Versuch mit erweiterten Informationen zu Voraussetzungen (Detailed requirement list) wurde abgebrochen. Die zusätzlichen Informationen bringen keinen sinnvollen Mehrwert und überladen die Einstellungen der verfügbaren Voraussetzungen für Event-Details. _(commit:_ [_8aa54296_](https://github.com/Alf-Melmac/slotbot-frontend/commit/8aa54296391763434d024383a61ff09374f6d8da)_,_ [15418573](https://github.com/Alf-Melmac/slotbotServer/commit/154185735cf8382992e9d71e374f28412ec8b4f8)_)_
* Voraussetzungen für das gesamte Event, einzelne Squads und Slots. Die Voraussetzungen für einen Slot werden über die Hierarchie additiv aufgebaut. Für die Teilnahme müssen also alle Bedingungen des Slots + Squads + Events erfüllt sein. (commit: [d0c255dd](https://github.com/Alf-Melmac/slotbot-frontend/commit/d0c255dd5f56e81d2de93c2a1a49a806d268c26a), [705bee40](https://github.com/Alf-Melmac/slotbot-frontend/commit/705bee402ef4fbae1116107035db68c47c6f5ca8), [6853e191](https://github.com/Alf-Melmac/slotbotServer/commit/6853e191249d88a85ca8d829552bcff054a30f3d), [403e79c0](https://github.com/Alf-Melmac/slotbotServer/commit/403e79c085375dbee78ef182c7876641fb295d7b))
* Anzeige der Voraussetzung am Event, Squad und Slot. (commit: [a6652996](https://github.com/Alf-Melmac/slotbot-frontend/commit/a6652996e220247dae7c628b4c8e14b224256fbd), [60bf9f83](https://github.com/Alf-Melmac/slotbotServer/commit/60bf9f83d172130f89b67d3c63dc13dbf948286e))
* Teilnehmende können Voraussetzungen, die sie noch nicht erfüllen und für die eine Selbstzuordnung erlaubt ist, über die Event-Details als für sich erfüllt markieren. Danach werden sie auch bei anderen Events nicht mehr darauf hingewiesen, dass sie die Voraussetzung nicht erfüllen. (commit: [9f483ac0](https://github.com/Alf-Melmac/slotbot-frontend/commit/9f483ac0232d4b4dc4c184ee7764428a0c77ec9c), [497f106a](https://github.com/Alf-Melmac/slotbotServer/commit/497f106affabaaa1ad437a5ee458aaa9ff65fda6))
* Community-Administratoren wurde die Möglichkeit gegeben, in der Mitgliederübersicht ihrer Community die Erfüllung der Voraussetzungen ohne erlaubte Selbstzuordnung für die Mitglieder zu verwalten. (commit: [dd5f1a4c](https://github.com/Alf-Melmac/slotbot-frontend/commit/dd5f1a4c6068d521ee41e467ecd20dee76a129c5), [baecd936](https://github.com/Alf-Melmac/slotbotServer/commit/baecd9366844cb58706c44c851e144c3954e79be))
* In der Verwaltung der verfügbaren Voraussetzungen können nun neben den Namen und der Berechtigung zur Selbstzuordnung auch die Verpflichtung und die Bilder für die einzelnen Voraussetzungen konfiguriert werden. (commit: [f438dd6a](https://github.com/Alf-Melmac/slotbot-frontend/commit/f438dd6aa3e4f68fde23f871b919d32f6ff3253e))
* Erklärung zu abgelehnten Slot-Versuchen. (commit: [50fec8c6](https://github.com/Alf-Melmac/slotbotServer/commit/50fec8c692de827391a955f512db6f74e67e6b3e))

## 🔨 Technisches

* Performanceverbesserungen in der Mitgliederübersicht.
  * Wo früher für jedes Mitglied ein eigener Ban-Dialog erzeugt wurde, gibt es jetzt nur noch einen, der auch für die Verwaltung der Voraussetzungen wiederverwendet wird. (commit: [dd5f1a4c](https://github.com/Alf-Melmac/slotbot-frontend/commit/dd5f1a4c6068d521ee41e467ecd20dee76a129c5))
  * Alle administrativen Aktionen für Mitglieder werden nur noch von Administratoren heruntergeladen, was den ersten Zugriff auf die Seite für alle anderen optimiert. (commit: [6a72c48f](https://github.com/Alf-Melmac/slotbot-frontend/commit/6a72c48f4e29d7f80fa450a83870bc828728ed67))
