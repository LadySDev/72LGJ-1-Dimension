export class Player{

	constructor(){
				
		this.playerMove = 80;
		this.sprite = null;

	}

	createSprite(scene, posX, posY){

		this.sprite = scene.physics.add.sprite(posX, posY, '');
		this.sprite.setOrigin(0.5, 1.0);
		this.sprite.setDepth(1);

	}

}