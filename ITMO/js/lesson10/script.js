/**
 * Created by Cecil on 01.06.2017.
 */
function integerIterator(_from, _to){
    this._from = _from;
    this._to = _to;
    this.current = _from;
    this.iterated = function(){
        if(this.current === this._to){
            return this.current;
        }
        if(this._from < this._to){
            return this.current++;
        }
        if (this._to < this._from){
            return this.current--;
        }
    }
}
var iterator = new integerIterator(0,5);
console.log(iterator.iterated());
console.log(iterator.iterated());
console.log(iterator.iterated());
console.log(iterator.iterated());
console.log(iterator.iterated());

function integerIteratorSecond(_from, _to) {
    integerIterator.call(this, _from, _to);
    this.iterateD = function () {
        if (this.current == this._to){
            var tmp = this._to;
            this._to = this._from;
            this._from = tmp;
        }
        return this.iterated();
    }
}
var redChannel = new integerIteratorSecond(0,255);
var greenChannel = new integerIteratorSecond(255,0);
var blueChannel = new integerIteratorSecond(0,255);
function changeColorDiv() {
    box.style.backgroundColor = 'rgb('+
            redChannel.iterateD()+ ','+
            greenChannel.iterateD()+ ','+
            blueChannel.iterateD()+')';
    
}
setInterval(changeColorDiv, 10);

var Node = function (value) {
    this.data = value;
    this.next = null;
}
var SingleLinkedList = function () {
    this.length=0;
    this.head=null;
    this.push=function (value) {
        var tmp = new Node(value);
        if(this.length === 0){
            this.head = tmp;
        }   
        else {
            tmp.next= this.head;
            this.head = tmp;
        }
        this.length++;
    }
    this.pop = function () {
        if(this.length!==0) {
            var prev = this.head;
            this.head = prev.next;
            this.length--;
            return prev.data;
        }
        else{
            return null;
        }
    }
    this.toString = function () {
        var str = '';
        var node = this.head;
        while (node){
            str += node.data + ',';
            node = node.next;
        }
        return str.slice(0, str.length-2);
    }
    this.unshift = function (value) {
        var node = this.head;
        while (node.next){
            node = node.next;
        }
        var tmp = new Node(value);
        node.next = tmp;
        this.length++
    }
}
var list = new SingleLinkedList();
list.push(5);
list.push(4);
list.push(3);
list.push(2);
list.unshift(6);
console.log(list.pop());
console.log(list.toString());