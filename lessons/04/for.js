// tomb / objektum bejárás 'in'es forciklussal:

let tomb = [1,2,3,4,5,6,7,8,9,10];
let obj = {
    alma: 'finom',
    korte: 'megfinomabb',
    datolya: 'nemfinom',
    mango: 'draga',
};

for (let i in tomb) {
    console.log(i); // indexek: 0, 1, 2, ...
    console.log(tomb[i]) // elemek: 1, 2, 3, 4, ...
}

for (let k in obj) {
    console.log(k); // kulcsok: alma, korte, datolya, ...
    console.log(obj[k]) // értékek: finom, megfinomabb, ...
}

// függvény azonosítás, paraméterek:
// függvénynek bármennyi (0, 1, 2, ....) paramétere lehet
// függvénynek 1 visszatérési értéke lehet
let f = (a, b, c = 2, d) => {
    console.log(a.str);
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    // nincs return: 'nincs' visszatérési érték, vagyis van: undefined
    // sima 'return;' - mint az előbb
    // 'return valami;' - változó / literál érték visszaadása
    // a return-ölt érték (vagy az undefined) lesz a függvényhívás mint kifejezés értéke
}
// ezek a függvényhívások mind a fenti f függvényt hívják meg
// ha egy paraméternek végül nem adunk át értéket, az "undefined" lesz
// default paraméter (c = 2 a példában) undefined helyett kapja meg a 2-t,
// ha átadjuk a 3-t, már az érvényesül
f();
f(1);
f(1, 2);
f(1, 2, 3);
f(1, 2, 3, 4);
f(1, 2, 3, 4, 5);
// több paraméter esetén az extra paraméter (példában az 5) elveszik az éterben, de hibát nem okoz
