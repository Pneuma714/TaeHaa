run = () => {
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

}

function create() {

}

function update() {

}
}

run();
run()
run()