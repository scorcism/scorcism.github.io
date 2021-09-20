
const mymusic = new Audio();
mymusic.src = "../stuffs/letHerGo.mp3";
const playMusic = () => {
    mymusic.play();
    mymusic.volume=0.1;
}
const pauseMusic = () => {
    mymusic.pause();
}


$(document).ready(function () {

    $('.shake-eshake').hover(
        function () { $(this).addClass('animate__heartBeat') },
    )

    $('#contactme').hover(
        function () { $(this).addClass('animate__flipInX') },
    )

    $('.move-ing').hover(
        function () { $(this).addClass('animate__headShake') },
    )

});