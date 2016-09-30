'use strict';

angular.module('DF16Retail')
	.controller('MainCtrl', function ($scope, clients, $timeout, $state) {
		$scope.$state = $state;

		//create desktop image states
		var desktopNames = ['start'];
		$scope.desktopStates = [];
		for (var i = 0; i < imageNames.length; i++) {
			var newVal = {
				name: imageNames[i],
				show: false
			};
			//Allow a start point
			if (imageNames[i] === 'start') {
				newVal.show = true;
			}
			$scope.desktopStates.push(newVal);
		}

		//create mobile image states
		var mobileNames = ['start'];
		$scope.mobileStates = [];
		for (var i = 0; i < imageNames.length; i++) {
			var newVal = {
				name: imageNames[i],
				show: false
			};
			//Allow a start point
			if (imageNames[i] === 'start') {
				newVal.show = true;
			}
			$scope.mobileStates.push(newVal);
		}
	});
