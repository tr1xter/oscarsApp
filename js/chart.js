// JavaScript Document
$(function () {
	// On document ready, call visualize on the datatable.
	$(document).ready(function() {
		loadChart();
	});
	
});

function loadChart(){
	
	var chart = new Highcharts.Chart({
		chart: {
			renderTo: 'chart',
				type: 'bar',
				backgroundColor:'rgba(255, 255, 255, 0.8)'
		},
		title: {
			text: 'Scores'
		},
		xAxis: {
			title: {
				text: ''
			},
			//categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
			//categories: ['Apple']
		},
		yAxis: {
			title: {
				text: ''
			}
		},
		exporting: {
			enabled: false
		},

		legend: {
			enabled: false
		},
		
		plotOptions: {
			series: {
				cursor: 'pointer',
				events: {
					click: function() {
						$('#frame')[0].src = 'http://highcharts.com';
					}
				}
			}
		},
		
		series: [{
			/*
			name: 'Apple',
			data: [15]
			}, {
			name: 'Orange',
			data: [18]
			}, {
			name: 'Banana',
			data: [18]*/
			}
		]
	});
}