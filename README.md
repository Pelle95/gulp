# DT173G - Moment 2

Syftet med att automatisera kopiering av filer när en förändring sker är för att underlätta för utvecklaren. Det blir väldigt smidigt att skapa gå från utveckling till något som är redo att publiceras.

De paket jag har använt mig utav är:
* Gulp - själva systemet som vi använder för automatisering.
* Gulp-concat - paket som tillåter en att slå samman flera filer till en fil.
* Gulp-terser - paket som minifierar JavaScript-filer, och därmed minskar filstorleken.
* Gulp-clean-css - paket som minifierar CSS-filer, och därmed minskar filstorleken.
* Browser-Sync - paket som gör det möjligt att starta en server och känna av förändringar i kod, och därmed kan uppdatera webbläsaren direkt, så du kan se dina förändringar.

Systemet jag skapat är baserat på fyra sökvägar inom källkodskatalogen, en för HTML-filer, en för CSS-filer, en för JS-filer och en för bilder. Det finns watchers som bevakar dessa, och sker en förändring i någon av dom så kopieras de över till en publik katalog, som i detta fall kallas "pub".

För att starta upp systemet måste du ladda ned och installera de paket som krävs, och sedan är det bara via kommandotolken att ställa sig i rotkatalogen och använda kommandot "gulp".

/_Pelle_