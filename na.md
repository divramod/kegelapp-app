Current
====================
34. Register User from Frontend to Backend
  - 

Next
====================

32. authentication service
  - onLoginSuccess event:
    - write username to menu-div
    - go to home
      - Hallo Arvid!
  - https://medium.com/opinionated-angularjs/techniques-for-authentication-in-angularjs-applications-7bbf0346acec
  - create a ApplicationController 
33. login view
29. list files in Ergebnisse
  - create a service that runs upon startup and creates the needed directories for the app
  - create directory structure:
    - kapp/players
    - kapp/players/divramod/games
    - kapp/players/divramod/playerdata.json
    - kapp/results
    - kapp/results
    - kapp/settings.json
      - who is currently logged in / is somebody currently logged in?
  - save some games
  - load the games

Next Actions new
====================
30. create user service / user view
  - login
  - logout
  - deleteUser
  - createUser
  - updateUser
  - loadUser
28. root phone
  - why: damit ich sinnvolle tools installieren kann
  - read: Rooting - is it for me?: http://www.androidcentral.com/rooting-it-me-some-qa
  - read: how to root: http://www.androidcentral.com/root
  - later: http://stackoverflow.com/questions/18014779/similar-command-to-linux-tree-command-in-adb-shell
27. list android files with adb
  - adb shell && ls
26. create general error log function
24. view für messages
23. view für aktiviäten
22. view für user
21. eingabe: progressbar für wurfanzahl
18. write menu service
  - http://viralpatel.net/blogs/angularjs-service-factory-tutorial/
16. create a ng-service for reading and writing to a file
17. write script, that creates
  - einstellungen
  - bahnen
  - vereine
15. mod bahn
13. make gruntfile for app

Next Actions
===============================================================
4. make a picture an save it
  * https://blogs.oracle.com/geertjan/entry/from_angularjs_seed_to_cordova
7. create and integrate a logo
- load installation settings and data from server
20. write sqlite service

DONE
===============================================================

2014.06.13
--------------------

34. create nodejs api server
  - kapp.divra.de
  - upload server
  - register via mongo?

  - problem acces-not-allowed-oring
    - solved with installing connect-phonegap 0.11.0
    - use kapp.divra.de/api with phonegap-developer-app (register user)
      - https://github.com/phonegap/phonegap-app-developer/issues/98 
      - https://github.com/phonegap/connect-phonegap/issues/51 
      - gist https://github.com/phonegap/connect-phonegap/commit/8bbc5fd465f0cadaf6d6df296d12f9c012985476 
      - https://www.npmjs.org/doc/files/npm-folders.html: /usr/lib/node_modules/phonegap

2014.06.09
--------------------

25. save game-data in file
  - how to name the file?
  - when to name the file?
2014.06.07
19. write a promises in kontext with FileService
  - http://forum.ionicframework.com/t/cordova-filesystem-async/3244

2014.06.05
--------------------

14. make tmux-file for debugging
9. trigger event device ready for local dev mode
6. use the debug console
  * https://developer.appcelerator.com/question/113671/debugging-the-app-in-android-phone
  * http://developer.android.com/tools/help/logcat.html
  * http://stackoverflow.com/questions/2314886/how-can-i-debug-javascript-on-android
  * https://github.com/phonegap/phonegap/wiki/Debugging-in-PhoneGap
  * https://developers.google.com/chrome-developer-tools/docs/remote-debugging
  * http://stackoverflow.com/questions/6854127/filter-logcat-to-get-only-the-messages-from-my-application-in-android 
  * http://stackoverflow.com/questions/21332853/is-there-a-real-solution-to-debug-cordova-apps 
  * adb logcat | grep `adb shell ps | grep com.kegelapp.app | cut -c10-15`
10. implement try/catch to see javascript errors
  - http://pjsdev.blogspot.de/2013/05/phonegap-remote-error-logging-incl.html
  - http://jsconsole.com/remote-debugging.html#videos 
  - done with adb and phonegap serve
11. menu
12. make tmux file for project
1. Angular Bootstrap
  * http://stackoverflow.com/questions/21556090/cordova-angularjs-device-ready
  * http://www.ng-newsletter.com/posts/angular-on-mobile.html
  * https://github.com/mcasimir/mobile-angular-ui
  * https://github.com/zefhemel/persistencejs
8. code app local (because it needs to much time to deploy to the device)
  * create a local server to serve files and have workflow
  * http://app.phonegap.com/
  * http://stackoverflow.com/questions/18174511/is-there-a-difference-between-phonegap-and-cordova-commands
5. create a menu
  * http://www.raymondcamden.com/index.cfm/2012/5/30/Example-of-adding-menu-support-to-a-PhoneGap-Application
