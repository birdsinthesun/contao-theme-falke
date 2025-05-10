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
5. die Zeile 1 der .env in die env.local kopieren
6. zum website-verzeichnis wechseln
7. php bin/console contao:backup:restore
8. In das Contao-Backend gehen über deine-domain.de/contao mit Benutzername: Falke, Passwort: HelloContao
9. Seiten -> "Contao Theme Falke" -> Domain ändern
10. Einstellungen -> Administrator-Mail-Adresse hinzufügen
    
### Troupleshooting

Am besten noch den Contao-Manager herunterladen. Die Datei in das public-Verzeichnis kopieren, umbenennen mit .php am Ende und ausführen.
Dann die Datanbank aktualisieren.
Eine .public Datei im assets-Verzeichnis erstellen
