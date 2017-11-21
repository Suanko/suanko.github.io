/**
 * Created by Cecil on 12.09.2017.
 */
var student = {Имя:'Василий',Фамилия:'Пупкин',Возраст:'18',Интересы:['Плавание','Коллекционирование','Програмирование'],Место:'СПбГУ'}
function objectRun(object) {
    var str = '';
    str +=object.Имя+' '+object.Фамилия+'.'+object.Возраст+'лет.'+'['+object.Интересы +' '+ '].'+object.Место;
    document.write(str);
}
function factorial (n) {
    if(n!=0){
        return(n*factorial(n-1));
    }
    else {
        return 1;
    }
}
function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
function arrayBuilder(a,b,c,i,l){
    return function(){
        while(i<100) {
            a.push(getRandomInt(1,100));
            b.push(getRandomInt(1,100));
            i++;
        }
        c=a.concat(b);
            while (l<c.length) {
                var k=0;
                while(k<c.length) {
                    if(l!=k) {
                        if (c[l] == c[k]) {
                            c.splice(k, 1);
                        }
                    }
                    k++;
                }
                l++;
            }
            return c;
        }

}
