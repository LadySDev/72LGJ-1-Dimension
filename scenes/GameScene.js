import { MapManager } from '../MapManager.js';
import { Player } from '../Player.js';
import { NormalMap } from '../maps/NormalMap.js';
import { LargeMap } from '../maps/LargeMap.js';

export class GameScene extends Phaser.Scene{

	constructor() {

		super({ key: 'GameScene'});
		
	}

	init(data){

		this.managerScene = this.scene.get('ManagerScene');
		this.mapManager = new MapManager(this);
		this.player = new Player();
		this.spawnPoint = [10, 4];

	}

	preload(){
	
	}

	create(){
	
		this.mapManager.createNormalMap(this.spawnPoint[0]*40 - 40 + 20, this.spawnPoint[1]*40 - 40);

		this.physics.add.overlap(this.player.sprite, this.mapManager.normalMap.portal, this.overlapInPortalAction.bind(this));
		
		this.input.keyboard.on('keydown_Z', function (event) {
					
			if(this.player.sprite !== null){
				this.player.sprite.setVelocityX(0);
				this.player.sprite.setVelocityY(- this.player.playerMove);
			}
			
		}, this);

		this.input.keyboard.on('keyup_Z', function (event) {
			if(this.player.sprite !== null){
				this.player.sprite.setVelocityY(0);
			}
		}, this);

		this.input.keyboard.on('keydown_Q', function (event) {
			if(this.player.sprite !== null){
				this.player.sprite.setVelocityX(- this.player.playerMove);
				this.player.sprite.setVelocityY(0);
			}
		}, this);

		this.input.keyboard.on('keyup_Q', function (event) {
			if(this.player.sprite !== null){				
				this.player.sprite.setVelocityX(0);
			}
		}, this);

		this.input.keyboard.on('keydown_S', function (event) {
			if(this.player.sprite !== null){
				this.player.sprite.setVelocityX(0);
				this.player.sprite.setVelocityY(this.player.playerMove);
			}
		}, this);

		this.input.keyboard.on('keyup_S', function (event) {
			if(this.player.sprite !== null){				
				this.player.sprite.setVelocityY(0);
			}
		}, this);

		this.input.keyboard.on('keydown_D', function (event) {
			if(this.player.sprite !== null){
				this.player.sprite.setVelocityX(this.player.playerMove);
				this.player.sprite.setVelocityY(0);
			}
		}, this);

		this.input.keyboard.on('keyup_D', function (event) {
			if(this.player.sprite !== null){				
				this.player.sprite.setVelocityX(0);
			}
		}, this);

	}
	
	
	overlapInPortalAction(scene, object1, object2){
	
		if(this.mapManager.currentMap instanceof NormalMap){

			this.mapManager.createLargeMap(14 * 40 - 40 + 20, 7 * 40 - 40);
			this.activePortalLargeOverlap = true;

		}
		else if(this.mapManager.currentMap instanceof LargeMap){

			this.mapManager.createNormalMap(6 * 40 - 40 + 20, 7 * 40 - 40);
			this.activePortalNormalOverlap = true;

		}
		

	}

	update(){
		
		if(this.activePortalNormalOverlap === true){
			
			this.physics.add.overlap(this.player.sprite, this.mapManager.normalMap.portal, this.overlapInPortalAction.bind(this));
			this.activePortalNormalOverlap = false;
		}

		if(this.activePortalLargeOverlap === true){
			
			this.physics.add.overlap(this.player.sprite, this.mapManager.largeMap.portal, this.overlapInPortalAction.bind(this));
			this.activePortalLargeOverlap = false;
		}

	}

}