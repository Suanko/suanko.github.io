/**
 * Created by Cecil on 13.09.2017.
 */
var myUtils ={
    remove:function (array, i) {
        array.splice(i,1);
        return array;
    },
    min:function (array) {
        var l=0, min=array[l];
        while (l<array.length){
            var i=0;
            while (i<array.length){
                if(min>array[i]){
                    min=array[i];
                }
                i++;
            }
            l++;
        }
        return min;
    },
    max:function (array) {
        var l=0, max=array[l];
        while (l<array.length){
            var i=0;
            while (i<array.length){
                if(max<array[i]){
                    max=array[i];
                }
                i++;
            }
            l++;
        }
        return max;
    },
    mid:function (array) {
        var i=0, result=0;
        while (i<array.length){
            result += array[i];
            i++;
        }
        return result/array.length;
    },
    clone:function (array) {
        var result=[],l=0;
        while (l<array.length){
            result.push(array[l]);
            l++;
        }
        return result;
    }
};
function calc_sum_numbers(n){
    var sum=1/n+Math.sqrt(n);
    return sum;
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
describe("test y=sqrt(x)", function(){
    var result = 2.43606797749979;
    var result2 = 2.7886084539217335;
    var msg = "Вывести квадратный корень числа: " + n + " результат "+y;
    var n = getRandomInt(1,10);
    var y = calc_sum_numbers(n);
    it(msg, function(){
        var rez = calc_sum_numbers(n);
        expect(rez).toBe(result);
    });
    it(msg, function(){
        var rez = calc_sum_numbers(n);
        expect(rez).toBe(y);
    });
    it(msg, function(){
        var rez = calc_sum_numbers(n);
        expect(rez).toBe(y);
    });
    it(msg, function(){
        var rez = calc_sum_numbers(n);
        expect(rez).toBe(result2);
    });
});
