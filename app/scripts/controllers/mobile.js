'use strict';

angular.module('DF16Retail')
	.controller('MobileCtrl', function ($scope, $state) {
		$scope.$state = $state;

		//Add background class to html element
		var htmlDOM = angular.element( document.querySelector( 'html' ));
		htmlDOM.addClass('mobile-background');

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
