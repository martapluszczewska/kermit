$(document).ready(function(){

    $('head').append('<link href="https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap" rel="stylesheet">');
    $('head').append('<link rel="stylesheet" type="text/css" href="style.css">');

    $('html').append('<body></body>');

    $('body').append('<main></main>');
        $('main').append('<header></header><img id="frog" src="kermit-px.png">');
            $('header').append('<div id="buttons"></div><div id="text">Punkty: 0 Poziom: 1</div>');
                $('#buttons').append('<div class="button" id="startButton">Start</div><div class="button" id="stopButton">Stop</div><div class="button" id="resetButton">Reset</div>');
    
    $('#frog').click(function(){
        addPoint();
    });
    $('#startButton').click(function(){
        start();
    });
    $('#stopButton').click(function(){
        stop();
    });
    $('#resetButton').click(function(){
        reset();
    });
});

numberOfPoints = 0;
poz = 1;

function start() {
    inter = setInterval(function(){
        los();
    }, 5000/poz);
}

function stop() {
    clearInterval(inter); 
}

function reset() {
    numberOfPoints = 0;
    poz = 1;
    var y = window.innerHeight - 128;

    stop();
    update();

    $("#frog").css("left", "0px");
    $("#frog").css("top", y + "px");
}

function los() {
    var winHeight = window.innerHeight;
    var winWidth = window.innerWidth;
    var frogHeight = 128;
    var frogWidth = 128;
    var zakresx = (winWidth - frogWidth);
    var zakresy = (winHeight - frogHeight);

    var wynikx = rand(0, zakresx);
    var wyniky = rand(0, zakresy);

    $("#frog").css("left", wynikx + "px");
    $("#frog").css("top", wyniky + "px");
    $("#frog").css("display", "inline");
}

function rand( min, max ){
    min = parseInt( min, 10 );
    max = parseInt( max, 10 );

    if ( min > max ){
        var tmp = min;
        min = max;
        max = tmp;
    }

    return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

function addPoint() {
    numberOfPoints += 1;
        update();

        if((numberOfPoints % 5) == 0) {
            poz += 1;
            clearInterval(inter);
            inter = setInterval(function(){
                los();
            }, (5000/poz));
        }
        $("#frog").css("display", "none");
        colorChange();
}

function update() {
    $("#text").text("Punkty: " + numberOfPoints + " Poziom: " + poz);
}

function colorChange() {
    var colors = ['#291047', '#47103c', '#103047', '#104735', '#4e7d14', '#278991', '#962a96'];
    var colorsLength = colors.length;

    var randomColor = rand(0, (colorsLength-1));

    $("main").css({"background-color":colors[randomColor], "transition":"background-color 0.5s ease"});

}
