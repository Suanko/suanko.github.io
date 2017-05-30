/**
 * Created by Cecil on 30.05.2017.
 */
setInterval(function timeData (){
    var h = new Date();
    var watch = document.getElementById('watch');
    watch.style = 'height:60px; width:120px; margin: 0 auto; text-align:center; font-size:36px; line-height:600px; vertical-align:middle;'
    watch.innerHTML = '<span style="color: blue;">'+h.getHours()+'</span>'+':'+'<span style="color: red;">'+ h.getMinutes()+'</span>'+':'+ '<span style="color: green;">'+h.getSeconds()+'</span>';
}, 1000);