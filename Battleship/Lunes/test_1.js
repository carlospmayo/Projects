// var a = "92.840";
// var b = "2192.80";

// function suma(a,b) {

//     a = a.split("");
//     b = b.split("");
//     




// }

function isPalindrome (word) {
    console.log(word);
    var en_medio = parseInt((word.length / 2))-1;
    console.log(en_medio);
    console.log(word[0]);
    console.log(word[en_medio]);
    var temp = word.length;
    console.log(word[temp-1]);
    for(var i=0; i <= en_medio; i++){
        let cont = 0;
        if(word[i] !== (word.length-1)-i) {
             // console.log("No es palindromo");
             return false;
        }

        if(cont===en_medio+1){
            return true;
        }

        cont++;
    }
}

const pal = "lamina animal";
console.log("es palindromo: " + isPalindrome(pal));