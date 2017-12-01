 /*function someFunc () {
                 alert( document.getElementById("txt" ).value);
             }
             document.getElementById( "btn" ).onclick = someFunc;*/
function cancelSubmit ( event ) {
     event.preventDefault();
}
function showField () {
     console.log(document.getElementById ( "PreCodeText" ).value);
}
function insertField ( event ) {
    cancelSubmit( event );
    showField ();
    var Result = document.getElementById ( 'Result' ),
        PreCode = document.getElementById ( 'PreCodeText' ).value;
    Result.innerHTML = Result.value + '\n' + PreCode;

    var Script = document.createElement ( "script" );
    Script.textContent = ("try{ " + PreCode + "}catch(err){alert(\'Ошибка\' + err.name + \':\' + err.message + \'\\n\' + err.stack);}");
    document.head.appendChild( Script );
}

btn.addEventListener ( 'click', insertField );