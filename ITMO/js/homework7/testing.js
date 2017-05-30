/**
 * Created by Cecil on 25.05.2017.
 */
/*function calc_sum_numbers(str){
    var sum=0;
    for(var i=0;i<str.length;i++){
        x=parseInt(str[i]);
        if(x!=NaN){
            sum+=x;
        }
    }
    return sum;
}
describe('task_01 calc_sum_numbers_from_string',function () {
    var input_str ='1111', result=4, msg='Вывести сумму цифр этого числа:' + input_str + 'результат 4';
    it(msg, function () {
        var rez = calc_sum_numbers(input_str);
        expect(rez).toBe(4);
    })
})*/

function takeE(x) {
    var e;
    e= 1/x + Math.sqrt(x);
    return Math.round(e);
    alert(e);
}
describe('task_01 calc_sum_numbers_from_string',function () {
    var input_str ='если корень из 5', msg='там sqrt чото делает:' + input_str + 'результат будет 2';
    it(msg, function () {
        var rez = takeE(prompt(''));
        expect(rez).toBe(2);
    })
})