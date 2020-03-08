
// üres objektum létrehozása:
let o = {};
console.log(o);

let a = 'haha';
// kulcs : érték párok, vigyázat: a kulcs itt AZONOSÍTÓ, nem kifejezés
// ennek megfelelően a kulcs mindig string lehet
let oo = {
    a: 2 * 2,
    b: 4,
    c: 222,
    ccc: 'Ez itt egy string',
};

console.log(oo);
console.log(oo.a); // hiába van a nevű változó, ez itt azonosító, 2*2 azaz 4 íródik ki
console.log(oo.haha); // undefined, ilyen kulcsal nincs érték az objektumban

let mezo = 'c';
console.log( oo[mezo] ); // ha változóban tárolódik a kulcs, akkor így kell lekérni, ekkor a mezo kifejezésként értékelődik ki
let ezEgyC = 'c';
console.log( oo[mezo + ezEgyC + 'c'] ); // bonyolult is lehet a kifejezés
// az alábbi kettő példa teljesen ekvivalens
console.log( oo['ccc'] );
console.log( oo.ccc );

// egy kulcs és értékének törlése:
delete oo.c;
console.log(oo);

console.log("======");
console.log("======");

// Primitív vs Referencia típus
// primitív: szám, string, bool, ..
// referencia: objektum, tömb

let myObj = { alma: 1 };
let f = (obj) => {
    obj.alma = 42;
    console.log(obj); // második
}
console.log(myObj); // elsőként ez érvényesül
f(myObj);
console.log(myObj); // utolsó
// lényeg: a függvénynek átadott és benne megváltoztatott objektum 'kint' is megváltozik
// mert nem másolódott le a paraméterátadás hatására, csak a 'helye' (referenciája) adódik át
// kívül a myObj azonosító és belül az obj azonosító pontosan ugyanarra az 1db memoriabeli objektumra hivatkozik

console.log("======");
console.log("======");
console.log("======");
console.log("======");

// primitiv tipusok viszont lemásolódnak:
let primitiv = 2;
let ff = (p) => {
    p = p + 2;
    console.log(p); // második kiírás
}
console.log(primitiv); // első kiírás
ff(primitiv);
console.log(primitiv); // harmadik kiírás
// typeof 2 === number
// a number primitív típus, paraméterkénti átadáskor lemásolódik teljes egészében
// a kinti primitiv azonosító és a függvénybeli p azonosító más-más memóriabeli elemre hivatkozik
// emiatt a benti módosítás csak bent látszik, mivel a másolat módosult
