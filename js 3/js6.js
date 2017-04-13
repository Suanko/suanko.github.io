/**
 * Created by Cecil on 10.02.2017.
 */
function pow(a, n) {
    var b = a;
    for (var i = 1; i < n; i++) {
        b *= a;
    }
    return b;
}
alert(pow(2, 5));
