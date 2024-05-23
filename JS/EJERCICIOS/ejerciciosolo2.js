const esPar = function(num){
return num % 2
}
console.log("Es par?" + esPar==0)
//`es par ${num==0}`



const esMultiplo = function(num1, num2){
    return num1 % num2 == 0
    }
    console.log("Es multiplo? " + esMultiplo(40,4))
    //`es par ${num==0}`
    


    let numerop = 7
    let a = "patata"

    const repetir = function (a, num){
     for( let i = num; i < 1 ; i--){
        a += a
     
     }
     console.log (a)
    }

    repetir (a, numerop)