import { NormalMap } from './maps/NormalMap.js';
import { LargeMap } from './maps/LargeMap.js';

export class MapManager{

	constructor(scene) {
		
		this.scene = scene;
		this.currentMap = null;

		this.normalMap = new NormalMap();
		this.largeMap = new LargeMap();
		
	}

	createNormalMap(posX, posY){
		
		if(this.currentMap !== null){
			this.currentMap.destroyMap(this.scene);
		}

		this.currentMap = this.normalMap.createMap(this.scene, posX, posY);
		
	}

	createLargeMap(posX, posY){
		
		if(this.currentMap !== null){
			this.currentMap.destroyMap(this.scene);
		}

		this.largeMap.createMap(this.scene, posX, posY);
		
	}

}