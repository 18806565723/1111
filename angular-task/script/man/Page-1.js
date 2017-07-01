    /**
 * Created by Administrator on 2017/5/30.
 */
angular.module('myApp')
    .controller('Page1',['$scope','$http',function ($scope,$http) {

        $scope.detil = function (id) {
            $http({
                method :'put',
                url: "/carrots-admin-ajax/a/u/article/" + id,
                params : $scope.data
            }).then(function (res) {
                console.log(1);
                if (res.data.code === 0) {
                    $stateParams.id = $scope.data.id
                }
            })
        };
       // $scope.detil();

        $scope.data = {page: 1};
        tanbo = function () {//设置tanbo为http的函数，方便引用
            $http({
            method: 'GET',
            url: '/carrots-admin-ajax/a/article/search',
            params: $scope.data
        }).then(function (res) {
            $scope.inte = res.data.data.articleList;
            $scope.data.total = Math.ceil(res.data.data.total / 10);
        });
    };

        tanbo();
        //这是第一次进入页面时通过http获取列表


        $scope.sousuo = function () {
            $scope.data.startAt = Date.parse($scope.startAt);
            $scope.data.endAt = Date.parse($scope.endAt);
            $scope.data.endAt = $scope.data.endAt + 24 * 3600 * 1000 - 1;
            if ($scope.data.endAt < $scope.data.startAt){
                alert("时间错误")
            } else {
                tanbo()
            }
        };


        $scope.qingkong = function () {
            $scope.startAt = "";
            $scope.endAt = "";
            $scope.data.type = "";
            $scope.data.status = "";
            tanbo()
        };


        $scope.onoff = function (id,status) {   //上下架的设置
            var com = confirm("你确定切换状态吗？");
            if (com === true) {
                if (status === 1) {
                    $scope.data.status = 2;
                    $scope.data.id = id;
                }else if (status === 2) {
                    $scope.data.status = 1;
                    $scope.data.id = id;
                }
                    $http({
                        method: 'PUT',
                        url: '/carrots-admin-ajax/a/u/article/status',
                        // params: $scope.data
                        params:{
                            id : $scope.data.id,
                            status: $scope.data.status
                        }
                    }).then(function (res) {
                        if (res.data.code === 0) {
                            // $state.go($state.current, {}, {reload: true});
                            location.reload(true);
                            alert("上线成功", function () {
                            });
                        } else {
                            alert(res.data.message);
                        }
                    });

                    // $http({
                    //     method: 'PUT',
                    //     url: '/carrots-admin-ajax/a/u/article/status',
                    //     params: {
                    //         id : $scope.data.id,
                    //         status: $scope.data.status
                    //     }
                    // }).then(function (res) {
                    //     if (res.data.code === 0) {
                    //         // $state.go($state.current, {}, {reload: true});
                    //         location.reload(true);
                    //         alert("下线成功", function () {
                    //         });
                    //     } else {
                    //       alert(res.data.message);
                    //     }
                }
            else {
            }
        };


        $scope.deletearticle = function (id) {
            var cdn = confirm("你确定要删除吗？");
            if (cdn == true) {
                // $scope.data.id = id;
                console.log(1);
                $http({
                    method :'delete',
                    url: "/carrots-admin-ajax/a/u/article/"+id
                }).then(function (res) {
                    console.log(1);
                    if (res.data.code === 0) {
                        // $state.go($state.current, {}, {reload: true});
                        location.reload(true);
                        $state.go("PageTab.Page1");
                        alert("删除成功", function () {
                        });
                    }
                    else {
                        alert(res.data.message);
                    }
                })
            }else {
            }
        };







        $scope.home = function (){
            $scope.data.page = 1;
            tanbo()
        };//分页首页按钮的设置。到第一页


        $scope.retreat = function () {
            if($scope.data.page != 1 ){
                $scope.data.page--
            }else {
                $scope.data.page = 1;
            }
            tanbo()
        };//后退按钮的设置


        $scope.advance = function () {
            if($scope.data.page < $scope.data.total){
                $scope.data.page++
            }else {
                $scope.data.page = $scope.data.total;
            }
            tanbo()
        };//前进按钮的设置


        $scope.last = function () {
            $scope.data.page = $scope.data.total;
            tanbo()
        };//末页按钮


        $scope.some = function () {
            if ($scope.skip <= 1){
                $scope.skip = 1;
            }
            if ($scope.skip > $scope.data.total){
                $scope.skip = $scope.data.total;
            }
        };//跳转到第几页的input的设置。


        $scope.yes = function () {

                $scope.data.page = $scope.skip;
            if ($scope.skip = undefined){
            }
                tanbo()

        }


    }]);



