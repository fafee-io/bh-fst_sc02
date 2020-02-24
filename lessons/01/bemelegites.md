# Bevezetés

- Google Drive Ppt

## Izgalmas példa:

- HOTPO az az: halve or triple plus one
- A Collatz Conjecture algoritmusa, jelenleg nem ismert olyan szám amire ne állna meg

```
let hotpo = (n) => {
    do {
        if (n % 2 === 0) {
            n = n / 2;    
        } else {
            n = n * 3 + 1
        }
        console.log(n);
    } while (n !== 1);
}
```

## DevTools izgalmak

- MDN - a mindent(is)tudó
- `document.querySelector();`
- `eventTarget.addEventListener();`
- Tudunk-e számolni? 
```
  for (let i = 0 ; i < 10 ; ++i) {
         console.log(i * 0.1);
     }
```
```
'11' + 1 = '111'
'11' - 1 = 10
```
- window reference

## Reserved Words

- `let`
- `const`
- `var`

- `function`
- `return`

- `typeof`

- `do`
- `while`
- `for` (`in`)

- `if`
- `else`
- `switch`

## Típusok

- Primitív vs Referencia
- null, undefined
- [], {}
- function
- String, Number, literálok

## Operátorok

- `=`
- `==` vs `===` (`!=` vs `!==`)
- `()`
- `+, -, *, /, %, ^` 
- `? :` the ternary operator
- `&&, ||`
- Precendenciák
- Zárójelezés
