/** ***************************************************************************
@name: index.js
@description: Main module of Application
@author: Gustavo Kluwe Saudade (https://github.com/GustavoSaudade)
@since: 09/01/2017
**************************************************************************** **/
    var curriculumApp = angular.module('curriculumApp', ['ngRoute']);

    // configure routes
    curriculumApp.config(function($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl : './pages/home.html',
                controller  : 'homeController'
            });
    });
