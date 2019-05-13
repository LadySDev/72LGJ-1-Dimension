import { GameScene } from './GameScene.js';


export class ManagerScene extends Phaser.Scene{

	constructor() {

		super({ key: 'ManagerScene', actve: true});
		
	}

	preload(){
	
		
	
	}

	create(){
	
		console.log("ManagerScene create");

		this.scene.add('GameScene', GameScene, true);
		
	}
	
	update(){
		
	}

}