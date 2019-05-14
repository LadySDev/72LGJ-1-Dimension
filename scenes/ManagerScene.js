import { GameScene } from './GameScene.js';


export class ManagerScene extends Phaser.Scene{

	constructor() {

		super({ key: 'ManagerScene', actve: true});
		
	}

	preload(){
	
		 this.load.image('tileset', '../resources/tileset.png');
	
		this.load.tilemapTiledJSON('1erjson', '../1.json');
		this.load.tilemapTiledJSON('2emejson', '../2.json');
		this.load.tilemapTiledJSON('tiledNW', '../resources/TiledNW.json');
		this.load.image('tileset2', '../resources/TiledTileset.tsx');


	}

	create(){
	
		console.log("ManagerScene create");

		this.scene.add('GameScene', GameScene, true);
		
	}
	
	update(){
		
	}

}