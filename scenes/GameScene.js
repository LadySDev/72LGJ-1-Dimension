import { MapManager } from '../MapManager.js';

export class GameScene extends Phaser.Scene{

	constructor() {

		super({ key: 'GameScene'});
		
	}

	init(data){

		this.managerScene = this.scene.get('ManagerScene');
		this.mapManager = new MapManager(this);

	}

	preload(){
	
	}

	create(){
	
		console.log("GameScene create");

		this.player = this.physics.add.sprite(this.mapManager.spawnPoint[0]*40 - 40 + 20, this.mapManager.spawnPoint[1]*40 - 40, '');
		this.player.setOrigin(0.5, 1.0);
		this.player.playerMove = 80;

		this.input.keyboard.on('keydown_Z', function (event) {
					
			this.player.setVelocityX(0);
			this.player.setVelocityY(- this.player.playerMove);

		}, this);

		this.input.keyboard.on('keyup_Z', function (event) {
							
			this.player.setVelocityY(0);

		}, this);

		this.input.keyboard.on('keydown_Q', function (event) {

			this.player.setVelocityX(- this.player.playerMove);
			this.player.setVelocityY(0);

		}, this);

		this.input.keyboard.on('keyup_Q', function (event) {
							
			this.player.setVelocityX(0);

		}, this);

		this.input.keyboard.on('keydown_S', function (event) {

			this.player.setVelocityX(0);
			this.player.setVelocityY(this.player.playerMove);

		}, this);

		this.input.keyboard.on('keyup_S', function (event) {
							
			this.player.setVelocityY(0);

		}, this);

		this.input.keyboard.on('keydown_D', function (event) {

			this.player.setVelocityX(this.player.playerMove);
			this.player.setVelocityY(0);

		}, this);

		this.input.keyboard.on('keyup_D', function (event) {
							
			this.player.setVelocityX(0);

		}, this);

		this.physics.add.collider(this.player, this.mapManager.normalWorldGround);
		this.physics.add.collider(this.player,this.mapManager.obstacles);
		this.physics.add.collider(this.player, this.mapManager.normalWorldDoor);

		
		var debugGraphics = this.add.graphics().setAlpha(0.75);
		this.mapManager.normalWorldGround.renderDebug(debugGraphics, {
			tileColor: null, // Color of non-colliding tiles
			//collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
			//faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
		});
		this.mapManager.normalWorldDoor.renderDebug(debugGraphics, {
			tileColor: null, // Color of non-colliding tiles
			//collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
			//faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
		});
		
	}
	
	update(){
		
	}

}