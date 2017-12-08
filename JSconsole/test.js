/*  //inserting script into a document; won't handle syntax errors;
    var Script = document.createElement ( "script" );
    Script.textContent = ( PreCode );
    try{
        document.head.appendChild( Script );
    } catch (err){
        alert( 'Ошибка' + err.name + ':' + err.message + '\n' + err.stack );
    }*/
    function processCommand ( e ) {
    e.preventDefault();
    var str = e.target[ 0 ].value;

    try {

        var code = document.createElement( "section" );
        code.innerText = str + "\n";    

        var ResultArea = document.getElementById( "ResultArea" );
        var response = document.createElement( "section" );
        response.classList = "success";
        response.innerText = eval( str ) + "\n";
        ResultArea.appendChild( code );
        ResultArea.appendChild( response );
        ResultArea.scrollTo(0,ResultArea.scrollHeight);

    } catch ( err ) {

        ResultArea = document.getElementById( "ResultArea" );
        response = document.createElement( "section" );
        response.classList = "error";
        response.innerText = "Ошибка: " + err.name + "; " + err.message + "\n" + err.stack + "\n";
        ResultArea.appendChild( response );
        ResultArea.scrollTo( 0,ResultArea.scrollHeight );
        console.log(ResultArea.scrollHeight);

    }

}

document.getElementById( 'PreCode' ).addEventListener( "submit", processCommand );
document.addEventListener( 'keypress', function ( e ) {

    if ( e.charCode === 13 && e.shiftKey ) {
        e.preventDefault();
        document.getElementById( "Button" ).click();
    }

} );