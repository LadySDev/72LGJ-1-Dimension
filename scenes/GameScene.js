

export class GameScene extends Phaser.Scene{

	constructor() {

		super({ key: 'GameScene'});
		
	}

	init(data){

		this.managerScene = this.scene.get('ManagerScene');

	}

	preload(){
	
	}

	create(){
	
		console.log("GameScene create");

	}
	
	update(){
		
	}

}