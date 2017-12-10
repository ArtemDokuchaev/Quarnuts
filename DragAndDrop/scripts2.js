'use strict'
var i = false;
/*    DragObject.onmouseup = function() {
		document.onmousemove = null;
		DragObject.onmouseup = null;
	};
*/
function moveAt(e, DragObject) {

	DragObject.style.left = e.pageX - shiftX + 'px';
	DragObject.style.top = e.pageY - shiftY + 'px';

}
function getCoords( elem ) { // кроме IE8-
	
	var box = elem.getBoundingClientRect();
	return {
		top: box.top + pageYOffset,
		left: box.left + pageXOffset
	};

}
document.getElementById( 'AddButton' ).addEventListener( 'click', function( e ){
	
	if ( ! document.getElementById( 'DraggableObject' ) ){
		
		var DraggableObject = document.createElement( 'div' );
		DraggableObject.id = 'DraggableObject';
		DraggableObject.classList.add( 'draggable' );
		document.body.appendChild( DraggableObject );
		var shiftX = e.pageX - coords.left;
		var shiftY = e.pageY - coords.top;
		var DragObject = document.getElementById( 'DraggableObject' );
		moveAt( e, DragObject );
		document.onmousemove = function( e ) {
			moveAt( e );
		};
		
	}
	
});
DragObject.onmousedown = function( e ) {

		i = !i;
		var coords = getCoords( DragObject );

		DragObject.style.position = 'absolute';
		document.body.appendChild( DragObject );
		moveAt( e );
		DragObject.style.zIndex = 1000; // над другими элементами

		if( i === false){
			document.onmousemove = null;
		}

}
DragObject.ondragstart = function() {
	return false;
};