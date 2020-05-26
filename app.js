
let sentences = ['ten ate neite ate nee enet ite ate inet ent eate',
    'Too ato too nOt enot one totA not anot tOO aNot',
    'oat itain oat tain nate eate tea anne inant nean',
    'itant eate anot eat nato inate eat anot tain eat',
    'nee ene ate ite tent tiet ent ine ene ete ene ate'];

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

$(document).keypress(function (e) {
    if (e.which == e.keyCode) {
        $("#" + e.keyCode).toggleClass("yellow");
    }
});
let sentenceCount = 0;
let count = 0;
// FIXME: The count should increment once you get to the end of the sentence therefore there should be a check that will conditionally loop this forEach
// String(sentences[count])
//     .split('')
//     .forEach((el) =>
//         $('#sentence').append(function () {
//             const characterSpan = document.createElement('span');
//             characterSpan.innerText = el;
//             return characterSpan;
//         })
//     );
$('#sentence').html(sentences[count]);

let nudge = 36;
$(document).keypress(function (e) {
    if(count === 5){
        return;
    }
    sentenceCount++;

    console.log(sentenceCount);
    if (sentenceCount === sentences[count].length + 1) {
        count++;
        sentenceCount = 0;
        nudge = 15;
        $("#sentence").html(sentences[count]);

    }
    if (e.which == e.keyCode) {
        console.log(e.key);
        $('#' + e.keyCode).toggleClass('yellow');
        $('#yellow-block').css({
            left: nudge,
        });
     
        nudge += 17;
       
        $('#target-letter').append(function () {

        });
       
        $('#feedback').append(function () {
            if ('end of sentence') {
            } else if ('correct') {
            } else if ('incorrect') {
            }
        });
    }
});
