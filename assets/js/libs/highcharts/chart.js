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
			}
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
		
		series: [{}]
	});
}