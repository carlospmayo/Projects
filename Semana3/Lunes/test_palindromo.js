function isPalindrome (pal) {

    console.log(pal);
    word = convertToLowerCase(pal);
    var en_medio = parseInt((word.length / 2))-1;
    var temp = word.length;
    let cont = -1;

    for(var i=0; i <= en_medio; i++) {

        console.log(word[i] + " se compara con " + word[temp-1-i]); 
        if(word[i] === word[temp-1-i]) {
            cont++
            console.log(cont);
        }
    }

    if(cont === en_medio) {
        //console.log("es palindromo");
        return true;
    } else {
        return false;
    }
}

function convertToLowerCase(pal) {

    var result = '';
    
    for (var i = 0; i < pal.length; i++) {
        var code = pal.charCodeAt(i) 
        if (code > 64 && code < 91) {
            result += String.fromCharCode(code + 32)
      } else {      
        result += pal.charAt(i)
      }
    }
    return result
  }

const pal = "Lamina animal";
// const pal = "ana";
console.log("Es palindromo: " + isPalindrome(pal));