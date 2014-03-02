'use strict';

/**
 * Initialize angular application and modules
 */
var Application = Application || {};

Application.Services = angular.module('application.services', []);
Application.Controllers = angular.module('application.controllers', []);

angular.module('scoreboardApp', ['application.services', 'application.controllers', 'highcharts-ng']);