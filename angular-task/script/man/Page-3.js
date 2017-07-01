/**
 * Created by Administrator on 2017/6/17.
 */
angular.module('myApp')
    .controller('Page3ctrl',function ($scope,$http,$state,$stateParams){
        $scope.names =["首页banner","找职位banner","找精英banner","行业大图"];

        $scope.id = $stateParams.id;
        $scope.cbeay = {};
        $http({
            method: 'GET',
            url: '/carrots-admin-ajax/a/article/' + $scope.id
        }).then(function (res) {
                if (res.data.code === 0) {
                    $scope.cbeay = res.data.data.article;
                    console.log(res.data.data.article.type);
                } else {
                    alert("请求失败" + res.data.message)
                }
            }, function error(responce) {
                // 请求失败执行代码
                alert("请求失败" + responce.data.message)
            }
        );


        $scope.draft = function () {
            $http({
                method: 'put',
                url: '/carrots-admin-ajax/a/u/article/'+$scope.id,
                params:$scope.cbeay
            }).then(
                //请求成功返回参数
                function success(res) {
                    if (res.data.code == 0){
                        alert("上传成功");
                        $state.go('PageTab.Page1')
                    }
                },
                function error(res) {
                    alert("失败"+res.data.message)
                }
            );
        };
        //
        // console.log($stateParams);
        // //
        // $scope.high = function () {//这是存为草稿的传参设置
        //
        //     $http({
        //         method: 'PUT',
        //         params: $scope.data,
        //         url: '/carrots-admin-ajax/a/u/article/{id}',
        //         headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        //     })
        //         .then(function () {
        //                 alert("已存为草稿");
        //             }
        //         );
        // };
        //
        //
        // $scope.draft = function () {//这是进行上线的传参的设置
        //     $scope.data.status = 2;
        //     $http({
        //         method: 'PUT',
        //         params: $scope.data,
        //         url: '/carrots-admin-ajax/a/u/article/{id}',
        //         headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        //     })
        //         .then(function () {
        //                 alert("已经上线");
        //             }
        //         );
        // };
        //


    });


