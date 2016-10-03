'use strict';

angular.module('DF16Retail')
	.controller('MobileCtrl', function ($scope, $state) {
		$scope.$state = $state;
		console.log($scope.mobileStates);
		$scope.standardStep = function(currentStep) {
			//Don't allow click at end of image loop
			if(currentStep === $scope.mobileStates.length - 1) {
				return;
			}
			else {
				//Set up current and next step variables
				var current = currentStep;
				var next = currentStep + 1;
				$scope.mobileStates[next].show = true;
				$scope.mobileStates[current].show = false;
			}
		};
	});
