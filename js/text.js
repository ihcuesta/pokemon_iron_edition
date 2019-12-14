function textIntro(text) {
    var writer = "";
    writer.length = 0; //Limpiar el string
    var maxLength = text.length;
    var count = 0;
    var speed = 3000 / maxLength; //La velocidad varía dependiendo de la cantidad de caracteres

    var write = setInterval(function () {

        if (count > text.length) {
            clearInterval(write);
        }

        writer += text.charAt(count);
        document.getElementById("dynamic").innerHTML = writer;
        count++;

    }, speed);

   }