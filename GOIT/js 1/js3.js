/**
 * Created by Cecil on 04.02.2017.
 */
var login = prompt('Логин', '');
if (login == undefined){
    alert('Canceled');
}
else if (login != 'admin') {
    alert('Access denide')
}
    else if (login == 'admin'){
    alert('OK!');
    var pass = prompt('Пароль', '');
    if (pass == 'passw0rd'){
        alert('Welcome home!');
    }
    else if (pass == undefined){
        alert('Canceled')
    }
    else if (pass != 'passw0rd'){
        alert('Wrong password')
    }
}

