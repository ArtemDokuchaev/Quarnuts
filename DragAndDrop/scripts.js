'use strict'
var DragObject = document.getElementById( 'DragObject' );
var i = false;

DragObject.onmousedown(DragByClick); 
function DragByClick( e ) {

        i = !i;
        var coords = getCoords( DragObject );
        var shiftX = e.pageX - coords.left;
        var shiftY = e.pageY - coords.top;

        DragObject.style.position = 'absolute';
        document.body.appendChild( DragObject );
        moveAt( e );
        DragObject.style.zIndex = 1000; // над другими элементами

        function moveAt( e ) {
            DragObject.style.left = e.pageX - shiftX + 'px';
            DragObject.style.top = e.pageY - shiftY + 'px';
        }
        document.onmousemove = function(e) {
            moveAt(e);
        };
        if( i === false ){
            document.onmousemove = null;
        }
    }
    
/*    DragObject.onmouseup = function() {
        document.onmousemove = null;
        DragObject.onmouseup = null;
    };
*/
function createObject(){
    var ObjectToDrag = createElement( 'div' );
    
}

DragObject.ondragstart = function() {
    return false;
};

function getCoords( elem ) { // кроме IE8-
    var box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}
document.getElementById( 'CreateButton' ).addEventListener( 'click', createObject );