var startmenu = function(game) {
};

startmenu.prototype = {
  preload: preload,
  create: create

}

var text;
var image;



function preload() {
     game.load.image('cat', 'Assets/sprites/cat.png',32, 48);
}


function create() {
      image = game.add.sprite(game.world.centerX, game.world.centerY, 'cat');

      image.anchor.set(0.5);

      //  Enables all kind of input actions on this image (click, etc)
      image.inputEnabled = true;
      text = game.add.text(250, 16, '', { fill: '#ffffff' });
      image.events.onInputDown.add(listener, this);
}

function update() {
console.log();
}

function listener () {
  this.game.state.start('app');
}
