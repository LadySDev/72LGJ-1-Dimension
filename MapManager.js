import { NormalMap } from './maps/NormalMap.js';

export class MapManager{

	constructor(scene) {
		
		this.normalMap = new NormalMap();
		
	}

	createNormalMap(scene){

		this.normalMap.createMap(scene);

	}

}