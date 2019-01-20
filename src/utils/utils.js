var moment = require('moment');

export const getDurationFotmatted = (seconds) => {
    var duration = moment.duration(seconds, "seconds");
    var time = "";
    var hours = duration.hours();
    if (hours > 0) { time = hours + ":" ; }
    time = time + duration.minutes() + ":" + duration.seconds();
    return time;
};