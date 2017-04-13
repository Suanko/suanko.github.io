/**
 * Created by Cecil on 04.02.2017.
 */
var name = prompt('user', ''), text;
text = (name == 'admin') ? 'Hi' : (name == 'manager') ? 'Hello' : (name == '') ? 'No login':':(';
document.write(text);