## Das Falke Theme für Contao CMS

Das Falke Theme ist ein Theme für das Contao CMS, das auf modernen Layout-Standards basiert und eine strukturierte, redaktionsfreundliche Umsetzung bietet.

Es ist dazu gedacht die Erweiterung Fly UX näher kennenzulernen.
(https://packagist.org/packages/birdsinthesun/fly_ux)

### Zugang zum Contao-Backend
Benutzer: Falke
Passwort: HelloContao

### Ganz einfach und schnell über die Konsole installieren

1. per ssh anmelden
2. zum http-Verzeichnis gehen
3. composer create-project birdsinthesun/contao-theme-falke:1.1.5 website-name
4. die Zeile 1 in der .env aktivieren und die Datenbank-Zugangsdaten eintragen
5. zum website-verzeichnis wechseln
6. php bin/console contao:backup:restore
7. In das Contao-Backend gehen über deine-domain.de/contao mit Benutzername: Falke, Passwort: HelloContao
8. Seiten -> "Contao Theme Falke" -> Domain ändern
9. Einstellungen -> Administrator-Mail-Adresse hinzufügen
    
Fertig!

Dauert nur 5 Minuten
