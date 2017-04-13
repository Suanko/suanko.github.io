/**
 * Created by Cecil on 06.02.2017.
 */
var i;
var j;
toPoint:
for (i=2; i<=10; i++){
    for (j = 2; j < i; j++){
        if (i % j == 0) continue toPoint;
    }
    console.log(i)
}