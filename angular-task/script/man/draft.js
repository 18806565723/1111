/**
 * Created by Administrator on 2017/6/18.
 */
angular.module('myApp')
    .controller('Page2',['$scope','$http','$state',function ($scope,$http,$state) {

        $scope.data={};
        $scope.high = function () {//这是存为草稿的传参设置
            $scope.data.status = 1;
            $http({
                method: 'POST',
                params: $scope.data,
                url: '/carrots-admin-ajax/a/u/article',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
                .then(function () {
                    alert("已存为草稿");
                    $state.go('PageTab.Page1')
                });
        };


        $scope.draft = function () {//这是进行上线的传参的设置
            $scope.data.status = 2;
            $http({
                method: 'POST',
                params: $scope.data,
                url: '/carrots-admin-ajax/a/u/article',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
                .then(function () {
                    alert("已经上线");
                    $state.go('PageTab.Page1')
                    }
                );
        };

}]);


