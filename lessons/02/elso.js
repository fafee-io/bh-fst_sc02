
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
}

console.log('primezés:');
console.log(prim(4));
console.log(prim(14));
console.log(prim(9));

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
}
console.log('szamolas: ' + szamol(2, 10));

/*
function sum(a, b) {
    return a + b;
}

let sum = function(a,b) {
    return a + b;
};
*/