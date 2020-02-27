
const HAROMSZOG = 'triangle';
const TEGLALAP = 'rectangle'

class Alakzat {
    constructor(type, a, b) {
        this.type = type;
        this.base = a;
        this.height = b;
    }

    calcArea() {
        let baseT = this.base * this.height;
        if (this.type === HAROMSZOG) {
            return baseT / 2;
        } else {
            return baseT;
        }
        // return this.type === HAROMSZOG ? baseT / 2 : baseT;
    }

    logMe() {
        console.log("Én egy " + this.type + " vagyok, területem: " + this.calcArea());
    }
}

let valogat = (tomb) => {
    let ans = new Array();
    let reference = kiemelt.calcArea();
    for (let i = 0; i < tomb.length ; ++i) {
        let elem = tomb[i];
        if (elem.calcArea() < reference) {
            ans.push(elem);
        }
    }
    return ans;
}

let myArray = [];
let kiemelt = new Alakzat(HAROMSZOG, 10, 5);

myArray.push(kiemelt);
myArray.push(new Alakzat(TEGLALAP, 5, 4));
myArray.push(new Alakzat(TEGLALAP, 8, 12));
myArray.push(new Alakzat(HAROMSZOG, 4, 8));

let valogatas = valogat(myArray);

valogatas.forEach((elem) => {
    elem.logMe(); 
});
