/**********[ MENU ]**********/
angular.module('kegelApp')
    .controller('MenuCtrl', [
        '$rootScope',
        '$scope',
        '$location',
    function($rootScope, $scope, $location) {
        $scope.go = function(where) {
            $location.path(where);
        };
    }
]);

/**********[ LOG ]**********/
angular.module('kegelApp')
    .controller('LogCtrl', [
        '$rootScope',
        '$scope',
        '$location',
        'AutheService',
    function($rootScope, $scope, $location, AutheService) {
        $scope.login = function(credentials) {
            // write Userdaten to rootScope
            alert("login");
        };

        $scope.register = function(credentials) {
            AutheService.register(credentials);
            $location.path("home");
        };
    }
]);

/**********[ AUTHE ]**********/
angular.module('kegelApp')
    .controller('UserCtrl', ['$rootScope', '$scope', '$location',
    function($rootScope, $scope, $location) {
        $scope.isAuthenticated = function() {
            return AutheService.isAuthenticated();
        };
    }
]);

/**********[ ERGEBNISSE ]**********/
angular.module('kegelApp')
    .controller('ErgebnisseCtrl', [
        '$rootScope',
        '$scope',
        '$location',
        'GameService',
        'ApiService',
    function($rootScope, $scope, $location, GameService, ApiService) {
        $scope.data = null;
        $scope.data = ApiService.getData();

        $scope.helloWorld = "Hello World";
        $scope.games = [];

        $scope.updateGame = function(id) {
            alert(id);
        };
        $scope.loadErgebnisse = function() {
            var promise = GameService.loadGames("divramod");
            promise.then(function(success) {
                console.log('Success: ' + success[0].id);
                $scope.games = success;
            }, function(reason) {
                console.log('Failed: ' + reason);
            }, function(update) {
                console.log('Got notification: ' + update);
            });
        };
        $scope.loadErgebnisse();
    }
]);

/**********[ BAHN ]**********/
angular.module('kegelApp')
    .controller('BahnCtrl', ['$rootScope', '$scope',
    function($rootScope, $scope) {
        $scope.test = "BAHN";
    }
]);

/**********[ EINGABE ]**********/
angular.module('kegelApp')
    .controller('EingabeCtrl', ['$rootScope', '$scope', 'MenuService', 'FileService', 'GameService',
    function($rootScope, $scope, MenuService, FileService, GameService) {
        $scope.spiel = {}; // beinhaltet die Daten eines Spiels
        $scope.daten = {}; // beinhaltet Spielorte etc
        $scope.einstellungen = {}; // lädt die bevorzugten Einstellungen

        //MenuService.setMenu();
        $scope.saveGame = function() {
            GameService.saveGame($scope.spiel);
        };

        /**********[ loadGame() ]**********/
        $scope.loadGame = function() {
            // 1402313111445

            //var promise = GameService.loadGame("1402313111445");
            var promise = GameService.loadGame("1402348800671");
            promise.then(function(success) {
                console.log('Success: ' + success);
                $scope.spiel = JSON.parse(success);
                console.log($scope.spiel.id);
            }, function(reason) {
                console.log('Failed: ' + reason);
            }, function(update) {
                console.log('Got notification: ' + update);
            });
        };

        // 0. ask if old game should be saved
        // 1. get new Game ID
        // 2. delete all input-data
        // 3. load Daten
        // 4. load PlayerSettings
        // 5. focus  
        $scope.newGame = function() {
            var promise = FileService.loadSpiel(11);
            promise.then(function(greeting) {
                console.log('Success: ' + greeting);
            }, function(reason) {
                console.log('Failed: ' + reason);
            }, function(update) {
                console.log('Got notification: ' + update);
            });
        };

        // _initGame
        // 0. gibt dem Spiel eine ID
        // 1. Lädt die Daten: $scope.daten
        // 2. Lädt die Einstellungen: $scope.einstellungen
        // 3. Initialisiert die Spieldaten mit den Einstellungen
        // 4. Springt zu Manuell einzugebenden Daten (Schreiber, Startbahn)
        _initGame = function() {
            // 0.
            $scope.spiel.id = GameService.createIdForGame();
            console.log($scope.spiel.id);
            // 1.
            _prepareDaten();
            // 2.
            //_loadEinstellungen();
            // 3.
            //_prepareSpiel();
            // 4. 
            // setFocus (Schreiber)
            $scope.spiel.isInitiated = true;
        };

        // _prepareDaten
        _prepareDaten = function() {
            // STARTBAHNEN
            $scope.daten.startbahnen = [1, 2, 3, 4];
            $scope.spiel.startbahn = $scope.daten.startbahnen[0];

            // SPIELORTE
            $scope.daten.spielorte = [
                    'Lichterfelde',
                    'Westendstadion',
                    'Fritz-Lesch-stadion',
                    'Marienwerder',
                    'Wandlitz',
                    'Klosterfelde',
                    'Groß Schönebeck',
            ];
            $scope.spiel.spielort = $scope.daten.spielorte[0];

            // SPIELER
            $scope.daten.spieler = [];
        };

        // _loadSpielereinstellungen
        _loadEinstellungen = function() {

        };

        // _prepareSpiel
        _prepareSpiel = function() {

        };

        /**********[ START EingabeCtrl ]**********/
        _initGame();
    }
]);

/**********[ HOME ]**********/
angular.module('kegelApp')
    .controller('HomeCtrl', ['$rootScope', '$scope', '$location',
    function($rootScope, $scope, $location) {
        $scope.user = $rootScope.user;
    }
]);
