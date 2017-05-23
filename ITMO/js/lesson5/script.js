/**
 * Created by Cecil on 20.05.2017.
 */
function objectTest () {
    var human={name:'Ivan',age:'99',sex:'man'},
        window={broken:'yep', width:'90',height:'90'},
        slider={size:'small', photos:'five',specifical:'nature'},
        menu={home:'<a></a>',contact:'<a></a>',about:'<a></a>'};
    var a ={ a: human, b: window, c: slider, d: menu};
}
function randomWords () {
    var trigger = Math.round(Math.random()), count=Math.floor(Math.random()*3 +3),
        hard=['Б','В','Г','Д','Ж','З','К','Л','М','Н','П','Р','С','Т','Ф','Х','Ц','Ч','Ш','Щ'],
        soft=['А','Е','Ё','И','О','У','Ы','Э','Ю','Я'],
        word='';
    for(var i=0;i<count;i++){
        
    }
}
function nmSum(n,m){
    var result= 0;
    for(var i=n;i<=m;i++){
        result+=i;
    }
    return result;
}
var content ={
    aqua:85,
    carbon:10,
    gas:{
        oxygen:3,
        nitrogen:5
    }
    sulfur:7
}
var objPrint = function(object, level = 0) {
    var result = '';
    if (typeof object === 'object') {
        for (var key in object) {
            if (typeof object[key] === 'object') {
                result += `${Array(level+1).join('\t')}${key}:\n`
                result += objPrint(object[key], level + 1);
            } else {
                result += `${Array(level+1).join('\t')}${key}: ${object[key]}\n`
            };
        };
        return result;
    } else {

        console.log('Не объект.');

    };
};