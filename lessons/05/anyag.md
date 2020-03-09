# 5. óra

## Gyakorlás

- Való életben is létező/használható/hasznos tisztán frontend logika alapján működő kis 'kalkulátor' alkalmazás
- (Nem számológép!)
- Szükségesek:
    - JS-ből:
        - DOM eventek (click helyett mások is)
        - Függvényhívás / return
        - Objektumokba összefogás
        - Kevés matek, számolások
        - Konvertálás, értelmezhető adat eldöntések
    - HTML-ből:
        - Talán izgalmasabb egymásba ágyazott elemek
        - Néhány form elem + validációs üzenetek
    - CSS-ből:
        - Talán izgalmasabb pozicionálások, 'rajzolás' HTML elemekkel
        - Lokális layout, kis területen több input / gomb

### Megadott értékek:

- Abroncs: `szélesség / magasság R átmérő`
- Felni: `átmérő / szélesség ET offset`

### Számolandó értékek:

- Kerék mérete (átmérő)
- Kerék kerülete
- Poke (Mennyivel kerül kijjebb/beljebb abroncs/felni)
- Backspace (felfüggesztést a felni/abroncs belső pereméig)
- Speedo error (Régi kerület vs Új kerület)

### Konkrét lépések

- Jelenlegi / Tervezett adatok megadási helyének kialakítása + kiolvasás
- Célterület át/kialakítása
- Számolgatások lekódolása
- Eventek és handlerek összekötése
- Számolt értékek renderelése
- Számolt értékek és CSS pozicionálás összeeresztése
