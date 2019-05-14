export class MapManager{

	constructor(scene) {
		
		this.obstacles = scene.add.group();

		var nwGroundData = [
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

		var nwDoorData = [
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

		var normalWorldConfig = {			
			height: 17,				
			tileHeight: 40,	
			tileWidth: 40,			
			width: 22					
		}
		this.normalWorld = scene.make.tilemap(normalWorldConfig);
		
		this.normalWorldTiles = this.normalWorld.addTilesetImage('tileset');

		this.layersPosX = -40;
		this.layersPosY = -40;
		this.normalWorldGround = this.normalWorld.createBlankDynamicLayer('ground', this.normalWorldTiles, this.layersPosX, this.layersPosY);
		
		for(var r=0;r<nwGroundData.length;r++){
			for(var c=0;c<nwGroundData[r].length;c++){
				this.normalWorldGround.putTileAt(nwGroundData[r][c], c, r);
				
			}
		}
						
		this.normalWorldGround.forEachTile(tile => {

			if(tile.index === 1){

				var mapBorder = scene.physics.add.sprite(this.layersPosX + tile.x * 40, this.layersPosY + tile.y * 40, null, null)﻿.setOrigin(0.0, 0.0).setVisible(false);﻿                
                mapBorder.body.setOffset(0, 0);
                mapBorder.body.width = 40;
                mapBorder.body.height = 40;﻿﻿
				mapBorder.body.setImmovable(true);
                this.obstacles.add(mapBorder);﻿

			}

		});

		this.normalWorldDoor = this.normalWorld.createBlankDynamicLayer('door', this.normalWorldTiles, this.layersPosX, this.layersPosY);
		
		for(var r=0;r<nwDoorData.length;r++){
			for(var c=0;c<nwDoorData[r].length;c++){
				this.normalWorldDoor.putTileAt(nwDoorData[r][c], c, r);
			}
		}
			
		this.normalWorldDoor.forEachTile(tile => {

			if(tile.index === 20){

				var mapBorder = scene.physics.add.sprite(this.layersPosX + tile.x * 40, this.layersPosY + tile.y * 40, null, null)﻿.setOrigin(0.0, 0.0).setVisible(false);﻿                
				mapBorder.body.setOffset(40-11, 40-11);
				mapBorder.body.width = 11;
				mapBorder.body.height = 11;﻿﻿
				mapBorder.body.setImmovable(true);
				this.obstacles.add(mapBorder);﻿

			}
			else if(tile.index === 21){

				var mapBorder = scene.physics.add.sprite(this.layersPosX + tile.x * 40, this.layersPosY + tile.y * 40, null, null)﻿.setOrigin(0.0, 0.0).setVisible(false);﻿                
				mapBorder.body.setOffset(0, 40-11);
				mapBorder.body.width = 40;
				mapBorder.body.height = 11;﻿﻿
				mapBorder.body.setImmovable(true);
				this.obstacles.add(mapBorder);﻿

			}
			else if(tile.index === 22){

				var mapBorder = scene.physics.add.sprite(this.layersPosX + tile.x * 40, this.layersPosY + tile.y * 40, null, null)﻿.setOrigin(0.0, 0.0).setVisible(false);﻿                
				mapBorder.body.setOffset(0, 40-11);
				mapBorder.body.width = 11;
				mapBorder.body.height = 11;﻿﻿
				mapBorder.body.setImmovable(true);
				this.obstacles.add(mapBorder);﻿

			}
			else if(tile.index === 40){

				var mapBorder = scene.physics.add.sprite(this.layersPosX + tile.x * 40, this.layersPosY + tile.y * 40, null, null)﻿.setOrigin(0.0, 0.0).setVisible(false);﻿                
				mapBorder.body.setOffset(40-11, 0);
				mapBorder.body.width = 11;
				mapBorder.body.height = 40;﻿﻿
				mapBorder.body.setImmovable(true);
				this.obstacles.add(mapBorder);﻿

			}
			else if(tile.index === 42){

				var mapBorder = scene.physics.add.sprite(this.layersPosX + tile.x * 40, this.layersPosY + tile.y * 40, null, null)﻿.setOrigin(0.0, 0.0).setVisible(false);﻿                
				mapBorder.body.setOffset(0, 0);
				mapBorder.body.width = 11;
				mapBorder.body.height = 40;﻿﻿
				mapBorder.body.setImmovable(true);
				this.obstacles.add(mapBorder);﻿

			}

		});

		/*
		this.normalWorld = scene.make.tilemap({key: 'tiledNW'});		
		this.normalWorldTiles = this.normalWorld.addTilesetImage('tileset');
		this.normalWorldGround = this.normalWorld.createStaticLayer('ground', this.normalWorldTiles,0,0);
		this.normalWorldGround.setCollisionByProperty({ collides: true });
		this.normalWorldDoor = this.normalWorld.createStaticLayer('door', this.normalWorldTiles,0,0);
		this.normalWorldDoor.setCollisionByProperty({ collides: true });
		*/
	}

}