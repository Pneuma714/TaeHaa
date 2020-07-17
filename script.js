const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 500},
            debug: false
        }
    },
    scene: {
        key: 'main',
        preload: preload,
        create: create,
        update: update
    }
};

let game = new Phaser.Game(config);

let map;
let player;
let cursors;
let groundLayer, coinLayer;
let text;

function preload() {
    this.load.image('block', 'assets/block.png');
    this.load.image('player', 'assets/player.png');
}

function create() {
    player = this.physics.add.sprite(100, 450, 'player');
    platforms = this.physics.add.staticGroup();
    platforms.create(100, 100, 'block');
    platforms.create(200, 300, 'block');

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    player.body.setGravityY(300);
    this.physics.add.collider(player, platforms);
}

function update() {
    cursors = this.input.keyboard.createCursorKeys();

    if (cursors.left.isDown) {
        player.setVelocityX(-160);
    }
    else if (cursors.right.isDown) {
        player.setVelocityX(160);
    }
    else {
        player.setVelocityX(0);
    }

    if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-330);
    }
}