var DragObject = document.getElementById('DragObject');

DragObject.onmousedown = function(e) { // 1. отследить нажатие

    // подготовить к перемещению
    // 2. разместить на том же месте, но в абсолютных координатах
    DragObject.style.position = 'absolute';
    moveAt(e);
    // переместим в body, чтобы мяч был точно не внутри position:relative
    document.body.appendChild(DragObject);

    DragObject.style.zIndex = 1000; // показывать мяч над другими элементами

    // передвинуть мяч под координаты курсора
    // и сдвинуть на половину ширины/высоты для центрирования
    function moveAt(e) {
        DragObject.style.left = e.pageX - DragObject.offsetWidth / 2 + 'px';
        DragObject.style.top = e.pageY - DragObject.offsetHeight / 2 + 'px';
    }

    // 3, перемещать по экрану
    document.onmousemove = function(e) {
        moveAt(e);
    }

    // 4. отследить окончание переноса
    DragObject.onmouseup = function() {я
        document.onmousemove = null;
        DragObject.onmouseup = null;
    }
    DragObject.ondragstart = function() {
        return false;
    };
}