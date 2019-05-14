import { MapManager } from '../MapManager.js';
import { Player } from '../Player.js';

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

		this.mapManager.createNormalMap(this);
		this.currentMap = this.mapManager.normalMap;
		this.spawnPoint = this.currentMap.spawnPoint;

		this.player = new Player();
		this.player.createSprite(this, this.spawnPoint[0]*40 - 40 + 20, this.spawnPoint[1]*40 - 40, null);

		this.input.keyboard.on('keydown_Z', function (event) {
					
			this.player.sprite.setVelocityX(0);
			this.player.sprite.setVelocityY(- this.player.playerMove);

		}, this);

		this.input.keyboard.on('keyup_Z', function (event) {
							
			this.player.sprite.setVelocityY(0);

		}, this);

		this.input.keyboard.on('keydown_Q', function (event) {

			this.player.sprite.setVelocityX(- this.player.playerMove);
			this.player.sprite.setVelocityY(0);

		}, this);

		this.input.keyboard.on('keyup_Q', function (event) {
							
			this.player.sprite.setVelocityX(0);

		}, this);

		this.input.keyboard.on('keydown_S', function (event) {

			this.player.sprite.setVelocityX(0);
			this.player.sprite.setVelocityY(this.player.playerMove);

		}, this);

		this.input.keyboard.on('keyup_S', function (event) {
							
			this.player.sprite.setVelocityY(0);

		}, this);

		this.input.keyboard.on('keydown_D', function (event) {

			this.player.sprite.setVelocityX(this.player.playerMove);
			this.player.sprite.setVelocityY(0);

		}, this);

		this.input.keyboard.on('keyup_D', function (event) {
							
			this.player.sprite.setVelocityX(0);

		}, this);

		this.physics.add.collider(this.player.sprite, this.currentMap.ground);
		this.physics.add.collider(this.player.sprite, this.currentMap.obstacles);
		this.physics.add.collider(this.player.sprite, this.currentMap.door);

	}
	
	update(){
		
	}

}