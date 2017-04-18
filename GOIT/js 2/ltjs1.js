/**
 * Created by Cecil on 04.02.2017.
 */
var browser = prompt('browser', '');
if (browser==='ie') {
    alert('О, да у вас IE!');
}
else if (browser=='chrome' || browser=='Firefox' || browser=='Safari' || browser=='Opera') {
    alert('Браузер норм!');
}
else {alert('Кто здесь ?!')}