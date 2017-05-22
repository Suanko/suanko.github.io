/**
 * Created by Cecil on 22.05.2017.
 */
student={
    Имя:'Стас',
    Фамилия:'Котов',
    Возраст:17,
    Интересы:'маджонг',
    Институт:'Политех'
};
function objectStudent () {
    for (var key in student){
        alert(key+': ' + student[key]);
    }
}
function arrayBonding() {
    var a = [1,2,4,5], b = [2,3,5,7], c, flag=true, array=[];
    c=a.concat(b);
    array.push(c[0]);
    for(var i=1; i<c.length; i++) {
        for(var j=0; j<array.length; j++) {
            if(c[i]==array[j]){
                flag = false;
                break;
            }
        }
        if(flag){
            array.push(c[i]);
        }
        flag = true;
    }
    alert(array);
}
function arrayFibonachu() {
    var n = parseInt(prompt('',8));
    var fibonachu = [0, 1];

    for (i = 2; i < n; i ++) {
        fibonachu[i] = fibonachu[i-1] + fibonachu[i-2];
    }
    alert(fibonachu.slice(0,n));
}
function toDay() {
alert('пока не сделал, подумаю ещё...')
}