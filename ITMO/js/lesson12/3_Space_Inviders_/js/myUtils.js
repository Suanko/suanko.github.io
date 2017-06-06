;(function(){
	window.SpaceInviders = function(el){
		el.style.height = '800px';
		el.style.width = '800px';
		el.style.backgroundColor = 'black';
		el.style.position = 'relative';
		this.arrEnemy = [];
		this.gun = new Sprite(1, 400, 700, 'img/PlayerGun.png');
		el.appendChild(this.gun.elImg);
		for(var i=0; i<5; i++){
			arrEnemy.push(new Sprite(1,100 + 128*i,100, 'img/enemy1.png'));
			el.appendChild(arrEnemy[i].elImg);
		}
	};
	var self = this;
	document.addEventListener('keypress', function (e) {
		if(e.keyCode === 37){
			self.gun.move(-1,0);
		}
		if(e.keyCode === 39){
			self.gun.move(1,0);
		}
		if(e.keyCode === 38){

		}
	})
	function Sprite(speed, x, y, pathImg){
		this.isAlive = true;
		this.speed = speed;
		this.x = x;
		this.y = y;
		this.pathImg = pathImg;
		this.elImg = document.createElement('img');
		this.elImg.src = this.pathImg;
		this.elImg.style.position = 'absolute';
		this.elImg.style.left = this.x + 'px';
		this.elImg.style.top = this.y + 'px';
		Sprite.prototype.killed = function () {
				
		}
	}
}());