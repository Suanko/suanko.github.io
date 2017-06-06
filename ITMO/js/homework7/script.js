/**
 * Created by Cecil on 30.05.2017.
 */
//task3 Mylib
var myLib = (function () {
       var searchMin = function () {
        var i = array.length, min = array[0], index = 0;
        while (i--) {
            if (array[i] < min) {
                min = array[i];
                index = i;
            }
        }
        alert("array[" + index + "] = " + min);
    };
    var searchMax = function () {
        var i = array.length, max = array[-1], index = 0;
        while (i++) {
            if (array[i] < max) {
                max = array[i];
                index = i;
            }
        }
        alert("array[" + index + "] = " + max);
    }
    var arrayMid = function () {
        var sum = 0, result;
        for (var i=0; i<array.length;i++){
            sum += array[i];
        }
        result = sum/array.length;
        return result;
    }    
    var arrayClone = function () {
        return array.slice(0);
    }
    }
)();
//task4
var alphabet = 'АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЬЫЭЮЯ';
function shiftAlphabet(shift) {
    console.log(shift);
    var shiftedAlphabet = '';
    for (var i = 0; i < alphabet.length; i++) {
        //console.log(i, alphabet[i+shift]);
        currentLetter = (alphabet[i + shift] === undefined) ? (alphabet[i + shift - alphabet.length]) : (alphabet[i + shift]);
        shiftedAlphabet = shiftedAlphabet.concat(currentLetter);
    }
    return shiftedAlphabet;
}
console.log(shiftedAlphabet);
function encrypt() {
    var message = document.getElementById('message').value;
    var shift = parseInt(document.getElementById('shift').value);
    var shiftedAlphabet = shiftAlphabet(shift);
    var encryptedMessage = '';
    for (var i = 0; i < message.length; i++) {
        var indexOfLetter = alphabet.indexOf(message[i].toUpperCase());
        encryptedMessage = encryptedMessage.concat(shiftedAlphabet[indexOfLetter]);
    }
    document.getElementById('cipher').value = encryptedMessage.toLowerCase();
}
function decrypt() {
    var message = document.getElementById('message').value;
    var shift = parseInt(document.getElementById('shift').value);
    var shiftedAlphabet = shiftAlphabet(shift);
    var encryptedMessage = '';
    for (var i = 0; i < message.length; i++) {
        if (message[i] == ' ') {
            encryptedMessage = encryptedMessage.concat(' ');
            continue};
        var indexOfLetter = shiftedAlphabet.indexOf(message[i].toUpperCase());
        encryptedMessage = encryptedMessage.concat(alphabet[indexOfLetter]);
    }
    document.getElementById('cipher').value = encryptedMessage.toLowerCase();
}
