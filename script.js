const config = {
    type: Phaser.AUTO,
    width: 320,
    height: 240,
    zoom: 2,
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

let levels;

let player;

function preload() {
    this.load.image('player', 'assets/player.png');
    this.load.image('tileset', 'assets/tiles.png');
    // this.load.tilemapTiledJSONExternal('map', 'assets/map.json');
    this.load.tilemapTiledJSONExternal('map', 'assets/map2.json');
}

async function create() {
    player = this.physics.add.sprite(60, 100, 'player');

    levels = await (await fetch('assets/levels.json')).json();

    const map = this.make.tilemap({
        key: 'map',
        tileWidth: 16,
        tileHeight: 16
    });
    const tileset = map.addTilesetImage('tiles', 'tileset');
    
    const backLayer = map.createStaticLayer(0, tileset, 0, 0);
    const platLayer = map.createDynamicLayer(1, tileset, 0, 0);

    platLayer.setCollisionByProperty({ collides: true });

    this.physics.add.collider(player, platLayer);

    player.body.setGravityY(50);
}

function update() {
    cursors = this.input.keyboard.createCursorKeys();

    if (cursors.left.isDown) {
        player.body.velocity.x += -50;
    }
    else if (cursors.right.isDown) {
        player.body.velocity.x += 50;
    }

    if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-500);
    }

    player.body.velocity.x *= 0.9;

    console.log(player.body.x, player.body.y);
}