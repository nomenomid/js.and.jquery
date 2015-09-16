define(function() {
    return function() {
        var inactivityIndicator = bySelector("#inactivityTimer")[0];
        var lapsedTime = -1;
        var timerSec;
        var timer30Sec;
        
        function updateLapsedTime() {
            inactivityIndicator.textContent = ++lapsedTime;
            timerSec = setTimeout(updateLapsedTime, 1000);
        }

        document.addEventListener("click", function() {
            inactivityIndicator.textContent = 0;
            clearTimeout(timerSec);
            clearTimeout(timer30Sec);
            lapsedTime = -1;
            timer30Sec = setTimeout(updateLapsedTime, 30000);
        }.andExecuteOnce());
    }; 
});