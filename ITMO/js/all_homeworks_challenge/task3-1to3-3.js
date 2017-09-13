/**
 * Created by Cecil on 11.09.2017.
 */
function strToNum(str) {
    var i=0, result=0;
    while(i<str.length){
        result += parseInt(str[i]);
        i++;
    }
    alert(result);
}
function doubleC(str) {
    var result = str.replace(/с/g, 'сс');
    alert(result);
}
function CheckPWD() {
    var pwd = prompt('Введите пароль подходящей сложности'
        + '\n- длинна от 9 символов;'
        + '\n- содержит обязательно английские буквы верхнего и нижнего регистра;'
        + '\n- содержит более двух цифр;'
        + '\n- содержит обязательно один из неалфавитных символов (например, !, $, #, %).');
    if(pwd.length>8) {
        if (pwd.match(/[a-z]/g)) {
            if (pwd.match(/[A-Z]/g)) {
                if (pwd.match(/\d{2}/g)) {
                    if (pwd.match(/[\!, \$, \#, \%]{1}/g)) {
                        alert('PWD Correct!');
                    }
                    else alert('PWD without numbers 2+');
                }
                else  alert('PWD needs Uppercase words');
            }
            else alert('PWD needs Latin words');
        }
        else alert('PWD needs 9 or larger length');
    }
}