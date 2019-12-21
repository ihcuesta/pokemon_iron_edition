function textIntro(text) {
    var writer = "";
    writer.length = 0; 
    var maxLength = text.length;
    var count = 0;
    var speed = 1000 / maxLength;

    var write = setInterval(function () {
        if (count > text.length) {
            clearInterval(write);
        }
        writer += text.charAt(count);
        document.getElementById("dynamic").innerHTML = writer;
        count++;
    }, speed);
}