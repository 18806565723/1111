/**
 * Created by Administrator on 2017/5/27.
 */
angular.module("myApp", ['ui.router','angularFileUpload','ngMessages'])

.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("", "/PageTab/Page");

    $stateProvider
        .state("PageTab", {
            url: "/PageTab",
            templateUrl: "../html/PageTab.html"
        })
        .state("PageTab.Page", {
            url:"/Page",
            templateUrl: '../html/Page.html'
        })
        .state("PageTab.Page1", {
            url:"/Page1",
            controller:'Page1',
            templateUrl: '../html/Page-1.html'
        })
        .state("PageTab.Page2", {
            url:'/Page2?id',
            controller:'Page2',
            templateUrl: "../html/Page-2.html"
        })
        .state('PageTab.Page3', {
            url:'/Page3?id',
            templateUrl: '../html/Page-3.html',
            controller:'Page3ctrl'
        })
});
