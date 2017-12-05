"use strict";
function cancelSubmit( event ) {

     event.preventDefault();
     console.dir( event );

}

function ctrlPressed( event ) {

    if ( event.charCode === 10 ) {
        document.getElementById('SubmitButton').click();
    }

}

function commandHandler( event ) {
    cancelSubmit( event );
    var Code = event.target[ 0 ].value;
    console.log( Code ); 
    var Result = document.getElementById( 'Result' ),
        PreCode = document.getElementById( 'PreCodeText' );
    Result.innerHTML = Result.value + '\n' + Code + '\n';

    try {
        Result.innerHTML = Result.value + '\n' + eval( Code ) + '\n';
        Result.scrollTo(0,Result.scrollHeight);

    } catch ( err ) {

        var ErrorText = 'Error:\n' + err.name + ':' + err.message + '\n' + err.stack; 
        console.log( ErrorText );
        Result.innerHTML = Result.value + '\n' + ErrorText + '\n';


        Result.scrollTo(0,Result.scrollHeight);
    }
}

document.getElementById( "PreCodeForm" ).addEventListener( 'submit', commandHandler );
PreCodeText.addEventListener('keypress', ctrlPressed );