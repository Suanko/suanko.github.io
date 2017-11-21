/**
 * Created by Cecil on 12.09.2017.
 */
var student = {Имя:'Василий',Фамилия:'Пупкин',Возраст:'18',Интересы:['Плавание','Коллекционирование'],Место:'СПбГУ'}
function objView(object) {
    var str='';
    for(var key in object){
        if (typeof object[key] == 'string'){
            str+=object[key]+'<br/>';
        }
        if(typeof object[key] == 'object'){
            str+= key+': '+'['+object[key]+']'+'<br/>';
        }
    }
    document.write(str);
}
function arrayAdd(a,b) {
    var c=[], l=0;
    c=a.concat(b);
        while (l < c.length) {
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
function fibonachu(n) {
    var a=1, b=1;
    for (var i=3; i<=n; i++) {
        var c=a+b;
        a=b;
        b=c;
    }
    return b;
}
function Days(n) {
    var m=n,temp=n+'', i=0;
    n=temp;
    if(n.length<2){
        if(n[0]==1){
            alert(m+'день');
        }
        if(n[0]>1&&n[0]<5){
            alert(m+'дня');
        }
        if(n[0]>4){
            alert(m+'дней');
        }
    }
    if(n.length==2){
        if(n[0]==1){
            alert(m+'дней');
        }
        if(n[0]>1){
            if(n[1]==1){
                alert(m+'день');
            }
            if(n[1]>1&&n[1]<5){
                alert(m+'дня');
            }
            if(n[1]>4){
                alert(m+'дней');
            }
        }
    }
    if(n.length>2){
        if(n[1]==1){
            alert(m+'дней');
        }
        if(n[1]>1){
            if(n[2]==1){
                alert(m+'день');
            }
            if(n[2]>1&&n[1]<5){
                alert(m+'дня');
            }
            if(n[2]>4){
                alert(m+'дней');
            }
        }
    }
}