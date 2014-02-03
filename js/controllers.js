var scoreboardApp = angular.module('scoreboardApp', []);
 
scoreboardApp.controller('NomineesListCtrl', function ($scope, $http) {
	$http.get('nominees/nominees.json').success(function(data) {
	$scope.predicate = 'orderNum';
	$scope.nominees = data;
	});
});

scoreboardApp.controller('NomineesVisibilityCtrl', function ($scope) {
	$scope.showAndHide = function(nominee) {
		$('.categoryTitle').css('display','block');
		$('h4').css('display','none');
		$('p').css('display','none');
		$('.' +nominee +'text').css('display','block');
		$('.categoryContainer').css('width','40px');
		$('#' +nominee +'div').css('width','250px');
		$('#' +nominee).css('display','none');
		
		$('#chartBackgroundDiv').css('background-image', 'url(img/nomineesPics/'+nominee+'BG.jpg)');
		$('#chartBackgroundDiv').hide().fadeIn(2000);
    }
});