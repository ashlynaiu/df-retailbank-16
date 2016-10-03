'use strict';

angular.module('DF16Retail')
	.controller('MainCtrl', function ($scope, $state) {
		$scope.$state = $state;
		//Standard step through click function
		$scope.standardStep = function(currentStep) {
			//Don't allow click at end of image loop
			if(currentStep === $scope.desktopStates.length - 1) {
				$state.go('mobile');
			}
			else {
				//Set up current and next step variables
				var current = currentStep;
				var next = currentStep + 1;
				$scope.desktopStates[next].show = true;
				$scope.desktopStates[current].show = false;
			}
		};
});
