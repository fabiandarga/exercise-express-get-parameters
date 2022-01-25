# Express Bank Accounts

Wir programmierne eine Kleine Express-Bank.  

Unser Server soll vier GET Routen haben:
* `/` -> Zeigt eine Liste aller Accounts
* `/account/:name` -> Zeigt den Kontostand eines Benutzers
* `/account/:name/add/:amount` -> Fügt dem Konto Geld hinzu, oder legt ein neues an
* `/account/:name/withdraw/:amount` -> Zieht von einem Konto Geld ab

## Install
Führe bitte **npm install** aus, damit express installiert wird.

## Datenbank !?
Die Daten der Bank sollen erst einmal in einem einfachen Objekt gespeichert werden.  
z.B.: 
```
const database = {};
database['Fabian'] = 1000000;
```
## Einzahlen / neues Konto 
*/account/:name/add/:amount*
* Der Server soll prüfen, ob in der Datenbank bereits ein Eintrag für den namen existiert.
* Falls nicht muss ein nes Konto erstellt werden, also in die Datenbank ein Eintrag mit 0€ hinzugefügt werden.
* In jedem Fall soll dann die Summe *amount* auf das Konto hinzugefügt werden.
* Der Server antworted mit Code 200 Ok, falls alles geklappt hat.

## Konto anzeigen
*/account/:name*
* Der Server prüft, ob es ein Konto für den Namen gibt.
Falls nicht, antortet der Server mit dem **Code 404**.
* Gibt es diesen Account, soll der aktuelle Kontostand zurück geschickt werden.

## Alle Konten auf listen
*/*
* Der Server soll ein Array mit allen Konto-Namen zurück schicken.
* Der Kontostand soll nicht mit geschickt werden.

## Geld abheben
*/account/:name/withdraw/:amount*
* Der Server prüft, ob es ein Konto für den Namen gibt.
Falls nicht, antortet der Server mit dem **Code 404**.
* Gibt es diesen Account, soll geprüft werden, ob genug Geld vorhanden ist (Kontostand >= amount), ansonsten soll mit dem **Code 409** geantwortet werden.
* Ist genug Geld auf dem Konto, wird die menge (*amount*) vom Konto angezogen und ein **Code 200** zurück geschickt.