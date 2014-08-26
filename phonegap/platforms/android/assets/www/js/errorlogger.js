/**
 * Global logging method
 * 
 * @param String msg The message to log
 * @param Object obj Any plain object
 * @param String level TRACE, DEBUG, ERROR, WARN
 */
function errorLogger(msg, obj, level) {

  "use strict";

  if (!level) {
    level = 'log';
  }

  var trace = "";
  if (level === 'trace') {

    try {
      throw new Error("tmp");
    } catch (e) {
      msg = msg + " \n" 
                + e.stack ? 
                  e.stack : 
                  e.sourceURL + ":" + e.line;
    }
  }

  // Developing in desktop browser
  // using console.log, console.error,...
  if (window.location.href.indexOf("http://") > -1 
   || window.location.href.indexOf("https://") > -1) {

    console[level !== 'trace' ? level : 'debug'](msg);
    if (obj) {
      obj = JSON.stringify(obj, null, " ");
      console[level !== 'trace' ? level : 'debug'](obj);
    }

  // Live mode in PhoneGap container
  } else {

    // Add a timestamp
    var now = new Date();
    var stamp = [
        (now.getHours().length < 10 ? 
           '0' + now.getHours() : 
            now.getHours()),
        (now.getMinutes() < 10 ? 
           '0' + now.getMinutes() : 
            now.getMinutes()), 
         now.getMilliseconds()].join(".");
    msg = "[" + stamp + "] [" + level.toUpperCase() + "] " + msg;

    // Build request
    var xmlHttp = new XMLHttpRequest();
    var param = 'message=' + encodeURI(msg);
 
    if (obj) {
      param += '&obj=' + 
        encodeURI(JSON.stringify(obj, null, " "));
    }

    // send to server
    xmlHttp.open("GET", 
                 'https://HOST/PATH/TO/SCRIPT/?' + param, 
                 true);
    xmlHttp.send(null);
  }
}
