'use strict';

angular.module('DF16Retail')
	.controller('FrameCtrl', function ($scope, $state) {
		$scope.$state = $state;

		var newVal = [];
		//TODO - DRY

		//create desktop image states
		var desktopNames = ['dashOne', 'dashTwo', 'dashThree'];
		$scope.desktopStates = [];
		for (var i = 0; i < desktopNames.length; i++) {
			newVal = {
				name: desktopNames[i],
				show: false
			};
			//Allow a start point
			if (desktopNames[i] === 'dashOne') {
				newVal.show = true;
			}
			$scope.desktopStates.push(newVal);
		}

		//create mobile image states
		var mobileNames = ['alert', 'details'];
		$scope.mobileStates = [];
		for (var k = 0; k < mobileNames.length; k++) {
			//Allow a start point
			newVal = {
				name: mobileNames[k],
				show: false
			};
			if (mobileNames[k] === 'start') {
				newVal.show = true;
			}
			$scope.mobileStates.push(newVal);
		}
	});
