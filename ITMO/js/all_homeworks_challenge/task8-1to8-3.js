/**
 * Created by Cecil on 16.09.2017.
 */
var task8 = {
    time:function () {
        var watch = document.body.appendChild(document.createElement('div'));
        document.body.style = 'position:relative;';
        watch.setAttribute('id', 'watch');
        watch.style = 'height:90px; color:blue ;width:180px; top:0; left:calc(50% - 90px); font-size: 52px; text-align:center; position:absolute;';
        setInterval(function(){var time=new Date();watch.innerHTML ='<span style="color: #8a4182">'+time.getHours()+'</span>'+':'
            +'<span style="color: #007069">'+time.getMinutes()+'</span>'+':'
            +'<span style="color: #ba9d37">'+time.getSeconds()+'</span>';},1000)
    },
    product:{name:'Плюмбус',properties:'Все знают что такое плюмбус',
        img:'https://cs8.pikabu.ru/post_img/big/2016/04/27/6/1461748084167073788.jpg',
        article:'001',
        description:'Прежде всего берется дингльбоб и пропитывается шлиимом...'
    },
    productView:function (object) {
        var view = document.body.appendChild(document.createElement('div'));
        view.style='height:500px; width:500px; position:relative';
        view.setAttribute('id', 'view');
        for(var key in object){
            if(key == 'name'){
                view.innerHTML +='<p style="color:#77eec1; font-size:42px; position:absolute; top:15px; left:25px; line-height:42px; margin:0">'+object[key]+'</p>';
            }
            if(key == 'properties'){
                view.innerHTML +='<p style="color:#6176ee; font-size:28px; position:absolute; top:70px; left:5px; margin:0">'+object[key]+'</p>';
            }
            if(key == 'img'){
                view.innerHTML +='<div style="height: 370px; width:370px; position:absolute; bottom:30px; right:0; margin:0; background-image:url('+object[key]+');background-size:cover;">'+'</div>';
            }
            if(key == 'article'){
                view.innerHTML +='<p style="color: #ee3b46; font-size:10px; position:absolute; top:35px; right:25px; margin:0">'+'Артикль: '+object[key]+'</p>';
            }
            if(key == 'description'){
                view.innerHTML +='<p style="color: #6176ee; font-size:16px; position:absolute; bottom:10px; right:25px; margin:0">'+object[key]+'</p>';
            }
        }
    },
    trafficLight:function () {
        document.body.style = 'margin:0;';
        var lightBlock = document.body.appendChild(document.createElement('ul'));
        lightBlock.style = 'margin:0 auto; width:90px; background:black; padding: 15px 0; border-top:solid 10px transparent; border-right:solid 10px white;' +
            'border-bottom:solid 10px transparent; border-left:solid 10px white; list-style-type:none;';
        lightBlock.setAttribute('id', 'lightBlock');
        var Red = lightBlock.appendChild(document.createElement('li'));
        Red.style = 'height:80px; width:80px; border-radius:80px; margin:0 auto 10px; padding:0;';
        Red.setAttribute('id', 'Red');
        var Yellow = lightBlock.appendChild(document.createElement('li'));
        Yellow.style = 'height:80px; width:80px; border-radius:80px; margin:0 auto 10px; padding:0;';
        Yellow.setAttribute('id', 'Yellow');
        var Green = lightBlock.appendChild(document.createElement('li'));
        Green.style = 'height:80px; width:80px; border-radius:80px; margin:0 auto; padding:0;';
        Green.setAttribute('id', 'Green');
        trafficLightTransition();
        function trafficLightTransition() {
            var trigger = ['1','12','3','0','3','0','3','0','3','0','2'],
                timer = [12,5,12,1,1,1,1,1,1,2,4];
            colorChange();
            function colorChange() {
                var color = trigger.shift (); trigger.push (color);
                var timeout = timer.shift (); timer.push (timeout);
                Red.style.backgroundColor = (color.charAt (0) == 1) ? 'red' : '#5F3A3C';
                Yellow.style.backgroundColor = (color.charAt (0) == 2 || color.charAt(1) == 2) ? 'yellow' : '#636621';
                Green.style.backgroundColor = (color.charAt (0) == 3) ? 'green' : '#3A5035';
                setTimeout (colorChange, timeout * 500);
            }
        }
    }
};