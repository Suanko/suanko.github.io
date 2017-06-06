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
    if (typeof this === 'object') {
        for (var key in object) {
            if (typeof this[key] === 'object') {
                result += 'Интересы:' + object[key] +'.';
            } else {
                if(this[key] == this.Имя){
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
function randomHundred(max, min) {
    var result = [];
    function compareRandom(a, b) {
        return Math.random() - 0.5;
    }
    
    return function () {
        for (var i=0; i<100;i++){
            result.push(i+1);
        }
        result.sort(compareRandom);
        return result;
    };
}
