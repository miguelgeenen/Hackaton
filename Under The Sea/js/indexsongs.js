document.getElementById('my_audio').play();

function play_audio(task) {
    if(task == 'home btn'){
        $(".song1").trigger('play');
    }

    if(task == 'stop'){
        $(".my_audio").trigger('pause');
        $(".my_audio").prop("currentTime", 0);
    }
}

keys = Object.keys(playlist);
$('.my_audio').append("<source id='sound_src' src=" + playlist[key[0]] + "type='audio/mpeg'>");


playlist = {
    'song1' : 'audio.mp3',
}
