'use strict'
var DragObject = document.getElementById( 'DraggableObject' );
var Clicked = false;

function moveObject( event ){
    
    if ( DragObject ){
        
        DragObject.onmousedown = function( e ) {

        Clicked = !Clicked;
        var coords = getCoords( DragObject );
        var shiftX = e.pageX - coords.left;
        var shiftY = e.pageY - coords.top;
     
        DragObject.style.zIndex = 1000; // над другими элементами
        document.onmousemove = function(e) {
            moveAt( e, shiftX, shiftY );
        };
        if( Clicked === false){
            document.onmousemove = null;
        }
        DragObject.ondragstart = function() {
            return false;
        };

        }

    }

}
            function moveAt( e, shiftX, shiftY ) {
                DragObject.style.left = e.pageX - shiftX + 'px';
                DragObject.style.top = e.pageY - shiftY + 'px';
            }
document.getElementById( 'CreateButton' ).addEventListener( 'click', function( event ){
    
    if ( ! DragObject ){
            
            var DraggableObject = document.createElement( 'div' );
            DraggableObject.id = 'DraggableObject';
            DraggableObject.classList.add( 'draggable' );
            document.body.appendChild( DraggableObject );
            DragObject = document.getElementById( 'DraggableObject' );
            moveObject( event );
            DragObject.click();
    }
} );
/*    DragObject.onmouseup = function() {
        document.onmousemove = null;
        DragObject.onmouseup = null;
    };
*/

function getCoords(elem) { // кроме IE8-
    var box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}

