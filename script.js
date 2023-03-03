
        const startText = document.getElementById("jtextarea1");
        const finalText = document.getElementById("jtextarea2");
        const buttonEncode = document.getElementById("jbtnEncode");
        const buttonDecode = document.getElementById("jbtnDecode");
        const buttonCopy = document.getElementById("jbtnCopy");
        const buttonRestart = document.getElementById("jbtnRestart");
        

        function encode(){
            let msj = startText.value.toLowerCase();
            var textEncoded = msj.replace(/e/igm,"enter");
            var textEncoded = textEncoded.replace(/o/igm,"ober");
            var textEncoded = textEncoded.replace(/i/igm,"imes");
            var textEncoded = textEncoded.replace(/a/igm,"ai");
            var textEncoded = textEncoded.replace(/u/igm,"ufat");

            finalText.value = textEncoded;

            document.getElementById("jbtnEncode").style.visibility = "hidden";
            document.getElementById("jbtnCopy").style.visibility = "visible";
            document.getElementById("jexclamation2").style.visibility = "visible";
            document.getElementById("jexclamation1").style.visibility = "hidden";
            
        }

        buttonEncode.onclick = encode;
        

        function decode(){
            let msj = startText.value.toLowerCase();
            var textDecoded = msj.replace(/enter/igm,"e");
            var textDecoded = textDecoded.replace(/ober/igm,"o");
            var textDecoded = textDecoded.replace(/imes/igm,"i");
            var textDecoded = textDecoded.replace(/ai/igm,"a");
            var textDecoded = textDecoded.replace(/ufat/igm,"u");

            finalText.value = textDecoded;

            document.getElementById("jbtnDecode").style.visibility = "hidden";
            document.getElementById("jexclamation3").style.visibility = "hidden";
            document.getElementById("jbtnRestart").style.display = "block";
    
        }

        buttonDecode.onclick = decode;

        

        function copy(){
            const textCopied = document.getElementById("jtextarea2");
            textCopied.select()
            document.execCommand("copy");
            startText.value = textCopied.value;
            const info = "Cuando hagas clic en el botón Descifrar verás aquí el resultado.";
            finalText.value = info;

            document.getElementById("jbtnCopy").style.visibility = "hidden";
            document.getElementById("jexclamation2").style.visibility = "hidden";
            document.getElementById("jexclamation3").style.visibility = "visible";
            document.getElementById("jbtnDecode").style.visibility = "visible";
            document.getElementById("jbtnEncode").style.visibility = "hidden";
            
            
        }

        buttonCopy.onclick = copy; 

        function refresh() {
            const restart = document.getElementById("jbtnRestart");
            location.reload();
        }

        buttonRestart.onclick = refresh;
            


        /*
        Probando funcion para copiar usando el clipboard
        function copy(){
            var textEncoded = finalText.value;
            navigator.clipboard.writeText(textDecoded);
        }

        */