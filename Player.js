export class Player{

	constructor(){

		this.playerMove = 80;
		this.sprite = null;

	}

	createSprite(scene, posX, posY, textureKey){

		this.sprite = scene.physics.add.sprite(posX, posY, textureKey);
		this.sprite.setOrigin(0.5, 1.0);

	}

}