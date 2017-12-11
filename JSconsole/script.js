'use strict';
/**
*@Name	Command handler
*@About	Processing commands given by user
*@Params	[ Event ] event
*@Author	ArtemD
*@Return	Void
*@Bug	Not protected by methods such as 'document.write();'
*ToDo	Check input value to prevent crashing of console
*/
function commandHandler( event ) {

	event.preventDefault();
	console.dir( event );
	var CodeText = event.target[ 0 ].value;
	console.log( CodeText ); 
	var ResultArea = document.getElementById( 'ResultArea' ),
		SectionCode = document.createElement( 'section' ),
		SectionReturn = document.createElement( 'section' );
	SectionCode.innerText = CodeText + '\n';
	SectionCode.classList = 'code';
	ResultArea.appendChild( SectionCode );
	try {

		SectionReturn.innerText = eval( CodeText ) + '\n';
		SectionReturn.classList = 'successCode';
		ResultArea.appendChild( SectionReturn );
		ResultArea.scrollTo( 0, ResultArea.scrollHeight );

	} catch ( error ) {

		var ErrorText = 'Error:\n' + error.stack + '\n'; 
		SectionReturn.innerText = ErrorText;
		SectionReturn.classList = 'errorCode';
		console.log( ErrorText );
		ResultArea.appendChild( SectionReturn );
		ResultArea.scrollTo( 0, ResultArea.scrollHeight );

	}

}

document.getElementById( 'PreCodeForm' ).addEventListener( 'submit', commandHandler );
PreCodeArea.addEventListener('keypress', function( event ) {
	
	if ( event.charCode === 10 ) {
		document.getElementById( 'SubmitButton' ).click();
	}

} );