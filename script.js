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
    const player = this.physics.add.sprite(100, 450, 'player');
    const block = this.add.sprite(200, 450, 'block');

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    player.body.setGravityY(300);
    this.physics.add.collider(player, block);
}

function update() {
}