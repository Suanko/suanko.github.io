/**
 * Created by Cecil on 22.05.2017.
 */
student={
    Имя:'Стас',
    Фамилия:'Котов',
    Возраст:17,
    Интересы:{хобби:'маджонг', спорт:'плавание'},
    Институт:'Политех'
};
var objPrint = function(object, level = 0) {
    var result = '';
    if (typeof object === 'object') {
        for (var key in object) {
            if (typeof object[key] === 'object') {
                result += `${Array(level+1).join('\t')}${key}:\n`;
                result += objPrint(object[key], level + 1);
            } else {
                result += `${Array(level+1).join('\t')}${key}: ${object[key]}\n`;
            }
        }
        return result;
    } else {

        console.log('Не объект.');

    }
};
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
var n = parseInt(prompt('',8));
function arrayFibonachu(n) {
    var fibonachu = [0, 1];

    for (i = 2; i < n; i ++) {
        fibonachu[i] = fibonachu[i-1] + fibonachu[i-2];
    }
    alert(fibonachu.slice(0,n));
}
var day = prompt('Количество дней');
function toDay(day) {
    var array =[];
    for (var i = 0, len = day.length; i<len; i++) {
        array.push(+day.charAt(i));
    }
    if(len==3){
        if(array[1]==1){
            alert(day + ' дней');
        }
        else {
            if (array[2] == 1 || array[3] == 1) {
                alert(day + ' день');
            }
            if (array[2] < 5 && array[2] != 0 && array[2] != 1) {
                alert(day + ' дня');
            }
            if (array[2] > 4 || array[2] == 0) {
                alert(day + ' дней');
            }
        }
    }
    if(len==2){
        if(array[0]==1){
            alert(day + ' дней');
        }
        else {
            if (array[1] == 1 || array[2] == 1) {
                alert(day + ' день');
            }
            if (array[1] < 5 && array[1] != 0 && array[1] != 1) {
                alert(day + ' дня');
            }
            if (array[1] > 4 || array[1] == 0) {
                alert(day + ' дней');
            }
        }
    }
    if(len==1){
        if(array[0]==1){
            alert(day+' день');
        }
        if(array[0]>4 || array[0]==0){
            alert(day+' дней');
        }
        if(array[0]<5){
            alert(day+' дня');
        }
    }
}