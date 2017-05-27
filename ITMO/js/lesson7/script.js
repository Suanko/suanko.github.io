/**
 * Created by Cecil on 25.05.2017.
 */
var myLib = (function() {
    var remove = function (array, index) {
        var b = array.slice(0);
        b.splice(index, 1);
        return b;
    }
    var repeat = function (str, n) {
        return Array(n+1).join(str);
    }
    var pluck = function (array, n) {
        var result = [];
        for(var i=0; i<array.length; i++){
            result.push(array[i][n]);
        }
        return result;
    }
}());