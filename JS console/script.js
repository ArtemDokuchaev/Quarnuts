function cancelSubmit( event ) {

     event.preventDefault();
     console.dir( event );

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
        eval( PreCode );
        Result.innerHTML = Result.value + eval( PreCode.value );



    } catch ( err ) {

        var ErrorText = 'Error:\n' + err.name + ':' + err.message + '\n' + err.stack; 
        console.log( ErrorText );
        Result.innerHTML = Result.value + '\n' + ErrorText + '\n';

    }
}

SubmitButton.addEventListener( 'click', insertField );
PreCodeText.addEventListener('keypress', ctrlTrigger );