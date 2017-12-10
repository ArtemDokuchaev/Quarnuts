'use strict';
/**
*@Name	Cancel submit
*@About	Preventing submit event and showing event details in console
*@Params	[ Event ] event
*@Author	ArtemD
*@Return	Void
*/
function cancelSubmit( event ) {

	event.preventDefault();
	console.dir( event );

}

/**
*@Name	Ctrl button is  pressed
*@About	Checking if Ctrl+Enter is pressed
*@Params	[ Event ] event
*@Author	ArtemD
*@Return	Void
*/
function ctrlPressed( event ) {

	if ( event.charCode === 10 ) {
		document.getElementById( 'SubmitButton' ).click();
	}

}

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

	cancelSubmit( event );
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
PreCodeArea.addEventListener('keypress', ctrlPressed );