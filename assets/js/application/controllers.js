'use strict';
var MainCtrl;

MainCtrl = (function () {
    function MainCtrl() {
        Application.Controllers.controller("NomineesListCtrl", [
            "$scope", 'CategoryService', function ($scope, CategoryService) {
                var updateCategory;

                $scope.categories = [];
                updateCategory = function () {
                    $scope.categories = CategoryService.items;
                    return $scope.$apply();
                };
                CategoryService.initialized = updateCategory;
                return CategoryService.changed = updateCategory;
            }
        ]);
    }

    Application.Controllers.controller("NomineesVisibilityCtrl", function ($scope) {
        return $scope.showAndHide = function (nominee) {
            var $background;

            $('.categoryTitle').css('display', 'block');
            $('h4').css('display', 'none');
            $('p').css('display', 'none');
            $('.' + nominee + 'text').css('display', 'block');
            $('.categoryContainer').css('width', '40px');
            $('#' + nominee + 'div').css('width', '250px');
            $('#' + nominee).css('display', 'none');
            $background = $('#chartBackgroundDiv');
            $background.css('background-image', 'url(images/nomineesPics/' + nominee + 'BG.jpg)');
            $background.hide().fadeIn(2000);
        };
    });


    Application.Controllers.controller("ChartCtrl", ['$scope', 'UserService', function ($scope, UserService) {
        $scope.chartSeries = [];

        // Get users
        UserService.initialized = function(users) {
            // Filter unneeded data
            users = _.map(users, function(user) {
                return {
                    name: user.name,
                    data: user.data
                }
            });

            $scope.chartSeries = users;
            $scope.$apply();
            // TODO update chart
        };

        $scope.chartTypes = [
            {
                "id": "bar",
                "title": "Bar"
            }
        ];

        return $scope.chartConfig = {
            options: {
                chart: {
                    type: 'bar',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)'
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
                categories: ['']
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
            tooltip: {
                enabled: false
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
        };
    }]);

    return MainCtrl;

})();

window.MainCtrl = new MainCtrl();
