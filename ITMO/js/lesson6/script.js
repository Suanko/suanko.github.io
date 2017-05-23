/**
 * Created by Cecil on 23.05.2017.
 */
function pow (x,n) {
    if(n ==1){
        return x;
    }
    else if(n>1) {
        return x*pow(x,n-1);
    }
}
function powCircle(x,n) {
    var result =x;
    if(n ==1){
        return x;
    }
    else if(n>1) {
        for (var i=1; i<n;i++){
            result *=x;
        }
        return result;
    }
}
function predicat() {
    return arr[i]<0;
}
var arr =[1,-2,3,-4,5,6];
function filter () {
    var result =[];
    for (i =0; i<arr.length; i++){
        if(predicat(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}
var a=[1,2,5,7,3,4,6,9];
a.sort(compareNum);
function compareNum(n1,n2) {
    if(n1>n2){
        return 1;
    }
    else if(n2<n1){
        return -1;
    }
    else {
        return 0;
    }
}
function outCircle(){
    var i=0;
    return function innerCircle(){
        return ++i;
    }
}
var counter = outCircle();
for(var i=0; i<25;i++){
    counter();
}
console.log(counter());
function summ(a,n) {
    if(n===undefined) {
        return function (n) {
            return a - n;
        }
    }
    else {
        return a -n;
    }
}
var cat ={
    age:2,
    name:'buba',
    keyword:'meow'
};
var dog ={
    age:1,
    name:'biba',
    keyword:'wuff'
}
function logHello() {
        document.write(this.keyword+': ' + this.name +'\n');
}
cat.logHello=logHello;
dog.logHello=logHello;
cat.logHello();
dog.logHello();