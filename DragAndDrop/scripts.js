'use strict'
var Clicked = false;
document.getElementById( 'CreateButton' ).addEventListener( 'click', function( event ) {
	
	if ( ! document.getElementById( 'DraggableObject' ) ) {
			
		var DraggableObject = document.createElement( 'div' );
		DraggableObject.id = 'DraggableObject';
		DraggableObject.classList.add( 'draggable' );
		document.body.appendChild( DraggableObject );

		Clicked = !Clicked;
		var coords = getCoords( DraggableObject );
		var shiftX = event.pageX - coords.left;
		var shiftY = event.pageY - coords.top;

		DraggableObject.style.zIndex = 1000; // над другими элементами

		DraggableObject.addEventListener( 'click', function( e ){
		 	
		 	Clicked = !Clicked;
		 	coords = getCoords( DraggableObject );
		 	shiftX = e.pageX - coords.left;
			shiftY = e.pageY - coords.top;

		});
		document.addEventListener('mousemove', function( event2 ) {
			
			if( Clicked ){
				moveAt( event2, shiftX, shiftY );
			}

		});
		DraggableObject.ondragstart = function() {
			return false;
		};

	}
} );

function moveAt( e, shiftX, shiftY ) {

	DraggableObject.style.left = e.pageX - shiftX + 'px';
	DraggableObject.style.top = e.pageY - shiftY + 'px';

}

function getCoords( elem ) { // кроме IE8-
	var box = elem.getBoundingClientRect();
	return {
		top: box.top + pageYOffset,
		left: box.left + pageXOffset
	};
}