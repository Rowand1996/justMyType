
$(document).keydown(function (e) {

    if (e.which == 16) {
        $("#keyboard-lower-container").toggle();
        $("#keyboard-upper-container").toggle();
    }
});

$(document).keyup(function (e) {
    if (e.which == 16) {
        $("#keyboard-lower-container").toggle();
        $("#keyboard-upper-container").toggle();
    }
    if (e.which == e.keyCode) {
        $(".key").removeClass("yellow");
    }
});

$(document).keypress(function (e){
    if (e.which == e.keyCode) {
        $("#" + e.keyCode).toggleClass("yellow");
    }
});



