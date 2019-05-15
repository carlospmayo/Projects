var a = "92.840";
var b = "2192.80";

function posPunto(num) {
    for(let i = 0; i <= num.length ; i++) {
        if(num[i] === ".") {
            return i;
        } 
    }
    return -1;
}

function suma(a,b) {

    var resultado = 0;

    const posA = posPunto(a);
    if(posA === -1) {
        a = a + ".";
    }
    const posB = posPunto(b);
    if(posB === -1) {
        b = b + ".";
    }

    if(posB >= posA) {
        var c = a;
        a = b;
        b = c;
    }

    values = FillArray(a, b);

    enterosA = values[0].split("");
    enterosB = values[1].split("");
    decimalesA = values[2].split("");
    decimalesB = values[3].split("");
    let resEntero = [];
    let resDecimal = [];
    var carry = 0;
    
    for(let i = decimalesA.length-1; i >= 0 ; i--) {
        resDecimal[i] = parseInt(decimalesA[i]) + parseInt(decimalesB[i]) + carry;
        carry = 0;
        if(resDecimal[i] > 9) {
            resDecimal[i] = resDecimal[i] - 10;
            carry = 1;
        }
        
        //console.log(resDecimal[i]);
    }

    //console.log("carry: " + carry);

    for(let i = enterosA.length-1; i >= 0 ; i--) {
        resEntero[i] = parseInt(enterosA[i]) + parseInt(enterosB[i]) + carry;
        carry = 0;
        if(resEntero[i] > 9) {
            resEntero[i] = resEntero[i] - 10;
            carry = 1;
        }
        
        //console.log(resEntero[i]);
    }

    console.log("Suma de dos numeros: ");
    console.log(values[0] + "." + values[2]);
    console.log("+");
    console.log(values[1] + "." + values[3]);
    console.log("--------------------");
    
    // console.log(resEntero.join(""));
    // console.log(resDecimal.join(""));
    if(carry === 1) {
        resultado = "1" + resEntero.join("") + "." + resDecimal.join("");
        carry = 0;
    } else {
        resultado = resEntero.join("") + "." + resDecimal.join("");
    }
    return resultado;
}

function FillArray(tempA, tempB) {
    tempA = tempA.split(".",2);
    tempB = tempB.split(".",2);
  
    var enterosA = tempA[0];
    var decimalesA = tempA[1];

    var enterosB = tempB[0];
    var decimalesB = tempB[1];

    var cerosE = enterosA.length - enterosB.length;
    for(let i = 0; i < cerosE; i++) {
        enterosB = "0" + enterosB;
        //console.log(enterosB);
    }

    var cerosD = decimalesA.length - decimalesB.length;
    if(cerosD < 0) {
        cerosD = cerosD*-1;
        for(let i = 0; i < cerosD; i++) {
            decimalesA = decimalesA + "0";
            //console.log(decimalesA);
        }
    } else {
        for(let i = 0; i < cerosD; i++) {
            decimalesB = decimalesB + "0";
            //console.log(decimalesB);
        }
    }
    return [enterosA, enterosB, decimalesA, decimalesB];
}

console.log(suma(a,b));
