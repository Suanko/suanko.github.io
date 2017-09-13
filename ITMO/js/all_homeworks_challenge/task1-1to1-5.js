/**
 * Created by Cecil on 10.09.2017.
 */
/*task1*/
function lowerNumber() {
    var a=parseInt(prompt('first number',1)),b=parseInt(prompt('second number',2)),c=parseInt(prompt('third number',3));
    if(a<b&&a<c)alert('a is lower number');
    if(b<a&&b<c)alert('b is lower number');
    if(c<b&&c<a)alert('c is lower number');
}
function randomNumber() {
    var x=prompt('X',11);
    if(x==0)alert('X равно нулю');
    if(x>=1000||x<= -1000)alert('X вне диапозона');
    if(x<0&&x>-10)alert('X Однозначное отрицательное число');
    if(x<0&&x<-10&&x>-100)alert('X Двузначное отрицательное число');
    if(x<0&&x<-100&&x>-999)alert('X Трёхзначное отрицательное число');
    if(x>0&&x<10)alert('X Однозначное положительное число');
    if(x>0&&x>10&&x<100)alert('X Двузначное положительное число');
    if(x>0&&x>100&&x<999)alert('X Трёхзначное положительное число');
}
function xHigh(X,Y) {
    if(X>Y) {
        var D = X;
        X = Y;
        Y = D;
        alert('X='+ X + 'Y ='+Y);
    }
    if (X<=Y)alert('X ='+ X + ' Y ='+Y);
}
function symbolCode() {
    var str=prompt('Любое слово','слово');
    alert(str.charCodeAt(0));
    alert(str.slice(-1).charCodeAt(0));
}
function mustMatched() {
    var a=parseInt(prompt('first number',1)),b=parseInt(prompt('second number',2)),c=parseInt(prompt('third number',3));
    if(a==b||a==c||c==b)alert('match! catched');
    else alert('match has not found :(');
}