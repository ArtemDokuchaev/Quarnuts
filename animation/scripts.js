"use strict"
function turnTheLight( event ){
	document.getElementById('LightBulb').classList = 'turnOn';
}



document.getElementById( 'TurnOn' ).addEventListener( 'click', turnTheLight );