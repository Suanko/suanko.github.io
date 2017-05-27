/**
 * Created by Cecil on 26.05.2017.
 */
student={
    Имя:'Стас',
    Фамилия:'Котов',
    Возраст:'17 лет',
    Интересы:[хобби='маджонг', спорт='плавание'],
    Институт:'Учится в политехе'
};
var objPrint = function(object, level) {
    var result = '';
    if (typeof object === 'object') {
        for (var key in object) {
            if (typeof object[key] === 'object') {
                result += 'Интересы:' + object[key] +'.';
            } else {
                if(object[key] == object.Имя){
                    result += object[key] +' ';
                }
                else {
                    result += object[key] +'.';
                }
            }
        }
        document.write(result);
    } else {
        console.log('Не объект.');
    }
};
function factorial(n) {
    if(n !=0){
        return (n * factorial(n - 1));
    }
    else {
        return 1;
    }
}
function randomHundred() {
    var randomValue=[], result=[];
    randomNumber();
    function randomNumber () {
        for (var i = 1; i <= 100; i++) {
            randomValue.push(Math.round(Math.random() * i));
        }
    }
    nextInput:
    for (var e = 0; e < randomValue.length; e++) {
        var check = randomValue[e];
        for (var j = 0; j < result.length; j++) {
            if (result[j] == check) continue nextInput;
        }
        result.push(check);
    }
    alert(result);
}