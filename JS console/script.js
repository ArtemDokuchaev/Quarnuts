 /*function someFunc () {
                 alert( document.getElementById("txt" ).value);
             }
             document.getElementById( "SubmitButton" ).onclick = someFunc;*/
function cancelSubmit( event ) {
     event.preventDefault();
}

function ctrlTrigger( event ) {
    if ( event.charCode === 10 ) {
        document.getElementById('SubmitButton').click();
    }
}
function insertField( event ) {
    cancelSubmit( event );
    var Result = document.getElementById( 'Result' ),
        PreCode = document.getElementById( 'PreCodeText' );
    Result.innerHTML = Result.value + '\n' + PreCode.value + '\n';

    try {
        eval( PreCode.value );
    } catch ( err ) {
        var ErrorText = 'Error:\n' + err.name + ':' + err.message + '\n' + err.stack; 
        console.log( ErrorText );
        Result.innerHTML = Result.value + '\n' + ErrorText + '\n';
    }

/*  //inserting script into a document; won't handle syntax errors;
    var Script = document.createElement ( "script" );
    Script.textContent = ( PreCode );
    try{
        document.head.appendChild( Script );
    } catch (err){
        alert( 'Ошибка' + err.name + ':' + err.message + '\n' + err.stack );
    }*/
}

SubmitButton.addEventListener( 'click', insertField );
PreCodeText.addEventListener('keypress', ctrlTrigger );