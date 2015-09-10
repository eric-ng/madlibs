angular.module('madlibs', [])
.controller('mainCtrl', function($scope) {
	$scope.genders = [
		{label: 'Select gender', val: 0},
		{label: 'male', val: 1},
		{label: 'female', val: 2}
	];
	$scope.genderSpecifics = [
		{ // default
			name: 'madlibs',
			subject: 'it',
			possession: 'its',
			object: 'it'
		}, 
		{ // male
			name: 'male',
			subject: 'he',
			possession: 'his',
			object: 'him'
		},
		{ // female
			name: 'female',
			subject: 'she',
			possession: 'her',
			object: 'her'
		}
	];
	$scope.selectedGender = 0;

	// variables for content
	var _name = '';
	$scope.name = function (newVal) {
		return arguments.length ? (_name = newVal) : 
			(_name.length ? _name : 
				($scope.selectedGender === 0 ? '{{name}}' : '{{' + $scope.genderSpecifics[$scope.selectedGender].name + ' name}}')
			);
	}
	$scope.subject = function () {
		return $scope.genderSpecifics[$scope.selectedGender].subject;
	}
	$scope.possession = function () {
		return $scope.genderSpecifics[$scope.selectedGender].possession;
	}
	$scope.object = function () {
		return $scope.genderSpecifics[$scope.selectedGender].object;
	}
	$scope.jobTitle = '{{job title}}';
	$scope.tediousTask = '{{tedious task}}';
	$scope.celebrity = '{{celebrity}}';
	$scope.uselessSkill = '{{useless skill}}';
	$scope.adjective = '{{adjective}}';
	$scope.obnoxiousCelebrity = '{{obnoxious celebrity}}';
	$scope.dirtyTask = '{{dirty task}}';
	$scope.hugeNumber = '{{huge number}}';
});