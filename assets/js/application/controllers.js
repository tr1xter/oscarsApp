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

    Application.Controllers.controller("NomineesVisibilityCtrl", ['$scope', '$http', function ($scope, $http) {
        $scope.showAndHide = function (nominee) {
            var $background;

            $('.categoryTitle').css('display', 'block');
            $('h4').css('display', 'none');
            $('p').css('display', 'none');
            $('.' + nominee + 'text').css('display', 'block');
            $('.categoryContainer').css('width', '40px');
            $('#' + nominee + 'div').css('width', '250px');
            $('#' + nominee).css('display', 'none');
            $background = $('#chartBackgroundDiv');
            $background.css('background-image', 'url(/images/nomineesPics/' + nominee + 'BG.jpg)');
            $background.hide().fadeIn(2000);
        };

        /**
         * Mark category choice as correct
         *
         * @param categoryId
         * @param nomineeName
         */
        $scope.selectChoice = function (categoryId, nomineeName) {
            if (globalControl) {
                $http.post('/category/select', {
                    category: categoryId,
                    choice: nomineeName
                });
            }
        }
    }]);


    Application.Controllers.controller("ChartCtrl", ['$scope', 'UserService', function ($scope, UserService) {
        $scope.chartSeries = [];

        // Get users
        UserService.changed = function() {
            // Filter unneeded data
            $scope.chartConfig.series = _.map(UserService.items, function(user) {
                return {
                    name: user.name,
                    data: user.data
                }
            });
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
