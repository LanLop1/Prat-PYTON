let x = 10+5*2 
let y = 10 + (5*2) 
let z = (10+5) * 2 
let r= 10
// r = alert
let aa = 3.14 * r ** 2
let ab = 10**3 
let ac = 10** -3

//área del triángulo
let basetri = 6
let alttri = 4
atri = (basetri * alttri) / 2
 
// 4
 let ad = 25/ (5-5)
 ae = ad +10  // infinito ?, claro un numero devidido entre cero lo toma como el límite de 0 que es infinito

// Lado y perímetro de un cuadrado

let ladocuadr = 8
 let acuadrado = ladocuadr * ladocuadr
let percuardrado = ladocuadr + ladocuadr + ladocuadr + ladocuadr

// 6

2**3
2**0 // todo número elevado a 0 es 1 incluso el 0
0**0

// 7
 let af = 10
 af = 10 + 3   //dos formas de hacer lo mismo pero con los operadores de asignación
 af = 10
 af += 3

//8 
let ag = 50
ag -=10
ag += ag *0.21
ag+= 20 + 2
//9

let contador = 5
contador *= 2
contador *= 2
contador *= 2
contador *= 2
contador *= 2
// equivale a la operacion 5*(2**5)

let ah = 15
ah / 3
ah / 5
ah / 7
ah / 10
// para saber que el resto es 0 en vez de / pondriíamos el %

let saldo = 100
saldo = saldo - 0.1*saldo
saldo = saldo -15
saldo = saldo + 0.125*saldo
saldo = saldo/ 2
saldo = saldo + 0.21*saldo  //saldo final 51.04

//ej 11
let edad = 26

console.log (edad >= 18)
console.log (edad < 18)
console.log(edad >=25 && edad <= 35)
console.log (edad < 65)
console.log(edad <=24 && edad >= 13)

//ej 12
let num = 8

console.log(num>0)
console.log(num >= 10)
let modop1 = num % 2
console.log (modop1 === 0)
console.log (modop1 !== 0)
let modop2 = num % 3
console.log (modop2 === 0)

// ej 13

let string12 = "Hola, ¿qué tal?"
console.log (string12.length > 10)
string13 = string12.split('');
console.log (string13[0] == "H")
 for (let index = 0; index < string13.length; index++) {
    if (string13[index] === " "){
        console.log(index + " Hay espacio");
    }
    
    // let espacio = " ";
    // let contador = 0
    // if (espacio == sring13[index]) {
    //     contador++
    // }
    }

    for (let index = 0; index < string13.length; index++) {
        if (string13[index] === ""){
            console.log(index + " undefined or null");
        }
    }
    console.log ("mas que 5" + string12.length > 5)