window.onload= function() {

    var theCanvas = document.getElementById("Canvas1");
    if (theCanvas && theCanvas.getContext) {
        var ctx = theCanvas.getContext('2d');
        if (ctx) {
            var theString = "Canvas Text";


            //stroke and Fill Text
            ctx.font = "40pt arial";
            ctx.fillStyle = "#6bc2c1";
            ctx.textBaseline = "middle";
            ctx.strokeStyle = "rgba(0,455,0,.5)";
            ctx.fillText(theString, 20, 160);
            ctx.strokeText(theString, 20, 160);


        }
    }


    var theCanvas = document.getElementById("Canvas2");
    if (theCanvas && theCanvas.getContext) {
        var ctx = theCanvas.getContext('2d');
        if (ctx) {

            for (var i = 0; i < 10; i++) {
                ctx.beginPath();
                ctx.lineWidth = 1 + i;
                ctx.moveTo(25, 25 + i * 15);
                ctx.lineTo(475, 25 + i * 15);
                ctx.stroke();

            }

        }

    }
};