keijibanApp.controller('appController', function($scope, $http, $location) {

    // Required for version info from the bower file
    $http.get('bower.json').then(function(response) {
        $scope.bower = response.data;
    });

    // Load all the required config from the master JSON file
    $http.get('app/app.config.json').then(function(response) {
        $scope.info = response.data.info;
        $scope.modules = response.data.boards.modules;
        $scope.boards = response.data.boards.data;
    });

    // On load return to the list page becuase the app is stateful
    window.onload = function() {
        $location.url("list");
    };

});