/**
 * Created by Cecil on 17.05.2017.
 */
//task1, Строка изображающая число, сумма чисел строки.
function toSum() {
    var str=prompt('Введите число'), i=0, sum=0;
    while (i < str.length) {
        sum += parseInt(str[i]);
        i++;
    }
    console.log(sum);
}
//task2, Удвоить вхождение символа С в строку S
function addSymbol() {
    var str=prompt('Введите слово');
    str = str.replace(/[сc]/igm,'сс');
    console.log(str);
}
//task3, проверить пароль на безопасность
function pwdCheck() {
    var str = prompt('Введите пароль подходящей сложности'
        + '\n- длинна от 9 символов;'
        + '\n- содержит обязательно английские буквы верхнего и нижнего регистра;'
        + '\n- содержит более двух цифр;'
        + '\n- содержит обязательно один из неалфавитных символов (например, !, $, #, %).');
    if (str.length >= 9 || str.length <= 24) {
        if (/[a-z]/i.test(str)) {
            if(/[A-Z]/.test(str)){
            if (/[0-9]/.test(str) && str.match(/[0-9]/g).length==2) {
                if (/[!#$%]{1}/.test(str)) {
                    alert('Пароль подходит!');
                }
                    else {
                        alert('Необходимо ввести символы !, $, #, %, максимум 1, попробуйте ещё раз.');
                    }
                }
                else {
                    alert('Необходимо ввести цифры, минимум 2, попробуйте ещё раз.');
                }
            }
            else {
                alert('Необходимо ввести хотя-бы одну заглавную букву латинского алфавита, попробуйте ещё раз.');
            }
        }
        else{
                alert('Необходимо ввести буквы латинского алфавита, попробуйте ещё раз.');
            }
    }
    else{
        alert('Не соответствует минимальной длинне, введите пароль ещё раз.');
    }
}