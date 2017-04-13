/**
 * Created by Cecil on 07.02.2017.
 */
var i;
var ae=prompt('сколько строк?', '');
var j;
var ea=prompt('сколько клеток?', '');
for (i=1; i<=ae; i++){
    if (i % 2 == 0){
        var a='';
        for(j=1;j<=ea;j++){
            if (j % 2 == 0){
                a+='#';
            }
            else {
                a+=' ';
            }
        }
        console.log(a);
    }
    else {
        var a='';
        for(j=1;j<=ea;j++){
            if (j % 2 == 0){
                a+=' ';
            }
            else {
                a+='#';
            }
        }
        console.log(a);
    }
}
