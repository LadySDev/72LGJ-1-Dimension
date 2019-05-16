export class NormalMap{

	constructor(){

		this.groundData = [
			[0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], 
			[0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0], 
			[0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0], 
			[0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0], 
			[0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0],
			[0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0],
			[0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0],
			[0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0],
			[0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		];
		
		this.houseData = [
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0],
			[0, 0, 0, 0, 0, 5, 5, 5, 3, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 80, 81, 81, 82, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 100, 101, 101, 102, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 120, 121, 121, 122, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		];

		this.doorData = [
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 20, 21, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 40, 43, 42, 0, 0, 0, 0, 0, 0, 0, 0, 83, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 60, 61, 62, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		];

		this.windowData = [
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 106, 109, 105, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 105, 0, 103, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]		
		];

		this.config = {			
			height: 17,				
			tileHeight: 40,	
			tileWidth: 40,			
			width: 22					
		}

		this.layersPosX = -40;
		this.layersPosY = -40;

	}
	
	createSprite(scene, tileX, tileY, offsetX, offsetY, bodyWidth, bodyHeight){

		var sprite = scene.physics.add.sprite(this.layersPosX + tileX * this.config.tileWidth, this.layersPosY + tileY * this.config.tileHeight, null, null)﻿.setOrigin(0.0, 0.0).setVisible(false);﻿                
        sprite.body.setOffset(offsetX, offsetY);
        sprite.body.width = bodyWidth;
        sprite.body.height = bodyHeight;﻿﻿
		sprite.body.setImmovable(true);
		return sprite;

	}

	createMap(scene, playerPosX, playerPosY){
		
		this.obstacles = scene.add.group();
		scene.anims.create({
			key: 'spirale',
			frames: scene.anims.generateFrameNumbers('tileset', { start: 43, end: 46 }),
			frameRate: 3,
			repeat: -1,
			showOnStart: true
		});

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

		this.house = this.map.createBlankDynamicLayer('house', this.tiles, this.layersPosX, this.layersPosY);

		for(var r=0;r<this.houseData.length;r++){
			for(var c=0;c<this.houseData[r].length;c++){
				this.house.putTileAt(this.houseData[r][c], c, r);
				
			}
		}

		this.house.forEachTile(tile => {

			if(tile.index === 3){
							
				var wall = this.createSprite(scene, tile.x, tile.y, 0, 0, 40, 40);
                this.obstacles.add(wall);﻿

			}
			else if(tile.index === 4){
							
				var wall = this.createSprite(scene, tile.x, tile.y, 0, 0, 40, 40);
                this.obstacles.add(wall);﻿

			}
			else if(tile.index === 5){
							
				var wall = this.createSprite(scene, tile.x, tile.y, 0, 0, 40, 40);
                this.obstacles.add(wall);﻿

			}
			else if(tile.index === 80){

				var roofLeft = this.createSprite(scene, tile.x, tile.y, 0, 0, 40, 40);
				this.obstacles.add(roofLeft);﻿

			}
			else if(tile.index === 81){

				var roofTop = this.createSprite(scene, tile.x, tile.y, 0, 0, 40, 40);
				this.obstacles.add(roofTop);﻿

			}
			else if(tile.index === 82){

				var roofRight = this.createSprite(scene, tile.x, tile.y, 0, 0, 40, 40);
				this.obstacles.add(roofRight);﻿

			}
			else if(tile.index === 100){

				var wallTopLeft = this.createSprite(scene, tile.x, tile.y, 0, 0, 40, 40);
				this.obstacles.add(wallTopLeft);﻿

			}
			else if(tile.index === 101){

				var wallTop = this.createSprite(scene, tile.x, tile.y, 0, 0, 40, 40);
				this.obstacles.add(wallTop);﻿

			}
			else if(tile.index === 102){

				var wallTopRight = this.createSprite(scene, tile.x, tile.y, 0, 0, 40, 40);
				this.obstacles.add(wallTopRight);﻿

			}
			else if(tile.index === 120){

				var wallBottomLeft = this.createSprite(scene, tile.x, tile.y, 0, 0, 40, 40);
				this.obstacles.add(wallBottomLeft);﻿

			}
			else if(tile.index === 121){

				var wallBottom = this.createSprite(scene, tile.x, tile.y, 0, 0, 40, 40);
				this.obstacles.add(wallBottom);﻿

			}
			else if(tile.index === 122){

				var wallBottomRight = this.createSprite(scene, tile.x, tile.y, 0, 0, 40, 40);
				this.obstacles.add(wallBottomRight);﻿

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
			else if(tile.index === 43){

				this.portal = this.createSprite(scene, tile.x, tile.y, 0, 0, 40, 40);
				//this.portal.anims.load('spirale');
				//this.portal.anims.play('spirale');
				scene.anims.play('spirale', this.portal);
				
			}
			else if(tile.index === 42){

				var portalRight = this.createSprite(scene, tile.x, tile.y, 0, 0, 11, 40);
				this.obstacles.add(portalRight);﻿

			}

		});

		this.window = this.map.createBlankDynamicLayer('window', this.tiles, this.layersPosX, this.layersPosY);

		for(var r=0;r<this.windowData.length;r++){
			for(var c=0;c<this.windowData[r].length;c++){
				this.window.putTileAt(this.windowData[r][c], c, r);
				
			}
		}

		scene.player.createSprite(scene, playerPosX, playerPosY);

		this.playerGroundCollider = scene.physics.add.collider(scene.player.sprite, this.ground);
		this.playerObstaclesCollider = scene.physics.add.collider(scene.player.sprite, this.obstacles);
		this.playerHouseCollider = scene.physics.add.collider(scene.player.sprite, this.house);
		this.playerDoorCollider = scene.physics.add.collider(scene.player.sprite, this.door);

		return this;

	}
	
	destroyMap(scene){

		scene.physics.world.removeCollider(this.playerGroundCollider);
		scene.physics.world.removeCollider(this.playerObstaclesCollider);
		scene.physics.world.removeCollider(this.playerHouseCollider);
		scene.physics.world.removeCollider(this.playerDoorCollider);

		this.obstacles.destroy(true);
		this.portal.destroy();
		this.map.destroy();
		
		scene.player.sprite.destroy();
	}

}