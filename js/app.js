var app = function(game){
};


app.prototype = {
  preload: preload,
  create: create,
  update: update

}

function preload() {
    game.load.image('scene1', 'Assets/backgrounds/scene1.png');
    game.load.image('cat', 'Assets/sprites/cat.png',32, 48);
    //  Firefox doesn't support mp3 files, so use ogg
    game.load.audio('mission', 'assets/music/Mission Cat Possible.mp3');
};

var player;
var platforms;
var cursors;
var stars;
var score = 0;
var scoreText;
var music;

function create() {

  //  We're going to be using physics, so enable the Arcade Physics system
  game.physics.startSystem(Phaser.Physics.ARCADE);

  //  A simple background for our game
  game.add.sprite(0, 0, 'scene1');

  platforms = game.add.group();
     //  We will enable physics for any object that is created in this group
     platforms.enableBody = true;
     // Here we create the ground.
     //var ground = platforms.create(0, game.world.height - 64, 'ground');
     //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    // ground.scale.setTo(2, 2);
     //  This stops it from falling away when you jump on it
     //ground.body.immovable = true;
     //  Now let's create two ledges
    //  var ledge = platforms.create(400, 400, 'ground');
    //  ledge.body.immovable = true;

     ///ledge = platforms.create(-150, 250, 'ground');
     ///ledge.body.immovable = true;

     // The player and its settings
     player = game.add.sprite(-500, 600, 'cat');
     //  We need to enable physics on the player
     game.physics.arcade.enable(player);


  //  Player physics properties. Give the little guy a slight bounce.
  player.body.bounce.y = 0.2;
  player.body.gravity.y = 300;
  player.body.collideWorldBounds = true;

  //  Our two animations, walking left and right.
  //player.animations.add('left', [0, 1, 2, 3], 10, true);
  //player.animations.add('right', [5, 6, 7, 8], 10, true);

  cursors = game.input.keyboard.createCursorKeys();

  music = game.add.audio('mission');
  music.play();

}

function update() {
  //  Reset the players velocity (movement)
    player.body.velocity.x = 0;
    if (cursors.left.isDown)
    {
        //  Move to the left
        player.body.velocity.x = -150;
        //player.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        player.body.velocity.x = 150;
        //player.animations.play('right');
    }
    else
    {
        //  Stand still
        //player.animations.stop();
        player.frame = 4;
    }

    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && player.body.touching.down)
    {
        player.body.velocity.y = -350;
    }

}