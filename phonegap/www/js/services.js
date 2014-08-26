/**********[ MENU SERVICE ]**********/
angular.module('kegelApp').service('MenuService', function() {
    this.setMenu = function() {
        //alert ("menu service called");
    };
});

/**********[ API SERVICE ]**********/
angular.module('kegelApp').service('ApiService', [
        '$location',
        '$rootScope',
        '$q',
        '$http',
    function($location, $rootScope, $q, $http) {

        /**********[ createUser() ]**********/
        /**
        this.getData = function(callbackFunc) {
            // $http() returns a $promise that we can add handlers with .then()
            alert ("test");
            return $http({
                method: 'GET',
                url: 'https://www.kapp.divra.de/stats/requests'
            });
        };
        **/

        this.getData = function() {
            $http.get('http://kapp.divra.de/stats/requests')
                .success(function(data) {
                // With the data succesfully returned, call our callback
                console.log(data);
            })
                .error(function(data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                //
                console.log(data);
            });
        };
    }
]);

/**********[ AUTHE SERVICE ]**********/
angular.module('kegelApp').service('AutheService', [
        '$location',
        '$rootScope',
        '$q',
    function($location, $rootScope, $q) {

        /**********[ isAuthenticated() ]**********/
        this.isAuthenticated = function() {
            return false;
        };

        /**********[ login() ]**********/
        this.login = function(credentials) {};

        /**********[ createUser() ]**********/
        this.register = function(credentials) {
            alert(credentials.username);
            $rootScope.user = {};
            $rootScope.user.username = "divramod";
        };

    }
]);


/**********[ STARTUP SERVICE ]**********/
angular.module('kegelApp').service('StartupService', [
        '$location',
        '$q',
        '$rootScope',
        'FileService',
        'AutheService',
    function($location, $q, $rootScope, FileService, AutheService) {
        //todo: logged in?
        //todo: directories existent?
        // todo login
        // todo createUser
        // todo changeUser
        // 

        this.user = "divramod";

        this.run = function() {
            if (AutheService.isAuthenticated()) {

            } else {
                $location.path("log");
            }
        };

        _proofUser = function() {
            // 1. load "kapp/settings.json"
            // 2. set $rootscope.player
        };

        _proofDirectories = function() {
            console.log("startup service called");

        };

        this.login = function() {

        };
    }
]);

// http://www.html5rocks.com/en/tutorials/file/filesystem/
/**********[ GAME SERVICE ]**********/
angular.module('kegelApp').service('GameService', ['$q', '$rootScope', 'FileService',
    function($q, $rootScope, FileService) {

        /**********[ createIdForGame ]**********/
        this.createIdForGame = function() {
            var spielId = new Date().getTime();
            return spielId;
        };
        /**********[ END createIdForGame ]**********/

        /**********[ saveGame() ]**********/
        this.saveGame = function(game) {
            var promise = FileService.saveFile(game.id.toString(), game);
            promise.then(function(success) {
                console.log('Success: ' + success);
            }, function(reason) {
                console.log('Failed: ' + reason);
            }, function(update) {
                console.log('Got notification: ' + update);
            });
        };
        /**********[ END saveGame() ]**********/

        /**********[ getGames() ]**********/
        this.loadGames = function() {
            var deferred = $q.defer();
            deferred.resolve([{
                    id: "23421",
                    startbahn: "1"
                }, {
                    id: "1235",
                    startbahn: "2"
                }, {
                    id: "1235",
                    startbahn: "2"
                }, {
                    id: "1235",
                    startbahn: "2"
                }, {
                    id: "1235",
                    startbahn: "2"
                }, {
                    id: "1235",
                    startbahn: "2"
                }, {
                    id: "1235",
                    startbahn: "2"
                }, {
                    id: "1235",
                    startbahn: "2"
                }, {
                    id: "1235",
                    startbahn: "2"
                }, {
                    id: "1235",
                    startbahn: "2"
                }, {
                    id: "1235",
                    startbahn: "2"
                },
            ]);

            return deferred.promise;
        };
        /**********[ END getGames() ]**********/

        /**********[ getGame() ]**********/
        // http://www.html5rocks.com/en/tutorials/file/filesystem/
        this.loadGame = function(gameId) {
            var deferred = $q.defer();

            /**********[ LEVEL 1 ]**********/
            window.requestFileSystem(window.PERSISTENT, 1024 * 1024, function(filesystem) { // SUCCESS requestFileSystem
                deferred.notify("notify requestFileSystem");
                /**********[ LEVEL 2 ]**********/
                filesystem.root.getFile(gameId, {}, function(fileEntry) { // SUCCESS getFile
                    deferred.notify("notify getFile");

                    /**********[ LEVEL 3 ]**********/
                    fileEntry.file(function(file) { // SUCCESS file()
                        deferred.notify("notify file");
                        var reader = new FileReader();
                        var resultMe = "";
                        reader.onloadend = function(e) {
                            console.log(this.result);
                            resultMe = this.result;
                            $rootScope.$apply(deferred.resolve(resultMe));
                        };
                        reader.readAsText(file);
                    }, function(e) { // LEVEL 3 ERROR file()
                        deferred.reject("LEVEL 3: " + e.toString());
                    });
                }, function(e) { // LEVEL 2 ERROR getFile
                    deferred.reject("LEVEL 2: " + e.toString());
                });
            }, function() { // LEVEL 1 ERROR requestFileSystem
                deferred.reject("LEVEL 1");
            });
            console.log("load Game: " + gameId);
            return deferred.promise;
        }; /**********[ END getGame() ]**********/

    }
]);

/**********[ FILE SERVICE ]**********/
angular.module('kegelApp').service('FileService', ['$q',
    function($q) {

        /**********[ saveFile() ]**********/
        this.saveFile = function(filename, data) {
            console.log(filename);
            console.log(JSON.stringify(data));


            var deferred = $q.defer();

            /**********[ LEVEL 1 ]**********/
            window.requestFileSystem(window.PERSISTENT, 1024 * 1024, function(filesystem) { // SUCCESS requestFileSystem
                deferred.notify("notify requestFileSystem");
                filesystem.root.getFile(
                    filename, {
                    create: true
                }, function(fileEntry) { // SUCCESS getFile

                    // Create a FileWriter object for our FileEntry (log.txt).
                    fileEntry.createWriter(function(fileWriter) {

                        fileWriter.onwriteend = function(e) {
                            deferred.resolve("Write completed.");
                        };

                        fileWriter.one = function(e) {
                            deferred.reject("Write failed: " + e.toString());
                        };

                        // Create a new Blob and write it to filename.
                        var blob = new Blob([JSON.stringify(data)], {
                            type: 'text/plain'
                        });

                        fileWriter.write(blob);
                    }, function(e) { // LEVEL 2 ERROR requestFileSystem
                        deferred.reject("createWriter(): " + e.toString());
                    }); // END of createWriter

                }, function(e) { // LEVEL 2 ERROR requestFileSystem
                    deferred.reject("getFile(): " + e.toString());
                }); // END of getFile()

            }, function(e) { // LEVEL 1 ERROR requestFileSystem
                deferred.reject("requestFileSystem: " + e.toString());
            }); // END of requestFileSystem()

            return deferred.promise;
        }; // /**********[ END of saveFile() ]**********/

        /**********[ saveSpiel() ]**********/
        this.saveSpiel = function(spiel) {
            writeFile = function(fs) {

                fs.root.getFile('game.txt', {
                    create: true
                }, function(fileEntry) {

                    // Create a FileWriter object for our FileEntry (log.txt).
                    fileEntry.createWriter(function(fileWriter) {

                        fileWriter.onwriteend = function(e) {
                            console.log('Write completed.');
                        };

                        fileWriter.one = function(e) {
                            console.log('Write failed: ' + e.toString());
                        };

                        // Create a new Blob and write it to log.txt.
                        var blob = new Blob(['Game'], {
                            type: 'text/plain'
                        });

                        fileWriter.write(blob);

                    }, this.eHandler);

                }, this.eHandler);

            };

            eHandler = function(e) {
                console.log("saveSpiel e");
            };

            window.requestFileSystem(window.PERSISTENT, 5 * 1024 * 1024 /*5MB*/ , writeFile, eHandler);

        }; // END saveSpiel()


        /**********[ errorHandler() ]**********/

        function errorHandler(e) {
            var msg = '';

            switch (e.code) {
                case FileError.QUOTA_EXCEEDED_ERR:
                    msg = 'QUOTA_EXCEEDED_ERR';
                    break;
                case FileError.NOT_FOUND_ERR:
                    msg = 'NOT_FOUND_ERR';
                    break;
                case FileError.SECURITY_ERR:
                    msg = 'SECURITY_ERR';
                    break;
                case FileError.INVALID_MODIFICATION_ERR:
                    msg = 'INVALID_MODIFICATION_ERR';
                    break;
                case FileError.INVALID_STATE_ERR:
                    msg = 'INVALID_STATE_ERR';
                    break;
                default:
                    msg = 'Unknown Error';
                    break;
            }
            console.log('Error: ' + msg);
        }

    }
]); // END SERVICE
