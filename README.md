kegelapp-app
============

Times
====================
2014.06.13
2014.06.11 23.00- 
2014.06.10 21.00-01.00 (240)
2014.06.08 13.30-

Features
====================
Next
2014.06.12:
  - use kapp.divra.de/api with app: example
  - use kapp.divra.de/api with phonegap-developer-app (register user)
2014.06.11:
  - upload kapp.divra.de/api
2014.06.10: 
  - view log (login, register)
  - view user
  - server kapi erzeugt (koa api-boilerplate-example)
  - service authe 
2014.06.10; loop through game-files
2014.06.10: added View Ergebnisse
2014.06.09: write and read json file
2014.06.07: angular promise
2014.06.05: mobile angular ui, mobile angular ui mene
2014.06.01: angular bootstrap
2014.06.01: cordova device ready event, cordova menu button pressed event
2014.06.02: phonegap app
2014.06.0?: adb debug only special app
2014.06.08: cordova/phonegap bootstrap

Links
============================================================================
* http://docs.phonegap.com/en/3.4.0/guide_cli_index.md.html#The%20Command-Line%20Interface
* http://mobileangularui.com/docs/

Sort
====================
- http://stackoverflow.com/questions/3117095/stopping-an-android-app-from-console

Workflows
====================
- Create a new View
  - nutze einzahl für eintitätsname (zum bahn statt bahnen)
  - create folder in partials (bahn)
  - create file in partials-folder (bahn/bahn.html)
  - create menu item in index.html (Bahnen)
  - create controller in js/controllers.js
  - create route in js/app.js

Commands
====================
- pgkill (adb shell am force-stop com.adobe.phonegap.app)
- pgdebug (klappt leider noch nicht)

Index.html
====================
<link rel="stylesheet" type="text/css" href="css/index.css" />
<link rel="stylesheet" type="text/css" href="css/kapp.css" />
<script src="http://192.168.178.21:1234/target/target-script-min.js#anonymous"></script>
<div id="deviceready" class="blink" hidden>
    <p class="event listening">Connecting to Device</p>
    <p class="event received">Device is Ready</p>
</div>
<script type="text/javascript">
    //window._cordovaNative = true;
</script>

