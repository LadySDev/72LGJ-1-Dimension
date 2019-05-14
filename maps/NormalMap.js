export class NormalMap{

	constructor(){

		this.groundData = [
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
			[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
			[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
			[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
			[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
			[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
			[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
			[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
			[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
			[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
			[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
			[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
			[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
			[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
			[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],			
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
		];

		this.doorData = [
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,20,21,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,40,41,42,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,60,61,62,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
		];

		this.spawnPoint = [2, 6];

		this.config = {			
			height: 17,				
			tileHeight: 40,	
			tileWidth: 40,			
			width: 22					
		}

		this.layersPosX = -40;
		this.layersPosY = -40;

	}
	
	createSprite(scene, tileX, tileY,offsetX, offsetY, bodyWidth, bodyHeight){

		var sprite = scene.physics.add.sprite(this.layersPosX + tileX * this.config.tileWidth, this.layersPosY + tileY * this.config.tileHeight, null, null)﻿.setOrigin(0.0, 0.0).setVisible(false);﻿                
        sprite.body.setOffset(offsetX, offsetY);
        sprite.body.width = bodyWidth;
        sprite.body.height = bodyHeight;﻿﻿
		sprite.body.setImmovable(true);
		return sprite;

	}

	createMap(scene){

		this.obstacles = scene.add.group();

		this.map = scene.make.tilemap(this.config);		
		this.tiles = this.map.addTilesetImage('tileset');
		this.ground = this.map.createBlankDynamicLayer('ground', this.tiles, this.layersPosX, this.layersPosY);

		for(var r=0;r<this.groundData.length;r++){
			for(var c=0;c<this.groundData[r].length;c++){
				this.ground.putTileAt(this.groundData[r][c], c, r);
				
			}
		}

		this.ground.forEachTile(tile => {

			if(tile.index === 1){
							
				var mapBorder = this.createSprite(scene, tile.x, tile.y, 0, 0, 40, 40);
                this.obstacles.add(mapBorder);﻿

			}

		});

		this.door = this.map.createBlankDynamicLayer('door', this.tiles, this.layersPosX, this.layersPosY);

		for(var r=0;r<this.doorData.length;r++){
			for(var c=0;c<this.doorData[r].length;c++){
				this.door.putTileAt(this.doorData[r][c], c, r);
			}
		}

		this.door.forEachTile(tile => {

			if(tile.index === 20){

				var portalCornerTopLeft = this.createSprite(scene, tile.x, tile.y, 40-11, 40-11, 11, 11);
				this.obstacles.add(portalCornerTopLeft);﻿

			}
			else if(tile.index === 21){

				var portalTop = this.createSprite(scene, tile.x, tile.y, 0, 40-11, 40, 11);
				this.obstacles.add(portalTop);﻿

			}
			else if(tile.index === 22){

				var portalCornerTopRight = this.createSprite(scene, tile.x, tile.y, 0, 40-11, 11, 11);
				this.obstacles.add(portalCornerTopRight);﻿

			}
			else if(tile.index === 40){

				var portalLeft = this.createSprite(scene, tile.x, tile.y, 40-11, 0, 11, 40);
				this.obstacles.add(portalLeft);﻿

			}
			else if(tile.index === 42){

				var portalRight = this.createSprite(scene, tile.x, tile.y, 0, 0, 11, 40);
				this.obstacles.add(portalRight);﻿

			}

		});

	}

}