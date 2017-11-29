    /*function someFunc () {
                    alert( document.getElementById("txt" ).value);
                }
                document.getElementById( "btn" ).onclick = someFunc;*/

    function cancelSubmit(event) {
        event.preventDefault;
    }

    function showField() {
        console.log(document.getElementById("txt1").value);
    }

    function insertField(event) {
        event.preventDefault;
        var PreCode = document.getElementById('Result'),
            Result = document.getElementById('txt1').value;

        PreCode.innerHTML = Result;
    }

    btn.addEventListener('click', insertField);
    //btn.addEventListener( 'click', insertField );
    //cancleSubmit();