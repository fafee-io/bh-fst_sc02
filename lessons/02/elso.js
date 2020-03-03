
let a = 1;
let b = 2;
let c;

const sum = (elso, masodik) => {
    //let eredmeny = elso + masodik;
    //return eredmeny;
    return elso + masodik;
};

c = sum(a, b);
console.log(c);

b = 4;
c = sum(a, b);
console.log(c);

const atlag = (a, b) => {
    //let osszeg = sum(a,b);
    return (a + b) / 2;
};
// itt ezek 1 és 4
let abatlag = atlag(a, b);
console.log(abatlag);

console.log('a: ' + a);
a++;
console.log('a: ' + a);
++a;
console.log('a: ' + a);
a = a + 1;
console.log('a: ' + a);

// azt adja vissza hogy prim-e a szám
// true: ha prim, false: ha nem prim
let prim = (n) => {
    /*for (let i = 2 ; i <= n / 2 ; ++i) {
        if ( n % i === 0 ) {
            return false;
        }
    }*/
    let i = 2;
    while ( i <= n / 2 ) {
        if ( n % i === 0 ) {
            return false;
        } else {
            ++i;
        }
    }
    return true;
};

let prim2 = (n) => {
    let valasz = true;
    let i = 2;
    while ( valasz && (i <= n / 2) ) {
        if ( n % i === 0 ) {
            valasz = false;
        }
        ++i;
    }
    return valasz;
};

console.log('primezés:');
console.log(prim(7));
console.log(prim(14));
console.log(prim(23));
console.log(prim(143));

// megszamolja hogy paraméterben kapott 2 szám között
// hány prim szám van és ezt adja vissza
let szamol = (a, b) => {
    let counter = 0;
    for (let i = a; i <= b; ++i) {
        if ( prim(i) ) {
            counter++;
        }
    }
    return counter;
};
console.log('szamolas: ' + szamol(2, 10));

/*
function sum(a, b) {
    return a + b;
}

let sum = function(a,b) {
    return a + b;
};
*/
console.log("aaa");
console.log("aaa");
console.log("aaa");

let tomb = [];
let elemekkel = [1, 3, 5, 7];
// DONT DO: let izgalmas = ['a', 1, true, 2, ''];

elemekkel[0]; // = 1
elemekkel[1]; // = 3
elemekkel[2]; // = 5
elemekkel[3]; // = 7

let tombindex = 2;
elemekkel[tombindex]; // = 5

console.log(tomb);
console.log(elemekkel);
console.log(elemekkel[0]);
console.log(elemekkel[1]);
console.log(elemekkel[2]);
console.log(elemekkel[3]);
console.log(elemekkel[tombindex]);
console.log(tomb.length);
console.log(elemekkel.length);

console.log(elemekkel[4]);
elemekkel[4] = 13; // új elemhez nem ajánlott (mert elrontod az indexet)
console.log(elemekkel[4]);
elemekkel.push(17);
console.log(elemekkel.length); // 6
console.log(elemekkel[5]);
elemekkel.push(19, 21, 33);
console.log(elemekkel.length); // 9
console.log(elemekkel[8]); // 33
elemekkel[8] = 42;
console.log(elemekkel[8]); // 42

console.log('BEJÁRÁS:');
// elemekkel tömb bejárása
for (let i = 0; i < elemekkel.length ; ++i) {
    console.log( elemekkel[i] );
}

// Maximum Keresés
// bemenet: tömb, melyben (legalább egy) pozitív számok vannak
// kimenet a legnagyobb tömbben tárolt érték
// [2] : 2
// [1,2,3] : 3
// [3, 4, 23, 12, 6] : 23
// [33, 4, 23, 12, 6] : 33
let maxKer = (t) => {
    let max = 0; // t[0];
    for (let i = 0; i < t.length ; ++i) {
        if (t[i] > max) {
            max = t[i];
        }
    }
    return max;
}
console.log('maxkeresés:')
console.log( maxKer(elemekkel) );
console.log( maxKer( [3, 4, 23, 12, 6] ) );
console.log( maxKer( [33, 4, 23, 12, 6] ) );
console.log( maxKer( [1, 2, 10, 10, 10, 10, 2, 4, 8] ) );
