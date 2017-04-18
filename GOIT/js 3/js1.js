/**
 * Created by Cecil on 06.02.2017.
 */
do{
  var num = (prompt('Введите число больше 100', ''));
    if (isNaN(num)) {
        prompt("Это не число. Введите число от 100.", "");
    }
    else if (num === null) break;
}
while(num < 100 || isNaN(num)) {
}
