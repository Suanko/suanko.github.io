/**
 * Created by Cecil on 27.05.2017.
 */
;(function () {
    window.myUtils = {
        createGamePlace: function (id, n) {
            container = document.getElementById(id);
            var tbody = document.createElement('tbody');
            container.append(tbody);
            var arrNum = [];
            for (var i = 1; i <= n * n; i++) {
                arrNum.push(i);
            }
            for (var i = 0; i < n; i++) {
                var tr = document.createElement('tr');
                for (var j = 0; j < n; j++) {
                    var td = document.createElement('td');
                    td.innerText = getRandomNum(arrNum);
                    tr.append(td);
                    td.style = getRandomStyle(arrNum);
                }
                tbody.append(tr);
            }
        }
    }
        function rand(min,max){
        return Math.round(Math.random()*(max-min)+min);
    }
    function getRandomNum(arr) {
        return arr.splice(rand(0,arr.length-1),1);
    }
    function getRandomStyle() {
        return "font-size:"+ rand(10,34) + "px;" + "color:" + "rgb(" + rand(0,255)+','+ rand(0,255)+','+ rand(0,255)+");"
            +"border:none;";
    }
    var a= 1;
    container.addEventListener('click', function (e) {
        if(e.target.tagName='TD'){
            var content = e.target.innerText;
            if(parseInt(content) === a){
                e.target.style = "background-color: rgb(" + rand(0,255) +','+ rand(0,255) +','+ rand(0,255)+");"
                    +"border:none;"+"color: rgb(" + rand(0,255) +','+ rand(0,255) +','+ rand(0,255)+");"+"font-weight:700";
                a++;
            }
        }
    }, false)
}());