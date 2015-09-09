angular.module('madlibs', [])
.controller('mainCtrl', function($scope) {
	$scope.femaleName = '{{female name}}';
	$scope.jobTitle = '{{job title}}';
	$scope.tediousTask = '{{tedious task}}';
	$scope.celebrity = '{{celebrity}}';
	$scope.uselessSkill = '{{useless skill}}';
	$scope.adjective = '{{adjective}}';
	$scope.obnoxiousCelebrity = '{{obnoxious celebrity}}';
	$scope.dirtyTask = '{{dirty task}}';
	$scope.hugeNumber = '{{huge number}}';
});