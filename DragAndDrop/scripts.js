'use strict'
var Clicked = false;
document.getElementById( 'CreateButton' ).addEventListener( 'click', dragAndDrop );
document.body.addEventListener( 'click', deleteObject );
function dragAndDrop( event ){
	
	if ( ! document.getElementById( 'DraggableObject' ) ) {
			
		var DraggableObject = document.createElement( 'div' );
		DraggableObject.id = 'DraggableObject';
		DraggableObject.classList.add( 'draggable' );
		document.body.appendChild( DraggableObject );

		Clicked = !Clicked;
		var coords = getCoords( DraggableObject );
		var shiftX = event.pageX - coords.left;
		var shiftY = event.pageY - coords.top;

		DraggableObject.style.zIndex = 1000; // above other objects

		DraggableObject.addEventListener( 'click', function( event ){
			
			Clicked = !Clicked;
			coords = getCoords( DraggableObject );
			shiftX = event.pageX - coords.left;
			shiftY = event.pageY - coords.top;

		});
		document.addEventListener('mousemove', function( event ) {
			
			if( Clicked ){
				moveAt( event, shiftX, shiftY );
			}

		});
		document.ondragstart = function() {
			return false;
		};

	}

}
function moveAt( e, shiftX, shiftY ) {
		
		DraggableObject.style.left = e.pageX - shiftX + 'px';
		DraggableObject.style.top = e.pageY - shiftY + 'px';

}
function getCoords( elem ) { // except IE8-

	var box = elem.getBoundingClientRect();
	return {

		top: box.top + pageYOffset,
		left: box.left + pageXOffset

	};

}
function deleteObject( event ){

	if ( event.pageX >= DeleteButton.offsetLeft &&
		event.pageX <= DeleteButton.offsetLeft + DeleteButton.offsetWidth &&		
		event.pageY >= DeleteButton.offsetTop &&
		event.pageY <= DeleteButton.offsetHeight + DeleteButton.offsetTop &&
		!Clicked ) {
		document.body.removeChild( document.getElementById( 'DraggableObject' ) );

	}

}