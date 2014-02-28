var scoreboardApp = angular.module('scoreboardApp', ["highcharts-ng"]);
 
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
    }
});

scoreboardApp.controller('ChartCtrl', function ($scope) {
        //var seriesArray = $scope.chart.series;
		
	$scope.chartTypes = [
        {"id": "bar", "title": "Bar"}
    ];

    $scope.chartSeries = [
        {"name": "Aleksi", "data": [12]},
        {"name": "Antti", "data": [13]},
        {"name": "Julius", "data": [15]},
        {"name": "Mikko", "data": [11]},
        {"name": "Jukka", "data": [18]},
        {"name": "Pertti", "data": [14]},
        {"name": "Esko", "data": [15]},
        {"name": "Jaakko", "data": [16]},
        {"name": "Ismo", "data": [12]},
        {"name": "Kalle", "data": [17]}
    ];

    $scope.chartConfig = {
        options: {
            chart: {
                type: 'bar',
				backgroundColor:'rgba(255, 255, 255, 0.8)'
            },
            plotOptions: {
                series: {
                    stacking: ''
                }
            }
        },
		xAxis: {
			title: {
				text: ''
			},
			//categories: $scope.chartSeries.series
			categories: ['Aleksi','Antti','Julius']
			//categories: scope.$eval(name)
		},
		yAxis: {
			title: {
				text: ''
			}
		},
        series: $scope.chartSeries,
        title: {
            text: 'Score'
        },
        credits: {
            enabled: false
        },
		exporting: {
			enabled: false
		},
		legend: {
			enabled: false
		},
        loading: false
    }
		
	/*
    var score = ['32','45'];
	
    for (var i = 0; i < data.length; i++) {
        score.push(data[i].Score);   
    }

    var name = ['Orange','Apple'];
	
    for (var i = 0; i < data.length; i++) {
        name.push(data[i].Name);
    }

    $scope.renderChart = {
        chart: {
            type: 'bar'
        },
        xAxis: {
            categories: name
        },
        series: [{
            data: score
        }],
        legend: {
            enabled: false
        }
    }*/
});