# 2. óra

### Synopsis

- A program futásának, vezérlés haladásának megértése
- Változók, függvényhívások
- JavaScript objektumok
- Csak JS fájl, no HTML/CSS

## Változók, literálok, memória

- Mi az a memória, hogyan kell ezt elképzelni
- Mit jelent azt hogy létrejön egy változó (azonosítók mik lehetnek)
- Mi az a literál? (ismétlés)
- (var) let vs const
- function vs () => {}, formális paraméter lista
- Értékadás példák mindenre is:

```
let str = 'ez egy string';
let num = 1337;
let arr = [12, 'a', 42, 'bb'];
let obj = { a: 'a mezo', b: 'b mezo' };
let bool = true;
let func = (param1, param2) => {
    console.log('kiirom a paramot: ' + param1);
    console.log('aztan a masodikat is: ' + param2);
};
// próbáljuk ki a const által generált hibát:
const immutable = 23;
immutable = 56;
```

## Hogy fut a program

- Imperatív programozás említve volt, mi az a vezérlés, mi az hogy "fut", hol tart éppen?
- Kifejezés vs Utasítás
- Függvényhívás, aktuális paraméter lista
- Példa debuggolás, a lényeg a program futásába betekintés, nem a debugging megtanulása
- Szintaktikai hibák jelentése (rövid kitekintés az értelmezők / fordítók működésébe, kiértékelési sorrend)

## Operátorok

- Ismétlő példák, alapvető kis számoló algoritmusok
- Logikai kifejezések, lusta kiértékelés

## JSON

- Mi az a JSON, mi az object JSben
- . vs []
- Utólagos definició, .valami undefined

## Feladatok: 

- Írjunk egy függvényt mely kiszámolja két szám átlagát
- Írjunk egy függvényt mely egy számról eldönti hogy prím vagy nem
- Hozzunk létre objektumokat, tömböket
- Írjunk egy függvényt, mely a paraméterben kapott, téglalap objektumokból álló tömbben megszámolja hogy hánynak nagyobb a területe 10-nél