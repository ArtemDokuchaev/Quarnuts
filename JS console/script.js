    /*function someFunc () {
                    alert( document.getElementById("txt" ).value);
                }
                document.getElementById( "btn" ).onclick = someFunc;*/

   function cancelSubmit(event) {
        event.preventDefault();
    }

    function showField() {
        console.log(document.getElementById("PreCodeText").value);
    }

    function insertField(event) {

        cancelSubmit(event);
        showField();

        var Result = document.getElementById('Result'),
            PreCode = document.getElementById('PreCodeText').value;
        Result.innerHTML = PreCode;
    }

    btn.addEventListener('click', insertField);