document.addEventListener('DOMContentLoaded', (event) => {
    var time_display = document.querySelector('.time_display');
    var reset = document.getElementById('Reset');
    var start = document.getElementById('Start');
    var stop = document.getElementById('Stop');
    var msec = 0;
    var secs = 0;
    var min = 0;
    let timerid = null;

    start.addEventListener('click', function () {
        if (timerid !== null) {
            clearInterval(timerid);
        }
        timerid = setInterval(start_timer, 10);
    });

    stop.addEventListener('click', function () {
        clearInterval(timerid);
        timerid = null;
    });

    reset.addEventListener('click', function () {
        clearInterval(timerid);
        timerid = null;
        msec = 0;
        secs = 0;
        min = 0;
        time_display.innerHTML = '00:00:00';
    });

    function start_timer() {
        msec++;
        if (msec == 100) {
            msec = 0;
            secs++;
            if (secs == 60) {
                secs = 0;
                min++;
            }
        }
    
        let msec_string = msec < 10 ? `0${msec}` : msec;
        let secs_string = secs < 10 ? `0${secs}` : secs;
        let min_string = min < 10 ? `0${min}` : min;

        time_display.innerHTML = `${min_string}:${secs_string}:${msec_string}`;
    }
});
