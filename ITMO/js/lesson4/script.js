/**
 * Created by Cecil on 18.05.2017.
 */
function arrayCheck() {
    var a =[2,3,7,13,5,0,20], min = a[0], max =a[0], cc=a[0], sum=0;
    for (var i = 1;i<a.length;i++){
        if (a[i]<min){
            min=a[i];
        }
    }
    for(var i = 1;i<a.length;i++){
        if (a[i]>max){
            max=a[i];
        }
    }
    for(var i = 1;i<a.length;i++){
        sum+= a[i];
    }
    cc=sum / a.length;
    console.log(min);
    console.log(Math.ceil(cc));
    console.log(max);
    a.splice(0, 1);
    a.splice(a.length-1, 1);
    console.log(a);
}
function arrayTiming() {
    var a =[];
    console.time('Оценка времени работы push');
    for(i=0; i <100; i++){
        a.push(i);
    }
    console.timeEnd('Оценка времени работы push');
    console.time('Оценка времени работы  pop');
    for(i=0; i <100; i++){
        a.pop(i);
    }
    console.timeEnd('Оценка времени работы pop');
}
function arraySort() {
    var a = [2,4,3,0,6,5,9];
    for (var i=0, n=a.length-1;i<n; i++){
        for(var j=0, m=n-i;j<m;j++){
            if(a[j]>a[j+1]){
                temp = a[j+1];
                a[j+1]=a[j];
                a[j]=temp;
            }
        }
    }
    console.log(a);
}