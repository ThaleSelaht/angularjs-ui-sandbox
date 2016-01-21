'use strict';

var angularUiApp = angular.module('angularUiApp', ['ngAnimate','mgcrea.ngStrap', 'ngRoute','ngLocale']);
	angularUiApp.config(function($modalProvider) {
	    angular.extend($modalProvider.defaults, {
	    	html: true
	    });
	});
	angularUiApp.config(['$routeProvider','$locationProvider',  function($routeProvider, $locationProvider){
		$routeProvider.when('/',{
			templateUrl:'partials/index.html',
			controller:'angularUiCtrls'
		}).when('/thanks',{
			templateUrl:'partials/thanks.html',
			controller:'angularUiCtrls'
		}).otherwise({redirectTo:'/'});

		if(window.history && window.history.pushState){
		    $locationProvider.html5Mode({
			  enabled: true,
			  requireBase: true
			});
		 }
	}]);
	angularUiApp.controller('angularUiCtrls', function($scope, $modal, $http){	
		$scope.bool = false;

			$scope.meuModal = function(){
				var modal = $modal({
		        scope: $scope,
		        show: true,
		        animation: 'am-fade-and-scale',
		        placement: 'center',
		        templateUrl: 'modal.custom.html',
		        title: 'Teste modal!'
		    });

			};

			$scope.meuModalSucesso = function(){
				var modal = $modal({
		        scope: $scope,
		        show: true,
		        animation: 'am-fade-and-scale',
		        placement: 'center',
		        templateUrl: '/modal-sucesso.custom.html',
		    });
			};

			/*Form*/

			$scope.formData = {};

			$scope.submission = false;

			var param = function(data) {
	        var returnString = '';
	        for (d in data){
	            if (data.hasOwnProperty(d))
	               returnString += d + '=' + data[d] + '&';
	        }
	        
	        return returnString.slice( 0, returnString.length - 1 );
		};

		$scope.submitForm = function() {
		    $http({
		    method : 'POST',
		    url : 'process.php',
		    data : param($scope.formData), 
		    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
			})
		    .success(function(data) {
		       $scope.submissionMessage = data.messageSuccess;
		       $scope.formData = {}; 
		       $scope.submission = true; 
		       console.log(data);
		    });
		}

		$http({
			method:'GET',
			url:'app/css/main.min.css',
		}).success(function(data){
			console.log(data);
		});
	});