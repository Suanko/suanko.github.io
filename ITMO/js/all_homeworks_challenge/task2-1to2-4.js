/**
 * Created by Cecil on 10.09.2017.
 */
function coordinateXYZ() {
    alert('Является ли Ваш треугольник прямоугольным, укажите координаты для каждой вершины.');
    var X1=prompt('X1?',1),Y1=prompt('Y1?',1),Z1=prompt('Z1?',1),X2=prompt('X2?',1),Y2=prompt('Y2?',1),Z2=prompt('Z2?',1),
        X3=prompt('X3?',1),Y3=prompt('Y3?',1),Z3=prompt('Z3?',1);
    var x = Math.sqrt((Math.pow((X2-X1),2))+(Math.pow((Y2-Y1),2))+(Math.pow((Z2-Z1),2))),
    y = Math.sqrt((Math.pow((X3-X2),2))+(Math.pow((Y3-Y2),2))+(Math.pow((Z3-Z2),2))),
    z = Math.sqrt((Math.pow((X1-X3),2))+(Math.pow((Y1-Y3),2))+(Math.pow((Z1-Z3),2)));
    if ( x*x == y*y + z*z || y*y == z*z + x*x || z*z == x*x + y*y ){
        alert('Прямоугольный');
    }
    else alert('Не является');
}
function numberStr(x) {
    switch (x){
        case (0):
            alert('ноль');
            break;
        case (1):
            alert('один');
            break;
        case (2):
            alert('два');
            break;
        case (3):
            alert('три');
            break;
        case (4):
            alert('четыре');
            break;
        case (5):
            alert('пять');
            break;
        case (6):
            alert('шесть');
            break;
        case (7):
            alert('семь');
            break;
        case (8):
            alert('восемь');
            break;
        case (9):
            alert('девять');
            break;
    }
}
function doh(x) {
    switch (x) {
        case (1):
            alert('плохо');
            break;
        case (2):
            alert('неудовлетворительно');
            break;
        case (3):
            alert('удовлетворительно');
            break;
        case (4):
            alert('хорошо');
            break;
        case (5):
            alert('отлично');
            break;
    }
}
function tableWrote() {
    var table ='<table>';
    var i=1;
    while(i<10){
        table+='<tr>';
        var l=1;
        while (l<10){
            var a=i*l;
            table+='<td>'+a+'</td>'
            l++;
        }
        table+='</tr>';
        i++;
    }
    table+='</table>';
    document.write(table);
}