angular.module('madlibs', [])
.controller('mainCtrl', function($scope) {
	$scope.submitted = false;

	$scope.genders = [
		{label: 'Select gender', val: 0},
		{label: 'male', val: 1},
		{label: 'female', val: 2}
	];
	$scope.genderSpecifics = [
		{ // default
			name: '',
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
	var _jobTitle = '';
	var _tediousTask = '';
	var _celebrity = '';
	var _uselessSkill = '';
	var _adjective = '';
	var _obnoxiousCelebrity = '';
	var _dirtyTask = '';
	var _hugeNumber = '';
	$scope.name = function (newVal) {
		return arguments.length ? (_name = newVal) : _name;
	}
	$scope.jobTitle = function (newVal) {
		return arguments.length ? (_jobTitle = newVal) : _jobTitle;
	}
	$scope.tediousTask = function (newVal) {
		return arguments.length ? (_tediousTask = newVal) : _tediousTask;
	}
	$scope.celebrity = function (newVal) {
		return arguments.length ? (_celebrity = newVal) : _celebrity;
	}
	$scope.uselessSkill = function (newVal) {
		return arguments.length ? (_uselessSkill = newVal) : _uselessSkill;
	}
	$scope.adjective = function (newVal) {
		return arguments.length ? (_adjective = newVal) : _adjective;
	}
	$scope.obnoxiousCelebrity = function (newVal) {
		return arguments.length ? (_obnoxiousCelebrity = newVal) : _obnoxiousCelebrity;
	}
	$scope.dirtyTask = function (newVal) {
		return arguments.length ? (_dirtyTask = newVal) : _dirtyTask;
	}
	$scope.hugeNumber = function (newVal) {
		return arguments.length ? (_hugeNumber = newVal) : _hugeNumber;
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

	$scope.updatePlaceholder = function () {
		$scope.namePlaceholder = $scope.genderSpecifics[$scope.selectedGender].name + ' name';
	};

	// handler for generate button
	$scope.generateMadlibs = function () {
		$scope.submitted = true;
	};

	// handler for start over button
	$scope.startOver = function () {
		$scope.submitted = false;
		$scope.name('');
		$scope.jobTitle('');
		$scope.tediousTask('');
		$scope.celebrity('');
		$scope.obnoxiousCelebrity('');
		$scope.dirtyTask('');
		$scope.hugeNumber('');
		$scope.uselessSkill('');
		$scope.adjective('');
	};

	$scope.numberMatching = new RegExp('^[0-9]*$');
});