import 'angular-material';
import 'angular-route'
import './app/components/campaignView/index'
import './app/components/campaign/index';
import 'angular-utils-pagination'


var app = angular.module('TestTask', [

	'angularUtils.directives.dirPagination',
    'ngRoute',
    'app.campaign',
    'app.campaignDetail',
    'ngMaterial'
]);
app.config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/dashboard', {
          template: '<campaign></campaign>'
        }).
        when('/campaign/:campaignId', {
          template: '<campaign-detail></campaign-detail>'
        }).
        otherwise('/dashboard');
    }
  ]);
