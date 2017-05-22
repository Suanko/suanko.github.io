/**
 * Created by Cecil on 19.05.2017.
 */
//task1
function arrayAddition() {
    var a=[ 12, 4, 3, 10, 1, 20 ], b=[-3, -7, -100, -33],c=a.concat(b);
    console.log(c);
}
//task2
function crossNull() {
    var area = [ null, 1, null, 0, null, 0, null, 1, null ], table='';
    table += '<table style="background: yellow; border: solid 1px green">';
        for (var j=0; j<area.length;j++) {
            if (j == 0){
                table += '<tr>';
            }
            if (j % 3 == 0 && j !=0){
                table += '</tr>';
                table += '<tr>';
            }
            if(area[j]==1){
                table += '<td style="height: 15px; width: 15px; text-align: center; background: red;">'+'X'+'</td>';
            }
            else if(area[j]==0) {
                table += '<td style="height: 15px; width: 15px; text-align: center; background: green;">'+0+'</td>';
            }
            else {
                table += '<td style="height: 15px; width: 15px; text-align: center;">'+' '+'</td>';
            }
        }
    table += '</table>';
    document.write(table);
}
//task3
function arrayMinmaxdel() {
    var a = [12,4,3,10,1,20];
    for (var i=0, n=a.length-1;i<n; i++){
        for(var j=0, m=n-i;j<m;j++){
            if(a[j]>a[j+1]){
                temp = a[j+1];
                a[j+1]=a[j];
                a[j]=temp;
            }
        }
    }
    a.splice(0, 1);
    a.splice(a.length-1, 1);
    console.log(a);
}
//task4
function arraySort2() {
    var a = [12,4,3,10,1,20];
            for (var i = 0, n=a.length-1, min = i; i < n-1; i++){
                min = i;
                for (var j = i+1; j < n; j++){
                    if (a[j] < a[min]){
                        min = j;
                    } 
                }
                var temp = a[min];
                a[min] = a[i];
                a[i] = temp;
            }
    console.log(a);
    }