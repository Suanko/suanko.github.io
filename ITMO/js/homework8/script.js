/**
 * Created by Cecil on 30.05.2017.
 */
setInterval(function timeData (){
    var h = new Date();
    var watch = document.getElementById('watch');
    watch.style = 'height:60px; width:120px; margin: 0 auto; text-align:center; font-size:36px; line-height:600px; vertical-align:middle;'
    watch.innerHTML = '<span style="color: blue;">'+h.getHours()+'</span>'+':'+'<span style="color: red;">'+ h.getMinutes()+'</span>'+':'+ '<span style="color: green;">'+h.getSeconds()+'</span>';
}, 1000);
onload = function () {
    var trigger = ['1','12','3','0','3','0','3','0','2'],
        timer = [12,5,12,1,1,1,1,2,3];
    colorChange ();
    function colorChange ()
    {
        var child = document.getElementById ('main').getElementsByTagName ('li');
        var color = trigger.shift (); trigger.push (color);
        var timeout = timer.shift (); timer.push (timeout);
        child [0].style.backgroundColor = (color.charAt (0) == 1) ? 'red' : '';
        child [1].style.backgroundColor = (color.charAt (0) == 2 || color.charAt(1) == 2) ? 'yellow' : '';
        child [2].style.backgroundColor = (color.charAt (0) == 3) ? 'green' : '';
        setTimeout (colorChange, timeout * 500);
    }
};
object = {
    size:'<p class="size">height:123</p><p class="size">width:233</p>',
    artical:'<p id="artical" style="position: absolute; top: 5px; right: 0; color: red">123759</p>',
    text:'<p id="text" style="position: absolute; left: 0; bottom: 0;">вот и описание сего чудесного продукта.</p>',
    img:'<div id="item-img" style="height: 40px; width: 40px; position: absolute; bottom: 0; right: 0;">'
};
function chitoitsu () {
    var item = document.getElementById('item');
    var result = '';
    for (var key in object){
        result += object[key];
    }
    item.innerHTML = result;
}
